import Config from "./Config";
import Env from "./Env";
const obj = Config.getInstance();
const obj2 = Config.getInstance();

/*  // 정적 클래스
import Config from "./Config_static";
Config.setConf = "hello";
console.log(Config.getConf);
*/

const env = Env.getInstance();
console.log(env);
