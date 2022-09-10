import { EmbedBuilder } from 'discord.js';

// 트윗 딱 하나만.
export const convertFromTweetToDiscordEmbed = (
    tweetData,
    mediaList,
    userInfo
) => {
    console.log(userInfo);

    const title = userInfo.name + '(' + userInfo.username + ')';
    const embed = new EmbedBuilder().setTitle(title);
    if (tweetData.attachments?.media_keys !== undefined) {
    }

    return embed;
};

const getFirstImageUrl = (mediaKeys, mediaList) => {
    mediaList.filter(function (element) {
        return mediaKeys.includes(element.media_key);
    });
};
