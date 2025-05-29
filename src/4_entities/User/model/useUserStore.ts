import { AuthData, UserModel } from '@/4_entities/User/model/types';
import { create } from 'zustand/react';
import { userApi } from '@/4_entities/User';
import { catchHTTPError } from '@/5_shared/lib/catchHTTPError';

interface UserState {
	user: UserModel | null;
	isLoading: boolean;
	getAuthUser: (data: AuthData) => Promise<void>;
	me: () => Promise<void>;
	logout: () => void;
	error: string | null;
}

export const useUserStore = create<UserState>((set) => ({
	user: null,
	isLoading: false,
	error: null,
	getAuthUser: async (data) => {
		set({ isLoading: true });
		try {
			const user = await userApi.auth(data);
			set({ user: user });
		} catch (error) {
			set({ error: catchHTTPError(error) });
			setTimeout(() => {
				set({ error: null });
			}, 3000);
		} finally {
			set({ isLoading: false });
		}
	},
	logout: () => {
		userApi.logout();
		set({ user: null });
	},
	me: async () => {
		try {
			const user = await userApi.me();
			set({ user: user });
		} catch (error) {
			set({ user: null });
		}
	},
}));
