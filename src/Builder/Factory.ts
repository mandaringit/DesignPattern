import Builder from "./Builder";
import Memory from "./Memory";
import Storage from "./Storage";

class Factory extends Builder {
  constructor() {
    super();
    console.log("Factory 객체를 생성하였습니다.");
  }

  build() {
    console.log("=== 빌드합니다. ===");
    this.algorithm.setCpu("i7");
    this.algorithm.setRam([new Memory(8), new Memory(8)]);
    this.algorithm.setStorage([new Storage(256), new Storage(512)]);

    return this;
  }
}

export default Factory;
