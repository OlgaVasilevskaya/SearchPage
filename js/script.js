//Form validation

let today = new Date();

let date = today.getDate();
let month = +today.getMonth() + 1;
let year = today.getFullYear();

if(month < 10) {
   month = '0' + month;
}

if(date < 10) {
  date = '0' + date;
}

let minDate = `${year}-${month}-${date}`;
console.log("minDate", minDate, typeof(+minDate));

document.addEventListener("DOMContentLoaded",()=>{
  let forms = document.querySelectorAll("form");

  forms.forEach(formNode => {
    let searchBtn = formNode.querySelector("button[type='submit']");
    let clearBtn = formNode.querySelector("button[type='button']");
    let startDateInp = formNode.querySelector("#inputStartDate");
    let endDateInp = formNode.querySelector("#inputEndDate");

    startDateInp.addEventListener("change", e => {
      startDateInp = e.target.value;
      console.log("start", startDateInp, typeof(+startDateInp));
    });

    endDateInp.addEventListener("change", e => {
      endDateInp = e.target.value;
      console.log("end", endDateInp, typeof(+endDateInp));
    });

    function validateDate() {
      if(startDateInp > endDateInp || startDateInp < String(minDate)) {
        alert('error');
      }
        return true;
    }

    searchBtn.addEventListener("click", () => {
      validateDate();
    });

    clearBtn.addEventListener("click", () => {
      document.querySelector('#inputStartDate').value = '';
      document.querySelector('#inputEndDate').value = '';
      document.querySelector('#selectLocationCountry').value = '';
      document.querySelector('#selectLocationCity').value = '';
    });
  });
});

//Request Country

document.querySelector("#selectLocationCountry").addEventListener("click", () => {
  apiRequestCountry();
});

const apiRequestCountry = () => {
  document.querySelector("#selectLocationCountry").text = "";

  const url = 'https://namaztimes.kz/ru/api/country?type=json';

  fetch(url)
    .then(response => {
      if (!response.ok) throw Error(response.statusText);

      return response.json();
    })
    .then(data => {
      console.log('data', data);

      const arr = Object.values(data);

      for(let i = 1; i < arr.length; i++) {
        const country = document.createElement("option");
        country.className = "optionLocationCountry";
        console.log('country', country);
        country.text = data[i];

        document.querySelector("#selectLocationCountry").appendChild(country);
      }
    })
    .catch(error => console.log('error in getting country', error));
};

//Request City

document.querySelector("#selectLocationCity").addEventListener("click", () => {
  apiRequestCity();
});

const apiRequestCity = () => {
  document.querySelector("#selectLocationCity").text = "";

  const url = 'https://namaztimes.kz/ru/api/country?type=json';

  fetch(url)
    .then(response => {
      if (!response.ok) throw Error(response.statusText);

      return response.json();
    })
    .then(data => {
      console.log('data', data);

      const arrCity = Object.values(data);
      console.log('arrcity', arrCity.length);

      for(let i = 1; i < arrCity.length; i++) {
        const city = document.createElement("option");
        city.className = "optionLocationCity";
        console.log('city', city);
        city.text = data[i];

        document.querySelector("#selectLocationCity").appendChild(city);
      }
    })
    .catch(error => console.log('error in getting city', error));
};

//localStorage

function dataSelect(f) {
  let n = f.selectLocationCountry.selectedIndex;
  let a = f.selectLocationCity.selectedIndex;

  if(n) {
    let countryHistory = f.selectLocationCountry.options[n].value;
    localStorage.setItem('countryHistory', countryHistory); 
  }

  if(a) {
    let cityHistory = f.selectLocationCity.options[a].value;
    localStorage.setItem('cityHistory', cityHistory); 
  }
}
