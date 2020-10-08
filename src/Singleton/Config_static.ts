// 정적 클래스를 활용한 싱글턴.

// 메모리 관리 차원에선 효율적이지만
// 다형성 문제가 있다.

class Config {
  public static conf: string;

  static set setConf(value: string) {
    Config.conf = value;
  }

  static get getConf() {
    return Config.conf;
  }
}

export default Config;
