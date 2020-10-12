export type Products = "SAMSUNG" | "LG";

abstract class Factory {
  create(model: Products) {
    // return new LgProduct();
    return this.createProduct(model); // 하위 클래스로 위임
  }

  abstract createProduct(model: Products): any;
}

export default Factory;
