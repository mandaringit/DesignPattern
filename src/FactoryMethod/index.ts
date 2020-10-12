import ProductFactory from "./ProductFactory";

const fac = new ProductFactory();
const gram = fac.create("LG");
const always = fac.create("SAMSUNG");
gram.name();
always.name();
