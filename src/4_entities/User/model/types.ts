export interface UserModel {
	id: string;
	username: string;
	email: string;
	firstName: string;
	lastName: string;
	accessToken: string;
	refreshToken: string;
}

export interface AuthData {
	username: string;
	password: string;
}
