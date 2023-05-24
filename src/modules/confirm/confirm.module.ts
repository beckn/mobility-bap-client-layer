import { Module ,Logger} from '@nestjs/common';
import { ConfirmController } from './confirm.controller';
import { ConfirmService } from './provider/confirm.service';
import { ConfirmMapper } from './mapper/confirm.mapper';
import { ProtocolServerService } from 'src/shared/providers/protocol-server.provider';
import { ContextFactory } from 'src/shared/factories/context.factory.provider';
import { HttpModule } from '@nestjs/axios';
import { UuidFactory } from 'src/shared/factories/uuid.factory.provider';

@Module({
  imports: [HttpModule],
  controllers: [ConfirmController],
  providers: [ConfirmService, ConfirmMapper, ProtocolServerService, ContextFactory, UuidFactory,Logger]
})
export class ConfirmModule {}
