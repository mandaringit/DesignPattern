import Factory from "./Factory";
import ProductModel from "./ProductModel";

const algorithm = new ProductModel();
const facotry = new Factory();
facotry.setAlgorithm(algorithm);

const computer = facotry.build().getInstance();

console.log(computer);
