import { Client } from 'twitter-api-sdk';
import { makeAppDataSource } from '../util/DataSourceManager';
import { DataSource } from 'typeorm';
import { SubscriptionFormEntity } from '../domain/SubscriptionFormEntity';
import { getTweetsFromId } from '../twitter/TweetGetter';
import { SubscriptionFormDto } from '../domain/SubscriptionFormDto';

export const doSchduleJob = async () => {
    const appDataSource: DataSource = makeAppDataSource();
    await appDataSource.initialize();

    if (!appDataSource.isInitialized) {
        console.log('appDataSource is not Initialized');
        return;
    }

    const subscriptionFormList: SubscriptionFormEntity[] =
        await appDataSource.manager.find(SubscriptionFormEntity);

    const twitterClient: Client = new Client(process.env.TWITTER_BEARER_TOKEN);

    subscriptionFormList.forEach((subscriptionForm) => {
        getTweetAfterLastChecked(subscriptionForm, twitterClient);
    });

    if (appDataSource.isInitialized) {
        await appDataSource.destroy();
    }
};

const getTweetAfterLastChecked = async (
    form: SubscriptionFormEntity,
    client: Client
) => {
    const previousScanTimeISOFormat = (): string => {
        const nowTime: Date = new Date();
        nowTime.setMinutes(nowTime.getMinutes() - 10);

        return nowTime.toISOString();
    };

    console.log(previousScanTimeISOFormat());

    const subscriptionFormDto: SubscriptionFormDto =
        form.toSubscriptionFormDto();

    // console.log(
    //     'subscriptionFormDto.lastCheckedTime: ' +
    //         subscriptionFormDto.lastCheckedTime
    // );

    // 이 과정을 통해 과거에 갖고온 트윗들을 제외시킴.
    const { data: tweetData, includes: mediaData } = await getTweetsFromId(
        client,
        subscriptionFormDto.toGetAccountId,
        subscriptionFormDto.lastCheckedTime === null || undefined
            ? previousScanTimeISOFormat()
            : subscriptionFormDto.lastCheckedTime.toISOString(),
        subscriptionFormDto.lastCheckedTweetId
    );

    console.log('tweetData: ' + tweetData);
    console.log('mediaData: ' + mediaData);
};
