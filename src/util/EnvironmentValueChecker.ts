export const dbEnvCheck = (): boolean => {
  const needToCheckList: string[] = [
    process.env.DB_HOST,
    process.env.DB_PORT,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    process.env.DB_NAME,
  ];

  for (const value of needToCheckList) {
    if (value == undefined) {
      console.error('DB Env IS NOT DEFINED!');
      throw new Error('Cannot loaded Environment Variable.');
    }
  }

  if (typeof Number(process.env.DB_PORT) !== 'number') {
    console.error('DB_PORT IS NOT number!');
    throw new Error('Cannot loaded DB_PORT variable.');
  }

  return true;
};

export const appEnvChecker = () => {
  if (typeof Number(process.env.DELAY_MINUTES) !== 'number') {
    console.error('DELAY_MINUTES IS NOT NUMBER!');
    throw new Error('Cannot loaded DELAY_MINUTES variable.');
  }
};

export const twitterEnvChecker = () => {
  if (process.env.TWITTER_BEARER_TOKEN == undefined) {
    console.error('TWITTER_BEARER_TOKEN IS NOT DEFINED!');
    throw new Error('Cannot loaded Environment Variable.');
  }
};
