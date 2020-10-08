import Config from "./Config_protected";

// 싱글톤 상속.

class Env extends Config {
  setting() {
    console.log("시스템 환경을 설정합니다.");
  }

  public static getInstance() {
    if (!Env.instance) {
      console.log("Env 객체를 생성합니다.");
      Env.instance = new Config();
    }

    console.log("Env 객체를 반환합니다.");
    return Env.instance;
  }
}

export default Env;
