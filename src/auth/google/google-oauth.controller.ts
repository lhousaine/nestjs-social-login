import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { GoogleOauthGuard } from './google-oauth.guard';
import { GoogleOauthService } from './google-oauth.service';

@Controller('google')
export class GoogleOauthController {
	constructor(private readonly googleOauthService: GoogleOauthService) {}

	@Get()
	@UseGuards(GoogleOauthGuard)
	async googleAuth(@Req() req) {}

	@Get('redirect')
	@UseGuards(GoogleOauthGuard)
	googleAuthRedirect(@Req() req) {
		return this.googleOauthService.googleLogin(req);
	}
}
