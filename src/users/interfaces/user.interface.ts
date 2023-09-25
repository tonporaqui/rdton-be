export enum UserStatus {
	CREATE = 'CREATE',
	UPDATE = 'UPDATE',
	DISABLE = 'DISABLE',
}

export interface User {
	id?: string
	name?: string
	first_name?: string
	last_name?: string
	status?: UserStatus
	date_create?: string
	password: string
}
