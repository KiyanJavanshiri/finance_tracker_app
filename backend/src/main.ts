import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { GlobalExceptionFilter } from './filters/global-exception.filter';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { ResponseMapperInterceptor } from './interceptors/response-mapper.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.APP_PORT ?? 3000;
  app.setGlobalPrefix('/api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: false,
      transform: true,
      exceptionFactory: (errors) => {
        let errorMessage = '';

        errors.forEach((err) => {
          errorMessage += `${err.property}:\n`;
          for (const key in err.constraints) {
            errorMessage += `   ${key}: ${err.constraints[key]}\n`;
          }
        });

        throw new BadRequestException(errorMessage);
      },
    }),
  );
  app.useGlobalFilters(new GlobalExceptionFilter(), new HttpExceptionFilter());
  app.useGlobalInterceptors(new ResponseMapperInterceptor());
  await app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
bootstrap();
