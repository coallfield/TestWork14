import { ReactNode } from 'react';
import cls from './AppButton.module.scss';

interface AppButtonProps {
	children: ReactNode;
	onClick?: () => void;
}

export const AppButton = ({ children, onClick }: AppButtonProps) => {
	return (
		<button onClick={onClick} className={cls.appButton}>
			{children}
		</button>
	);
};
