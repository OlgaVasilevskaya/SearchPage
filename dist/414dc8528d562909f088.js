import"../css/styles.css";let today=new Date,date=today.getDate(),month=+today.getMonth()+1,year=today.getFullYear();month<10&&(month="0"+month),date<10&&(date="0"+date);let minDate=`${year}-${month}-${date}`;console.log("minDate",minDate,typeof+minDate),document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll("form").forEach((t=>{let e=t.querySelector("button[type='submit']"),o=t.querySelector("button[type='button']"),n=t.querySelector("#inputStartDate"),c=t.querySelector("#inputEndDate");n.addEventListener("change",(t=>{n=t.target.value,console.log("start",n,typeof+n)})),c.addEventListener("change",(t=>{c=t.target.value,console.log("end",c,typeof+c)})),e.addEventListener("click",(()=>{(n>c||n<String(minDate))&&alert("error")})),o.addEventListener("click",(()=>{document.querySelector("#inputStartDate").value="",document.querySelector("#inputEndDate").value="",document.querySelector("#selectLocationCountry").value="",document.querySelector("#selectLocationCity").value=""}))}))})),document.querySelector("#selectLocationCountry").addEventListener("click",(()=>{apiRequestCountry()}));const apiRequestCountry=()=>{document.querySelector("#selectLocationCountry").text="",fetch("https://namaztimes.kz/ru/api/country?type=json").then((t=>{if(!t.ok)throw Error(t.statusText);return t.json()})).then((t=>{console.log("data",t);const e=Object.values(t);for(let o=1;o<e.length;o++){const e=document.createElement("option");e.className="optionLocationCountry",console.log("country",e),e.text=t[o],document.querySelector("#selectLocationCountry").appendChild(e)}})).catch((t=>console.log("error in getting country",t)))};document.querySelector("#selectLocationCity").addEventListener("click",(()=>{apiRequestCity()}));const apiRequestCity=()=>{document.querySelector("#selectLocationCity").text="",fetch("https://namaztimes.kz/ru/api/country?type=json").then((t=>{if(!t.ok)throw Error(t.statusText);return t.json()})).then((t=>{console.log("data",t);const e=Object.values(t);console.log("arrcity",e.length);for(let o=1;o<e.length;o++){const e=document.createElement("option");e.className="optionLocationCity",console.log("city",e),e.text=t[o],document.querySelector("#selectLocationCity").appendChild(e)}})).catch((t=>console.log("error in getting city",t)))};function dataSelect(t){let e=t.selectLocationCountry.selectedIndex,o=t.selectLocationCity.selectedIndex;if(e){let o=t.selectLocationCountry.options[e].value;localStorage.setItem("countryHistory",o)}if(o){let e=t.selectLocationCity.options[o].value;localStorage.setItem("cityHistory",e)}}