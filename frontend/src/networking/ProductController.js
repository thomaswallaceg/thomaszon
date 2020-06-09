import { HttpService } from './HttpRequest';
import { Product } from '../models/Product';
import { ProductSerializer } from './ProductSerializer';

const allProductsRoute = 'products';

class ProductController {
  static async getAllProducts() {
    const { success, data } = await HttpService.get(allProductsRoute, {}, true);
    if (success) {
      const serializedData = (data || []).map(ProductSerializer.deSerialize);
      return serializedData.map((productData) => new Product(productData));
    }
    return [];
  }
}

export { ProductController };
