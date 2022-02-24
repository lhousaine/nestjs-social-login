import { Injectable } from '@nestjs/common';

import { AuthProvider, User } from '../shared';

@Injectable()
export class UsersService {
	async findOrCreate(userId: string, provider: AuthProvider): Promise<User> {
		// TODO Perform database lookup or create a new user if it'is not exist
		return {
			id: userId,
			provider,
			providerId: '123',
			displayName: 'Lhoussaine Ouarhou',
			photos: [{ value: 'https://avatars.githubusercontent.com/u/28536201' }],
		};
	}
}
