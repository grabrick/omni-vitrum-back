import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as config from '../config/config.json';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    MongooseModule.forRoot(config.MONGOURL), ProductsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'), // `public` - папка в корне проекта
      serveRoot: '/public/', // Опционально: URL-путь, по которому будут доступны файлы
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
