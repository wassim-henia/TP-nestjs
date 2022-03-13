import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_FILTER } from '@nestjs/core';
import { LoggerMiddleware } from './logger.middleware';
import { logger } from './logger2.middleware';
import { ToDoController } from './to-do/to-do.controller';
import { ToDoService } from './to-do/to-do.service';
import { CustomFilter } from './filters/CustomFilter.filter';

@Module({
  imports: [],
  controllers: [AppController,ToDoController],
  providers: [AppService,ToDoService,{
    provide: APP_FILTER,
    useClass: CustomFilter,
    }],
})
export class AppModule {  configure(consumer: MiddlewareConsumer) {
  consumer
    .apply(LoggerMiddleware)
    .forRoutes('/*/?');
  consumer
    .apply(logger)
    .forRoutes("/**");

}}
