import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { User } from '../../users/user.entity';
import { JwtAuthService } from '../jwt/jwt-auth.service';
import { GoogleOauthGuard } from './google-oauth.guard';

@Controller('google')
export class GoogleOauthController {
	constructor(private readonly jwtAuthService: JwtAuthService) {}

	@Get()
	@UseGuards(GoogleOauthGuard)
	async googleAuth(@Req() req) {}

	@Get('redirect')
	@UseGuards(GoogleOauthGuard)
	googleAuthRedirect(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
		const user = req.user as User;
		const { accessToken } = this.jwtAuthService.login(user);
		res.cookie('jwt', accessToken);
		return { access_token: accessToken };
	}
}
