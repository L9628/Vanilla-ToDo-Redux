import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// reducer는 data를 바꾸고 modify 하는 function 여기선 countModifier
// state는 변경이 필요한 data 여기선 count
const countModifier = (count = 0) => {
  return count;
};

// store는 data를 담는 저장소 여기선 countStore
const countStore = createStore(countModifier);
console.log(countStore.getState());

// let count = 0;

// number.innerText = count;

// const updateText = () => {
//   number.innerText = count;
// };

// const handleAdd = () => {
//   count++;
//   updateText();
// };

// const handleMinus = () => {
//   count--;
//   updateText();
// };

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);
