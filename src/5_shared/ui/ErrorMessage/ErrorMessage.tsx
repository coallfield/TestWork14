import cls from './ErrorMessage.module.scss';

interface ErrorProps {
	message: string;
}

export const ErrorMessage = ({ message }: ErrorProps) => {
	return <h2 className={cls.error}>{message}</h2>;
};
