import Memory from "./Memory";

class Computer {
  public _cpu: string = "";
  public _ram: Memory[] = [];
  public _storage: Storage[] = [];

  constructor() {
    console.log("Computer 객체가 생성 되었습니다.");
  }

  public toString() {
    return `이 컴퓨터의 사양은 CPU = "${
      this._cpu
    }", RAM = "${this.memory()} GB", Storage = "${this.storage()} GB" 입니다.`;
  }

  public memory() {
    let size = 0;
    this._ram.forEach((mem) => (size += mem.getSize));
    return size;
  }

  public storage() {
    let size = 0;
    this._storage.forEach((disk) => (size += disk.getSize));
    return size;
  }
}

export default Computer;
