const item = document.querySelector("#item-text");
item.textContent = localStorage.getItem('test');

document.querySelector("#item-close").addEventListener("click", () => {
  document.querySelector("#items").textContent = "";
});
