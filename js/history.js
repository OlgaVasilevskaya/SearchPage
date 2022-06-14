const itemFrom = document.querySelector("#item-text-from");
itemFrom.textContent = localStorage.getItem('countryHistory');

const itemTo = document.querySelector("#item-text-to");
itemTo.textContent = localStorage.getItem('cityHistory');

document.querySelector("#item-close").addEventListener("click", () => {
  document.querySelector("#items").textContent = "";
});
