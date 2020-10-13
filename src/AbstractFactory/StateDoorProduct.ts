import DoorProduct from "./DoorProduct";

export default class StateDoorProduct extends DoorProduct {
  constructor() {
    super();
    console.log("StateDoorProduct 객체를 생성합니다.");
  }

  makeAssemble() {
    console.log("메서드 호출: makeAssemble");
    console.log("미국형 도어 장착");
  }
}
