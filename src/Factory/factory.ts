import English from "./English";
import Korean from "./korean";

export enum Languages {
  KOREAN = "ko",
  ENGLISH = "en",
}

class Factory {
  static readonly KOREAN: Languages.KOREAN;
  static readonly ENGLISH: Languages.ENGLISH;

  public static getInstance(type: Languages) {
    // 찍어낼 객체를 동적으로 변화시키기 쉬움.
    console.log("팩토리: 객체를 생성하여 반환합니다.\n");
    if (type === this.KOREAN) {
      return new Korean();
    } else if (type === this.ENGLISH) {
      return new English();
    }
  }
}

export default Factory;
