import { ProductModel } from '@/4_entities/Products/model/types';
import { create } from 'zustand/react';
import { productsApi } from '@/4_entities/Products/api/productsApi';
import { catchHTTPError } from '@/5_shared/lib/catchHTTPError';

interface ProductsState {
	products: ProductModel[] | null;
	isLoading: boolean;
	getAllProducts: () => Promise<void>;
	error: string | null;
}

export const useProductsStore = create<ProductsState>((set) => ({
	products: null,
	isLoading: false,
	error: null,
	getAllProducts: async () => {
		set({ isLoading: true });
		try {
			const products = await productsApi.getAll();
			set({ products: products });
		} catch (error) {
			set({ error: catchHTTPError(error) });
		} finally {
			set({ isLoading: false });
		}
	},
}));
