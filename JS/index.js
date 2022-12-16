const url="https://api.npoint.io/ba70976d5586ac1943d8/films/"
const cartoon = document.getElementById('minions')
function fetchFilms() {
    fetch(`${url}`)
      .then((res) => res.json())
      .then((data) => renderFilms(data));
  }
  function renderFilms(data) {
    const div = document.getElementById('card');
    const ul = document.getElementById('films');
    
    data.forEach(movie => {
      const li = document.createElement('li');
      li.classList.add('pointer', 'bold-italic-text');
      li.innerHTML = movie.title;
      
      const filmCard = document.createElement("div");
      filmCard.classList.add('film-card');
      filmCard.innerHTML = `
        <img src="${movie.poster}" height=500px width=300px/>
        <h2 class="bold-text">${movie.title}</h2>
        <p class="bold-text">${movie.description}</p>
        <p><span class="highlight bold-text">Runtime: ${movie.runtime}</span></p>
        <p><span class="highlight bold-text">Showtime: ${movie.showtime}</span></p>
      `;
      document.getElementById('minions').style.display= "none"
      // initate p tag element to show number of tickets
      const tickets = document.createElement("p");
      tickets.classList.add("bold-italic-text")
      tickets.innerHTML = `Available tickets: ${(movie.capacity) - (movie.tickets_sold)}`;
      // append the p tag 
      filmCard.appendChild(tickets);
   
      const btn = document.createElement("button");
      btn.textContent = "Get ticket";
      // event listener to decrement ticket on dom
      btn.addEventListener('click', () => {
        //check if tickets are sold out then print alert
        if (parseInt(tickets.innerText.split(': ')[1]) === 0) {
          alert("sorry ticket diplited");
        } else {
          //reduce number of tickets 
          tickets.innerText = `Available tickets: ${parseInt(tickets.innerText.split(': ')[1]) - 1}`;
        }
      });
      filmCard.appendChild(btn);

      li.addEventListener('click', () => {
        div.innerText=""
        div.appendChild(filmCard);
         if (!filmCard.classList.contains('active')) {
          filmCard.classList.add('active');  
          div.appendChild(filmCard);

        }
        
      });
      ul.appendChild(li);
    });
  }
  fetchFilms();