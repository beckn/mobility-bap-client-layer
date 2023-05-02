/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { StatusController } from './status.controller';
import { StatusService } from './providers/status.service';
import { StatusMapper } from './mapper/status.mapper';
import { ProtocolServerService } from 'src/shared/providers/protocol-server.provider';
import { ContextFactory } from 'src/shared/factories/context.factory.provider';
import { HttpModule } from '@nestjs/axios';
import { UuidFactory } from 'src/shared/factories/uuid.factory.provider';


@Module({
    imports: [HttpModule],
    controllers: [StatusController],
    providers: [StatusService, StatusMapper, ProtocolServerService, ContextFactory, UuidFactory],
})
export class StatusModule {}
