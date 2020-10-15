import Algorithm from "./Algorithm";

abstract class Builder {
  constructor(protected algorithm: Algorithm) {}
  setAlgorithm(algorithm: Algorithm) {
    console.log("빌드 객체를 저장합니다. <= ");
    this.algorithm = algorithm;
    return this;
  }

  getInstance() {
    return this.algorithm.getInstance();
  }

  public abstract build(): Builder;
}

export default Builder;
