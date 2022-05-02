import produce, {enableES5} from "immer";

export default (...args) => { // 프로듀스 함수 확장
	enableES5()
	return produce(...args)
}