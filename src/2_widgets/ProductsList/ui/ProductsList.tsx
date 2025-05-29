'use client';

import { useProductsList } from '@/3_features/Products/model/useProductsList';
import { Product, SkeletonProduct } from '@/4_entities/Products';
import cls from './ProductsList.module.scss';
import { ErrorMessage } from '@/5_shared/ui/ErrorMessage/ErrorMessage';
import { useUserStore } from '@/4_entities/User/model/useUserStore';
import { AppButton } from '@/5_shared/ui/Button/AppButton';

export const ProductsList = () => {
	const { products, isLoading, error } = useProductsList();
	const { user } = useUserStore();

	if (error) {
		return <ErrorMessage message={error} />;
	}

	if (isLoading) {
		return (
			<div className={cls.productsList}>
				{[...new Array(8)].map((_, index) => (
					<SkeletonProduct key={index} />
				))}
			</div>
		);
	}

	return (
		<div className={cls.productsList}>
			{products?.map((product) => {
				return (
					<Product key={product.id} product={product}>
						{user && <AppButton>Add to cart</AppButton>}
					</Product>
				);
			})}
		</div>
	);
};
