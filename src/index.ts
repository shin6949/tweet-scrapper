import * as cron from 'node-cron';
import * as dotenv from 'dotenv';
import * as path from 'path';
import {
  dbEnvCheck,
  appEnvChecker,
  twitterEnvChecker,
} from './util/EnvironmentValueChecker';
import { doSchduleJob } from './service/SchduledJob';

const main = async () => {
  (() => {
    dotenv.config({ path: path.join(__dirname, '../', 'app.env') });
    dotenv.config({ path: path.join(__dirname, '../', 'db.env') });
    dotenv.config({ path: path.join(__dirname, '../', 'twitter.env') });
    dotenv.config({ path: path.join(__dirname, '../', 'naver.env') });

    dbEnvCheck();
    appEnvChecker();
    twitterEnvChecker();
  })();
  
  doSchduleJob();

  task.start();
};

main();
