import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from 'nest-winston';

import * as winston from 'winston';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import { ValidationPipe } from '@nestjs/common/pipes';
dotenv.config()
async function bootstrap() {
  const app = await NestFactory.create(AppModule,{logger: WinstonModule.createLogger({
    format: winston.format.uncolorize(), //Uncolorize logs as weird character encoding appears when logs are colorized in cloudwatch.
    transports: [
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.timestamp(),
          winston.format.ms(),
          nestWinstonModuleUtilities.format.nestLike()
        ),
      })
    ],
  }),
  cors:true
});
app.useGlobalPipes(new ValidationPipe());
const config = new DocumentBuilder()
.setTitle('BAP Client layer')
.setDescription('APIs on bap client layer')
.setVersion('1.0')
.addTag('BAP')
.build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document,{
  swaggerOptions: {
    tagsSorter: 'alpha',
    operationsSorter: 'alpha',
  }
},);
  
await app.listen(8000);

}

bootstrap();




