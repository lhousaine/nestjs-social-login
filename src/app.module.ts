import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GithubOauthModule } from './auth/github/github-oauth.module';
import { GoogleOauthModule } from './auth/google/google-oauth.module';
import appConfig from './config/app.config';

@Module({
	imports: [
		TypeOrmModule.forRoot(),
		ConfigModule.forRoot({ isGlobal: true, load: [appConfig] }),
		GithubOauthModule,
		GoogleOauthModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
