import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from 'nest-winston';

import * as winston from 'winston';
import * as CloudWatchTransport from 'winston-cloudwatch';
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
      }),
      new CloudWatchTransport({
        retentionInDays:30,
        jsonMessage:true,
        name: "Cloudwatch Logs",
        logGroupName: process.env.CLOUDWATCH_GROUP_NAME,
        logStreamName: process.env.CLOUDWATCH_STREAM_NAME,
        awsAccessKeyId: process.env.AWS_ACCESS_KEY,
        awsSecretKey: process.env.AWS_KEY_SECRET,
        awsRegion: process.env.CLOUDWATCH_AWS_REGION,
        awsOptions: {credentials: {accessKeyId:process.env.AWS_ACCESS_KEY,secretAccessKey:process.env.AWS_KEY_SECRET,},region:process.env.CLOUDWATCH_AWS_REGION},

        messageFormatter: function (item) {
          return (
            {level: item.level,  message: item.message , stack:item.stack}.toString()
          );
        },
      }),
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
  
await app.listen(3000);

}

bootstrap();




