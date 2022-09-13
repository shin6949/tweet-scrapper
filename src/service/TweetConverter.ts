import { EmbedBuilder } from 'discord.js';
import { SubscriptionFormDto } from '../domain/SubscriptionFormDto';

// 트윗 딱 하나만.
export const convertFromTweetToDiscordEmbed = (
    tweetData,
    mediaList,
    userInfo,
    subscriptionFormDto: SubscriptionFormDto
) => {
    const author = userInfo.name + '(' + userInfo.username + ')';

    const embed = new EmbedBuilder().setAuthor({
        name: author,
        iconURL: userInfo.profile_image_url,
    });

    if (tweetData.attachments?.media_keys !== undefined) {
        embed.setImage(
            getFirstImageUrl(tweetData.attachments?.media_keys, mediaList)
        );
    }
    embed.setDescription(tweetData.text);
    embed.setURL(tweetData.entities.urls[0].url);
    embed.setColor(parseInt(subscriptionFormDto.colorHex, 16));

    return embed;
};

const getFirstImageUrl = (mediaKeys: Array<String>, mediaList): string => {
    const imageInfo = mediaList.filter(function (element: any) {
        return mediaKeys.includes(element.media_key);
    });

    if (imageInfo[0].type === 'video') {
        return imageInfo[0].preview_image_url;
    } else {
        return imageInfo[0].url;
    }
};
