/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { SupportController } from './support.controller';
import { SupportService } from './provider/support.service';
import { SupportMapper } from './mapper/support.mapper';
import { ProtocolServerService } from 'src/shared/providers/protocol-server.provider';
import { ContextFactory } from 'src/shared/factories/context.factory.provider';
import { HttpModule } from '@nestjs/axios';
import { UuidFactory } from 'src/shared/factories/uuid.factory.provider';


@Module({
    imports: [HttpModule],
    controllers: [SupportController],
    providers: [SupportService, SupportMapper, ProtocolServerService, ContextFactory, UuidFactory],
})
export class SupportModule {}
