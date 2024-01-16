import{CancelModule} from "./modules/cancel/cancel.module"
import { RatingModule } from "./modules/rating/rating.module";
import { InitModule } from "./modules/init/init.module";
import { SupportModule } from "./modules/support/support.module";
import { TrackModule } from "./modules/track/track.module";
import { StatusModule } from "./modules/status/status.module";
import { GetQuoteModule } from "./modules/get_quote/get_quote.module";
import { Module,Logger } from "@nestjs/common";
import { AccountsModule } from "./modules/accounts/accounts.module";
import { DiscoveryModule } from "./modules/discovery/discovery.module";
import { ConfirmModule } from "./modules/confirm/confirm.module";
import { HttpModule } from "@nestjs/axios";
import { MongooseModule } from '@nestjs/mongoose';
import { OrderModule } from "./modules/order/order.module";
import * as dotenv from 'dotenv';
dotenv.config(); 
@Module({
 
  imports: [
    CancelModule,
    RatingModule,
    InitModule,
    SupportModule,
    TrackModule,
    StatusModule,
    GetQuoteModule,
    AccountsModule,
    DiscoveryModule,
    ConfirmModule,
    HttpModule,
    OrderModule,
    MongooseModule.forRoot(process.env.DATABASE_URL)
   
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
