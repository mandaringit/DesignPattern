import Factory, { Products } from "./factory";
import LgProduct from "./LgProduct";
import SamsungProduct from "./SamsungProduct";

class ProductFactory extends Factory {
  constructor() {
    super();
    console.log("ProductFactory 를 생성합니다.");
  }

  createProduct(model: Products) {
    // 다양한 예외처리들 가능함
    if (model === "SAMSUNG") {
      return new SamsungProduct();
    } else if (model === "LG") {
      return new LgProduct();
    }
  }
}

export default ProductFactory;
