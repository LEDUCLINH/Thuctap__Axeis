const link = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
var cities=[];
fetch(link)
 .then(res =>{
     if (!res.ok)
      throw Error(res.statusText);
     return res
 })
 .then(data => data.json())
 .then(result => cities.push(...result))
 .catch(err => console.log(err))
 
 function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
      const regex = new RegExp(wordToMatch, 'gi');
      return place.city.match(regex) || place.state.match(regex)
    });
  }
  function numberWithCommas(population) {
      let arr = population.split('');
      for (let i=arr.length-1;i>0;i--)
        if ((i-1)%3===0)
         arr.splice(i,0,',')
    return arr.join('')
    //return population.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  function displayMatches(e) {
    const input = e.target.value;
    const matchArray = findMatches(input, cities);
    const html = matchArray.map(place => {
      const regex = new RegExp(input, 'gi');
      const cityName = place.city.replace(regex, `<span class="hl">${input}</span>`);
      const stateName = place.state.replace(regex, `<span class="hl">${input}</span>`);
      return `
        <li>
          <span class="name">${cityName}, ${stateName}</span>
          <span class="population">${numberWithCommas(place.population)}</span>
        </li>
      `;
    }).join('');
    suggestions.innerHTML = html;
  }
  const searchInput = document.querySelector('.search');
  const suggestions = document.querySelector('.suggestions');
   searchInput.addEventListener('keyup', displayMatches);