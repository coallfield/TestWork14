'use client';

import { ReactNode, useEffect } from 'react';
import { useUserStore } from '@/4_entities/User/model/useUserStore';
import { userApi } from '@/4_entities/User';

interface AuthProviderProps {
	children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const { me } = useUserStore();

	useEffect(() => {
		if (userApi.getAccessToken()) {
			(async () => {
				await me();
			})();
		}
	}, []);

	return <>{children}</>;
};
