import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthData } from '@/4_entities/User/model/types';
import { useUserStore } from '@/4_entities/User/model/useUserStore';
import { useRouter } from 'next/navigation';
import { appRoutes } from '@/5_shared/config/appRoutes';

export const useAuth = () => {
	const { getAuthUser, isLoading, error: authError } = useUserStore();
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<AuthData>();

	const submit: SubmitHandler<AuthData> = async (data) => {
		await getAuthUser(data);
		if (useUserStore.getState().user) {
			router.push(appRoutes.home);
		}
		reset();
	};

	return {
		register,
		handleSubmit,
		errors,
		submit,
		authError,
		isLoading,
	};
};
