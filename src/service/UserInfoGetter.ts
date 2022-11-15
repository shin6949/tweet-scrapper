import { Client } from 'twitter-api-sdk';

export const getUserInfoFromTwitter = async (
  client: Client,
  toGetId: string
) => {
  const userList = await client.users.findUsersById({
    'ids': [toGetId],
    'user.fields': ['name', 'profile_image_url', 'url'],
  });
  return userList.data[0];
};
