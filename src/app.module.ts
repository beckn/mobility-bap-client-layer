import { RatingModule } from './rating/rating.module';
import { RatingController } from './rating/rating.controller';
import { RatingService } from './rating/rating.service';
import { DiscoveryModule } from './discovery/discovery.module';
import { DiscoveryService } from './discovery/discovery.service';
import { DiscoveryController } from './discovery/discovery.controller';
import { UserModule } from './account/user/user.module';
import { UserService } from './account/user/user.service';
import { UserController } from './account/user/user.controller';
import { BillingsModule } from './account/billings/billings.module';
import { AddressModule } from './account/address/address.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    RatingModule,
    DiscoveryModule,
    UserModule,
    BillingsModule,
    AddressModule,
  ],
  controllers: [
    RatingController,
    DiscoveryController,
    UserController,
    AppController,
  ],
  providers: [RatingService, DiscoveryService, UserService, AppService],
})
export class AppModule {}
