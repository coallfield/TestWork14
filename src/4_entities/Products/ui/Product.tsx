import { ProductModel } from '@/4_entities/Products/model/types';
import cls from './Product.module.scss';
import { ReactNode } from 'react';

interface ProductProps {
	product: ProductModel;
	children?: ReactNode;
}

export const Product = ({ product, children }: ProductProps) => {
	return (
		<div className={cls.product}>
			<img
				className={cls.image}
				alt={product.title}
				src={product.images[0]}
			/>
			<div className={cls.info}>
				<span className={cls.title}>{product.title}</span>
				<span className={cls.category}>{product.category}</span>
				<span className={cls.price}>{product.price}</span>
			</div>
			{children}
		</div>
	);
};
