import { Module } from '@nestjs/common';
import { GoogleOauthController } from './google-oauth.controller';
import { GoogleOauthGuard } from './google-oauth.guard';
import { GoogleOauthService } from './google-oauth.service';
import { GoogleOauthStrategy } from './google.strategy';

@Module({
	controllers: [GoogleOauthController],
	providers: [GoogleOauthService, GoogleOauthStrategy, GoogleOauthGuard],
})
export class GoogleOauthModule {}
