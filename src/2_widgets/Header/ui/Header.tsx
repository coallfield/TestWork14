'use client';
import cls from './Header.module.scss';
import Link from 'next/link';
import { appRoutes } from '@/5_shared/config/appRoutes';
import { useUserStore } from '@/4_entities/User/model/useUserStore';
import { AppButton } from '@/5_shared/ui/Button/AppButton';

export const Header = () => {
	const { user, logout } = useUserStore();

	return (
		<header className={cls.header}>
			{user && (
				<div className={cls.userInfo}>
					<span>{user.firstName}</span>
					<span>{user.lastName}</span>
				</div>
			)}
			<nav className={cls.nav}>
				<Link className={cls.link} href={appRoutes.home}>
					HOME
				</Link>
				{user ? (
					<AppButton onClick={logout}>LOGOUT</AppButton>
				) : (
					<Link className={cls.link} href={appRoutes.auth}>
						LOGIN
					</Link>
				)}
			</nav>
		</header>
	);
};
