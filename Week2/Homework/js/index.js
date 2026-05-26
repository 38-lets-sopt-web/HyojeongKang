import { renderExpenseList } from "./render.js";
import { getCurrentData } from "./store.js";
import { initEvents } from "./event.js";

document.addEventListener('DOMContentLoaded', () => {
    renderExpenseList(getCurrentData());
    initEvents();
});