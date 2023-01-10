import {atom, selector} from "recoil";

const tasksState = atom({
  key: "tasksState",
  default: []
})