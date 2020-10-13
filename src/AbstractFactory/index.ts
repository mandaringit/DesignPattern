import KoreaFactory from "./KoreaFactory";
import StateFactory from "./StateFactory";

console.log("추상 팩터리 패턴을 실습합니다.");

// 한국 공장
const korea = new KoreaFactory();
const ham = korea.createTire();
ham.makeAssemble();

const bread = korea.createDoor();
bread.makeAssemble();

// 미국 공장
const state = new StateFactory();
const ham2 = state.createTire();
ham2.makeAssemble();

const bread2 = state.createDoor();
bread2.makeAssemble();
