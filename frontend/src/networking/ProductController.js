import { HttpService } from './HttpRequest';
import { Product } from '../models/Product';
import { ProductSerializer } from './ProductSerializer';

const allProductsRoute = 'products';

class ProductController {
  static async getAllProducts() {
    try {
      const responseData = await HttpService.get(allProductsRoute, {});
      const serializedData = (responseData || []).map(ProductSerializer.deSerialize);
      return serializedData.map((data) => new Product(data));
    } catch (error) {
      return [];
    }
  }
}

export { ProductController };
