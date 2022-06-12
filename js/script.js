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
      formNode.reset();
    });
  });
});


document.querySelector("#selectLocationCity").addEventListener("click", () => {
    apiRequestCity();
});

const apiRequestCity = () => {
  document.querySelector("#optionLocationCity").text = "";

  const url = 'https://namaztimes.kz/ru/api/cities?id=almaty&type=json';

  fetch(url)
    .then(response => {
      if (!response.ok) throw Error(response.statusText);

      return response.json();
     })
     .then(data => {
        console.log('data', data);
        loadCity(data);
     })
     .catch(error => console.log('error in getting city', error));
};

const loadCity = (data) => {
  for(let i = 0; i < data.results; i++){
    const city = document.querySelector("#optionLocationCity");
    // console.log('city_in', city);
    // city.text = 'some text';
    city.text = `url(${data.results[i]})`;

    document.querySelector("#optionLocationCity").appendChild(city);
  }
};
