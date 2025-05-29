import { Skeleton } from '@/5_shared/ui/Skeleton/Skeleton';
import cls from './Product.module.scss';

export const SkeletonProduct = () => {
	return (
		<div className={cls.product}>
			<div className={cls.image}>
				<Skeleton height={450} />
			</div>
			<div className={cls.info}>
				<Skeleton height={20} width={250} />
				<Skeleton height={16} width={100} />
				<Skeleton height={20} width={80} />
			</div>
		</div>
	);
};
