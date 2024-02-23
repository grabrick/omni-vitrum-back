import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as config from '../config/config.json';

@Module({
  imports: [MongooseModule.forRoot(config.MONGOURL), ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
