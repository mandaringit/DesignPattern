import TireProduct from "./TireProduct";

export default class StateTireProduct extends TireProduct {
  constructor() {
    super();
    console.log("StateTireProduct 를 생성합니다.");
  }

  makeAssemble() {
    console.log("메서드 호출: makeAssemble");
    console.log("미국형 타이어 장착");
  }
}
