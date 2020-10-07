import Factory, { Languages } from "./factory";

class Hello {
  public greeting(type: Languages) {
    const ko = Factory.getInstance(type)!; // 객체 생성을 다른 객체에 위임. (생성 위임)
    return ko.text();
  }
}

export default Hello;
