import { EmbedBuilder } from 'discord.js';
import { SubscriptionFormDto } from '../dto/SubscriptionFormDTO';

// 트윗 딱 하나만.
export const convertFromTweetToDiscordEmbed = (
  tweetData,
  mediaList,
  userInfo,
  subscriptionFormDto: SubscriptionFormDto,
  translatedText?: string
) => {
  const tweetUrl = 'https://twitter.com/twitter/status/'.concat(tweetData.id);
  const author = userInfo.username;
  const title = userInfo.name + '의 새로운 트윗!';

  const embed = new EmbedBuilder()
    .setAuthor({
      name: author,
      iconURL: userInfo.profile_image_url,
      url: 'https://twitter.com/' + userInfo.username,
    })
    .setDescription(tweetData.text)
    .setTitle(title)
    .setURL(tweetUrl)
    .setColor(parseInt(subscriptionFormDto.colorHex, 16))
    .setFooter({
      text:
        tweetData.source === undefined || null ? 'Twitter' : tweetData.source,
      iconURL:
        'https://pbs.twimg.com/profile_images/1354481238233337856/-mUgc3Pc_400x400.jpg',
    })
    .setTimestamp(Date.parse(tweetData.created_at));

  if (tweetData.attachments?.media_keys !== undefined) {
    embed.setImage(
      getFirstImageUrl(tweetData.attachments?.media_keys, mediaList)
    );
  }

  if (translatedText !== undefined && translatedText !== null) {
    embed.addFields({
      name: '번역본',
      value: translatedText.replace(/\%open/gi, '[').replace(/\%close/gi, ']'),
      inline: false,
    });
  }

  return embed;
};

const getFirstImageUrl = (mediaKeys: Array<string>, mediaList): string => {
  const imageInfo = mediaList.filter(function (element: any) {
    return mediaKeys.includes(element.media_key);
  });

  if (imageInfo[0].type === 'video') {
    return imageInfo[0].preview_image_url;
  } else {
    return imageInfo[0].url;
  }
};
