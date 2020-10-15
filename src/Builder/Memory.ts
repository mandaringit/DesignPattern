class Memory {
  private size;
  constructor(size: number) {
    this.size = size;
  }

  set setSize(size: number) {
    this.size = size;
  }

  get getSize() {
    return this.size;
  }
}

export default Memory;
