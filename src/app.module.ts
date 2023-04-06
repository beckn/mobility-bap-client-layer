import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsModule } from './modules/accounts/accounts.module';
import { DiscoveryModule } from '@nestjs/core';

@Module({
  imports: [AccountsModule, DiscoveryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
