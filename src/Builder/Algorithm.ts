import Computer from "./Computer";
import Memory from "./Memory";
import Storage from "./Storage";

abstract class Algorithm {
  constructor(protected Composite: Computer) {}

  public abstract setCpu(cpu: string): void;
  public abstract setRam(size: Memory[]): void;
  public abstract setStorage(size: Storage[]): void;

  getInstance() {
    return this.Composite;
  }
}

export default Algorithm;
