import DoorProduct from "./DoorProduct";

export default class KoreaDoorProduct extends DoorProduct {
  constructor() {
    super();
    console.log("KoreaDoorProduct 를 생성합니다.");
  }

  makeAssemble() {
    console.log("메서드 호출: makeAssemble");
    console.log("한국형 도어 장착");
  }
}
