const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then (res => res.json())
    .then (data =>displayCountris(data));
}

const displayCountris = countries => {
    console.log(countries[0]);
    const container = document.getElementById('container');
    const countriesHTML = countries.map( country => countryHtmls(country));
    container.innerHTML = countriesHTML.join(' ');   
     console.log(countriesHTML);
}
const countryHtmls = country => {
    return `
        <div class= 'country'>
        <h2>${country.name.common}</h2>
        <h4> Capital: ${country.capital}</h4>
        <img src = "${country.flags.png}"> 
        </div>
    `
}

loadCountries();
