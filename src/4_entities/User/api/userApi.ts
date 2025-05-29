import { axiosInstance } from '@/5_shared/api/axiosInstance';
import { AuthData, UserModel } from '@/4_entities/User/model/types';
import { isAxiosError } from 'axios';

class UserApi {
	private readonly endpoint = '/auth';

	async auth({ username, password }: AuthData): Promise<UserModel> {
		const user = await axiosInstance.post<UserModel, UserModel>(
			`${this.endpoint}/login`,
			{
				username,
				password,
			},
		);

		const { accessToken, refreshToken } = user;

		this.setAccessToken(accessToken);
		this.setRefreshToken(refreshToken);

		return user;
	}

	async me(): Promise<UserModel | null> {
		try {
			return await axiosInstance.get<UserModel, UserModel>(
				`${this.endpoint}/me`,
			);
		} catch (error) {
			if (isAxiosError(error) && error.response?.status === 401) {
				try {
					await this.refresh();
					return await axiosInstance.get<UserModel, UserModel>(
						`${this.endpoint}/me`,
					);
				} catch (refreshError) {
					this.logout();
				}
			}
			return null;
		}
	}

	async refresh() {
		const refreshResponse = await axiosInstance.post<
			{ accessToken: string; refreshToken: string },
			{ accessToken: string; refreshToken: string }
		>(`${this.endpoint}/refresh`, {
			refreshToken: this.getRefreshToken(),
		});
		this.setAccessToken(refreshResponse.accessToken);
		this.setRefreshToken(refreshResponse.refreshToken);
	}

	logout() {
		localStorage.removeItem('accessToken');
		localStorage.removeItem('refreshToken');
	}

	getAccessToken() {
		return localStorage.getItem('accessToken');
	}
	getRefreshToken() {
		return localStorage.getItem('refreshToken');
	}

	setAccessToken(accessToken: string) {
		localStorage.setItem('accessToken', accessToken);
	}
	setRefreshToken(refreshToken: string) {
		localStorage.setItem('refreshToken', refreshToken);
	}
}

const userApi = new UserApi();
export { userApi };
