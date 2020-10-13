import Factory from "./factory";
import StateDoorProduct from "./StateDoorProduct";
import StateTireProduct from "./StateTireProduct";

export default class StateFactory extends Factory {
  constructor() {
    super();
    console.log("StateFactory 객체를 생성합니다.");
  }

  createTire() {
    return new StateTireProduct();
  }
  createDoor() {
    return new StateDoorProduct();
  }
}
