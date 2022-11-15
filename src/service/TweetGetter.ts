import { Client } from 'twitter-api-sdk';
import { SubscriptionFormDto } from '../dto/SubscriptionFormDto';

export const getTweetAfterLastChecked = async (
  form: SubscriptionFormDto,
  client: Client
) => {
  const previousScanTimeISOFormat = (): string => {
    const nowTime: Date = new Date();
    nowTime.setMinutes(nowTime.getMinutes() - 10);

    return nowTime.toISOString();
  };

  // 이 과정을 통해 과거에 갖고온 트윗들을 제외시킴.
  const { data: tweetData, includes: mediaData } = await getTweetsFromId(
    client,
    form.toGetAccountId,
    form.lastCheckedTime === null || form.lastCheckedTime === undefined
      ? previousScanTimeISOFormat()
      : form.lastCheckedTime.toISOString()
  );

  return { tweetData, mediaData };
};

const getTweetsFromId = async (
  client: Client,
  toGetId: string,
  startTime: string
) => {
  const { data, includes } = await client.tweets.usersIdTweets(toGetId, {
    'start_time': startTime,
    'tweet.fields': [
      'attachments',
      'source',
      'created_at',
      'entities',
      'id',
      'text',
    ],
    'expansions': ['attachments.media_keys', 'author_id'],
    'media.fields': ['preview_image_url', 'type', 'url'],
  });

  return { data, includes };
};
