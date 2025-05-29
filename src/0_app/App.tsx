import { FC, ReactNode } from 'react';
import { AuthProvider } from '@/0_app/Providers/AuthProvider';

export const App: FC<{ children: ReactNode }> = ({ children }) => {
	return <AuthProvider>{children}</AuthProvider>;
};
