import { StatusModule } from "./modules/status/status.module";
import { StatusController } from "./modules/status/status.controller";
import { GetQuoteModule } from "./modules/get_quote/get_quote.module";
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AccountsModule } from "./modules/accounts/accounts.module";
import { DiscoveryModule } from "./modules/discovery/discovery.module";
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [
    StatusModule,
    GetQuoteModule,
    AccountsModule,
    DiscoveryModule,
    HttpModule,
  ],
  controllers: [StatusController, AppController],
  providers: [ AppService],
})
export class AppModule {}
