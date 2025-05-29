'use client';
import { AppButton } from '@/5_shared/ui/Button/AppButton';
import { AppInput } from '@/5_shared/ui/Input/Input';
import cls from './AuthForm.module.scss';
import { useAuth } from '@/3_features/Auth/model/useAuth';
import { AuthData } from '@/4_entities/User/model/types';
import { ErrorMessage } from '@/5_shared/ui/ErrorMessage/ErrorMessage';
import { Loader } from '@/5_shared/ui/Loader/Loader';

export const AuthForm = () => {
	const { register, handleSubmit, submit, errors, authError, isLoading } =
		useAuth();

	return (
		<form
			onSubmit={handleSubmit(submit)}
			className={cls.authForm}
			noValidate
		>
			<h2>LOGIN</h2>
			<AppInput<AuthData>
				register={register}
				label={'username'}
				required={'Username is required'}
				minLength={{
					value: 3,
					message: 'Username must be at least 3 characters',
				}}
			/>
			{errors.username && (
				<ErrorMessage message={errors.username.message as string} />
			)}
			<AppInput<AuthData>
				register={register}
				label={'password'}
				required={'Username is required'}
				minLength={{
					value: 3,
					message: 'Password must be at least 3 characters',
				}}
			/>
			{errors.password && (
				<ErrorMessage message={errors.password.message as string} />
			)}
			<AppButton>{isLoading ? <Loader /> : 'LOGIN'}</AppButton>
			{authError && <ErrorMessage message={authError} />}
		</form>
	);
};
