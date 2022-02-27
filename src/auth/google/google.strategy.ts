import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class GoogleOauthStrategy extends PassportStrategy(Strategy, 'google') {
	constructor(private usersService: UsersService) {
		super({
			clientID: process.env.GOOGLE_OAUTH_CLIENT_ID,
			clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
			callbackURL: 'http://localhost:3000/google/redirect',
			scope: ['email', 'profile'],
		});
	}

	async validate(accessToken: string, refreshToken: string, profile: any): Promise<any> {
		console.log(profile);
		const user = await this.usersService.findOrCreate(profile);
		if (!user) {
			throw new UnauthorizedException();
		}
		return user;
	}
}
