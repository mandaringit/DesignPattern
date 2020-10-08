class Config {
  private static instance: Config;
  private constructor() {
    console.log("Config 가 생성되었습니다.");
  }

  public static getInstance() {
    // 플라이웨이트 패턴 활용
    if (!Config.instance) {
      console.log("Config 객체를 생성합니다.");
      Config.instance = new Config();
    }

    console.log("Config 객체를 반환합니다.");
    return Config.instance;
  }
}

export default Config;
