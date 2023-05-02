import { GetQuoteModule } from './modules/get_quote/get_quote.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsModule } from './modules/accounts/accounts.module';
import { DiscoveryModule } from './modules/discovery/discovery.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
      GetQuoteModule, AccountsModule, DiscoveryModule, HttpModule],
  controllers: [
       AppController],
  providers: [AppService],
})
export class AppModule {}
