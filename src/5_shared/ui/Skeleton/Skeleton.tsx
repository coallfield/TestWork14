import cls from './Skeleton.module.scss';

interface SkeletonProps {
	width?: number;
	height?: number;
	className?: string;
}

export const Skeleton = (props: SkeletonProps) => {
	const { width, height, className } = props;
	return (
		<div
			className={`${cls.skeleton} ${className || ''}`}
			style={{ width, height }}
		/>
	);
};
