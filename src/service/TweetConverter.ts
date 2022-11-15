import { EmbedBuilder } from 'discord.js';
import { SubscriptionFormDto } from '../dto/SubscriptionFormDto';

// 트윗 딱 하나만.
export const convertFromTweetToDiscordEmbed = (
  tweetData,
  mediaList,
  userInfo,
  subscriptionFormDto: SubscriptionFormDto
) => {
  const tweetUrl = 'https://twitter.com/twitter/status/' + tweetData.id;
  const author = userInfo.username;
  const title = userInfo.name + '의 새로운 트윗!';

  const embed = new EmbedBuilder().setAuthor({
    name: author,
    iconURL: userInfo.profile_image_url,
    url: 'https://twitter.com/' + userInfo.username,
  });

  if (tweetData.attachments?.media_keys !== undefined) {
    embed.setImage(
      getFirstImageUrl(tweetData.attachments?.media_keys, mediaList)
    );
  }
  embed.setDescription(tweetData.text);
  embed.setTitle(title);
  embed.setURL(tweetUrl);
  embed.setColor(parseInt(subscriptionFormDto.colorHex, 16));
  embed.setFooter({
    text: tweetData.source,
    iconURL:
      'https://pbs.twimg.com/profile_images/1354481238233337856/-mUgc3Pc_400x400.jpg',
  });
  embed.setTimestamp(Date.parse(tweetData.created_at));

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
