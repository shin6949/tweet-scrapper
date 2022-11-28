import { Client } from 'twitter-api-sdk';
import { makeAppDataSource } from '../util/DataSourceManager';
import { DataSource } from 'typeorm';
import { EmbedBuilder, WebhookClient } from 'discord.js';

import { SubscriptionFormEntity } from '../domain/SubscriptionFormEntity';
import { getTweetAfterLastChecked } from './TweetGetter';
import { getUserInfoFromTwitter } from './UserInfoGetter';
import { convertFromTweetToDiscordEmbed } from './TweetConverter';
import { SubscriptionFormDto } from '../dto/SubscriptionFormDTO';
import { configureWebhookClient } from './WebhookClientJob';

export const doSchduleJob = async () => {
  console.log(new Date().toLocaleTimeString() + ' Job Start.');
  const appDataSource: DataSource = makeAppDataSource();
  await appDataSource.initialize();

  if (!appDataSource.isInitialized) {
    console.log('appDataSource is not Initialized');
    return;
  }

  const subscriptionFormList: SubscriptionFormEntity[] =
    await appDataSource.manager.find(SubscriptionFormEntity);

  const twitterClient: Client = new Client(process.env.TWITTER_BEARER_TOKEN);

  for (const subscriptionForm of subscriptionFormList) {
    const subscriptionFormDto: SubscriptionFormDto =
      subscriptionForm.toSubscriptionFormDto();

    const checkedTime = new Date();

    const { tweetData, mediaData } = await getTweetAfterLastChecked(
      subscriptionFormDto,
      twitterClient
    );

    // 2개 모두 undefined인 경우, 새로운 트윗이 없다는 의미
    if (tweetData === undefined && mediaData === undefined) {
      console.log(
        'No New Tweet. ID: ' +
          subscriptionFormDto.toGetAccountId +
          ' Breaking This Process.'
      );
      subscriptionFormDto.lastCheckedTime = checkedTime;
      await appDataSource.manager.save(
        subscriptionFormDto.toSubscriptionFormEntity()
      );
      continue;
    }
    console.log('There Are New Tweets!');

    const userInfo = await getUserInfoFromTwitter(
      twitterClient,
      subscriptionFormDto.toGetAccountId
    );

    let embedData: Array<EmbedBuilder> = [];
    for (const tweet of tweetData) {
      const embedBuilder: EmbedBuilder = convertFromTweetToDiscordEmbed(
        tweet,
        mediaData.media,
        userInfo,
        subscriptionFormDto
      );
      embedData.push(embedBuilder);
    }

    const webhook: WebhookClient = configureWebhookClient(
      subscriptionFormDto,
      embedData
    );

    webhook.send({
      embeds: embedData,
      username: subscriptionFormDto.authorName,
      avatarURL: subscriptionFormDto.authorProfileUrl,
    });

    subscriptionFormDto.lastCheckedTime = checkedTime;

    if (appDataSource.isInitialized) {
      await appDataSource.manager.save(
        subscriptionFormDto.toSubscriptionFormEntity()
      );
    }
  }

  if (appDataSource.isInitialized) {
    await appDataSource.destroy();
  }
};
