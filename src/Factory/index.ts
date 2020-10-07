import Factory, { Languages } from "./factory";
import Hello from "./hello";

const obj = new Hello();

console.log(obj.greeting(Factory.ENGLISH));
console.log(obj.greeting(Factory.KOREAN));
