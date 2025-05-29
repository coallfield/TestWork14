import { useProductsStore } from '@/4_entities/Products';
import { useEffect } from 'react';

export const useProductsList = () => {
	const { products, isLoading, error, getAllProducts } = useProductsStore();

	useEffect(() => {
		(async () => {
			await getAllProducts();
		})();
	}, []);

	return {
		products,
		isLoading,
		error,
	};
};
