/**
 * Copyright 2017 - Author gauravm.git@gmail.com
 */

import { AppModule } from './app/app.module';

import './styles.scss';

const logger = console;

if (process.env.ENV === 'production') {
  logger.info('Production mode.');
} else {
  logger.info('Development mode.');
}

const appModule = new AppModule();
appModule.bootstrap();
