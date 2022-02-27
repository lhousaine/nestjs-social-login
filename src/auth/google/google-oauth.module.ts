import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { JwtAuthModule } from '../jwt/jwt-auth.module';
import { GoogleOauthController } from './google-oauth.controller';
import { GoogleOauthGuard } from './google-oauth.guard';
import { GoogleOauthStrategy } from './google.strategy';

@Module({
	imports: [JwtAuthModule, UsersModule],
	controllers: [GoogleOauthController],
	providers: [GoogleOauthStrategy, GoogleOauthGuard],
})
export class GoogleOauthModule {}
