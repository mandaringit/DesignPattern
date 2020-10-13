import Factory from "./factory";
import KoreaDoorProduct from "./KoreaDoorProduct";
import KoreaTireProduct from "./KoreaTireProduct";

class KoreaFactory extends Factory {
  constructor() {
    super();
    console.log("KoreaFactory 객체를 생성합니다.");
  }

  public createTire() {
    return new KoreaTireProduct();
  }
  public createDoor() {
    return new KoreaDoorProduct();
  }
}

export default KoreaFactory;
