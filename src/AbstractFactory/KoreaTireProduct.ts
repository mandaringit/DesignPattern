import TireProduct from "./TireProduct";

export default class KoreaTireProduct extends TireProduct {
  constructor() {
    super();
    console.log("KoreaTireProduct 를 생성합니다.");
  }
  makeAssemble() {
    console.log("메서드 호출 : makeAssemble");
    console.log("한국형 타이어 장착");
  }
}
