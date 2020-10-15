import Algorithm from "./Algorithm";
import Computer from "./Computer";
import Memory from "./Memory";

class ProductModel extends Algorithm {
  constructor() {
    super(new Computer());
    console.log("Algorithm ProductModel 객체를 생성하였습니다.");
  }

  setCpu(cpu: string) {
    console.log("CPU를 설정합니다.");
    this.Composite._cpu = cpu;
  }

  setRam(size: Memory[]) {
    console.log("RAM을 설정합니다 >>");
    size.forEach((mem) => {
      console.log(`슬롯 ${mem} GB 장착`);
      this.Composite._ram.push(mem);
    });
    console.log("\n");
    return this;
  }

  setStorage(size: Storage[]) {
    console.log("Storage를 설정합니다>>");
    size.forEach((disk) => {
      console.log(`슬롯 ${disk} GB 장착`);
      this.Composite._storage.push(disk);
    });
    return this;
  }
}

export default ProductModel;
