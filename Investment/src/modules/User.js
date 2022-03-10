import { data } from "./Data";

const name = document.querySelector('.name-user');

export default function importName(){
    name.innerHTML = data[0].name;
}