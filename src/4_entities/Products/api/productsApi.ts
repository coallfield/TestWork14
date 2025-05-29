import { axiosInstance } from '@/5_shared/api/axiosInstance';
import { ProductModel } from '@/4_entities/Products/model/types';
import { FEED_LIMIT } from '@/5_shared/consts/app.consts';

class ProductsApi {
	private readonly endpoint = '/products';

	async getAll() {
		const endpoint = `${this.endpoint + `/?limit=${FEED_LIMIT}`}`;
		const data = await axiosInstance.get<
			{ products: ProductModel[] },
			{ products: ProductModel[] }
		>(endpoint);
		return data.products;
	}
}

const productsApi = new ProductsApi();
export { productsApi };
