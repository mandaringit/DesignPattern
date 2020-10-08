// 상속을 위한 싱글톤 패턴.

class Config {
  protected static instance: Config;
  protected constructor() {
    console.log("Config 가 생성되었습니다.");
  }
}

export default Config;
