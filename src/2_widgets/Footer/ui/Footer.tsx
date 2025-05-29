'use client';
import cls from './Footer.module.scss';
import { useUserStore } from '@/4_entities/User/model/useUserStore';

export const Footer = () => {
	const { user } = useUserStore();
	return (
		<footer className={cls.footer}>
			{user && <span>Logged as {user.email}</span>}
			<span>{new Date().getFullYear()}</span>
		</footer>
	);
};
