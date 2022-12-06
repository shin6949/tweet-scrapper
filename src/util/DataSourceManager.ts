import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { SubscriptionFormEntity } from '../domain/SubscriptionFormEntity';

export const makeAppDataSource = (): DataSource => {
  return new DataSource({
    type: 'mariadb',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [SubscriptionFormEntity],
    migrations: [],
    subscribers: [],
  });
};
