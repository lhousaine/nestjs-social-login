import { Profile } from 'passport-github';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(User)
		private readonly userRepository: Repository<User>,
	) {}
	async findOrCreate(profile: Profile): Promise<User> {
		const user = {
			id: profile.id,
			provider: profile.provider,
			providerId: '123',
			username: profile.username || profile._json['email'],
			displayName: profile.displayName,
			photos: profile.photos.map((photo) => photo.value),
		};
		return this.userRepository.save(user);
	}
}
