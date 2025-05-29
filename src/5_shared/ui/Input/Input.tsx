import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import cls from './Input.module.scss';

interface AppInputProps<T extends FieldValues> {
	register: UseFormRegister<T>;
	required?: boolean | string;
	minLength: {
		value: number;
		message: string;
	};
	label: Path<T>;
}

export const AppInput = <T extends FieldValues>({
	register,
	required,
	minLength,
	label,
}: AppInputProps<T>) => {
	return (
		<>
			<input
				className={cls.input}
				placeholder={label}
				id={label}
				{...register(label, {
					required,
					minLength: {
						value: minLength.value,
						message: minLength.message,
					},
				})}
			/>
		</>
	);
};
