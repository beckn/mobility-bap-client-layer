/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TrackController } from './track.controller';
import { TrackService } from './provider/track.service';
import { TrackMapper } from './mapper/track.mapper';
import { ProtocolServerService } from 'src/shared/providers/protocol-server.provider';
import { ContextFactory } from 'src/shared/factories/context.factory.provider';
import { HttpModule } from '@nestjs/axios';
import { UuidFactory } from 'src/shared/factories/uuid.factory.provider';


@Module({
    imports: [HttpModule],
    controllers: [TrackController],
    providers: [TrackService, TrackMapper, ProtocolServerService, ContextFactory, UuidFactory],
})
export class TrackModule {}
