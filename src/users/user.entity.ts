import { AuthProvider } from 'src/shared/types/auth';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('users')
export class User {
	@PrimaryColumn()
	id: string;

	@Column()
	provider: AuthProvider;

	@Column()
	providerId: string;

	@Column()
	username: string;

	@Column()
	displayName: string;

	@Column('text', { nullable: true, array: true })
	photos: string[];
}
