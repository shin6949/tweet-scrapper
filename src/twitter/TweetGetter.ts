import { Client } from 'twitter-api-sdk';

export const getTweetsFromId = async (
    client: Client,
    toGetId: string,
    startTime: string,
    sinceId?: string
) => {
    console.log('toGetId: ' + toGetId);
    const { data, includes } = await client.tweets.usersIdTweets(toGetId, {
        'start_time': startTime,
        'tweet.fields': ['attachments', 'created_at', 'entities', 'id', 'text'],
        'expansions': ['attachments.media_keys', 'author_id'],
        'media.fields': ['preview_image_url', 'type', 'url'],
    });

    console.log('tweetData: ' + data);
    console.log('mediaData: ' + includes);
    return { data, includes };

    // if (sinceId === undefined) {

    // } else {
    //     const { data: tweetData, includes: mediaData } =
    //         await client.tweets.usersIdTweets(toGetId, {
    //             'since_id': sinceId,
    //             'start_time': startTime,
    //             'tweet.fields': [
    //                 'attachments',
    //                 'created_at',
    //                 'entities',
    //                 'id',
    //                 'text',
    //             ],
    //             'expansions': ['attachments.media_keys', 'author_id'],
    //             'media.fields': ['preview_image_url', 'type', 'url'],
    //         });
    //     return { tweetData, mediaData };
    // }
};
