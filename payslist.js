const endpoint = 'https://restcountries.eu/rest/v2/all';
      const cities = [];
      
      fetch(endpoint)
        .then(blob => blob.json())
        .then(data => cities.push(...data))
      
      function findMatches(wordToMatch, cities){
          return cities.filter(place => {
              
              const regex = new RegExp(wordToMatch, 'gi');
              return place.name.match(regex);
          });
      }
      
      
      function displayMatches(){
          
          const matchArray = findMatches(this.value, cities);
          console.log(matchArray);
          const html = matchArray.map(place => {
              return `
        <li>
<span>${place.name}</span>
<span>${place.capital}</span>
<span class="population">${place.population}</span>
</li>
`;
              
          }).join('');
          suggestions.innerHTML = html;
      }
      
      
      
      const searchInput = document.querySelector('.search');
      const suggestions = document.querySelector('.suggestions');
      
      searchInput.addEventListener('keyup', displayMatches);
      
      
      