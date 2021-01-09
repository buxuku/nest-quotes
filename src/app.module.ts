import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuotesService } from './quotes.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, QuotesService],
})
export class AppModule {}
