const item = document.querySelector("#item-text");
item.textContent = localStorage.getItem('test');
// item.textContent = localStorage.getItem('cityHistory');

document.querySelector("#item-close").addEventListener("click", () => {
  document.querySelector("#items").textContent = "";
});
