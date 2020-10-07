import Factory, { Languages } from "./factory";
import Korean from "./korean";

class Hello {
  public greeting() {
    const ko = Hello.factory();
    return ko.text();
  }

  // 단순한 경우에 쓰는 단순 팩토리 패턴.
  public static factory() {
    return new Korean();
  }
}

export default Hello;
