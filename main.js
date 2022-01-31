let racer = {
    fetchRace: function (season, round) {
      fetch(
        `https://ergast.com/api/f1/${season}/${round}/driverStandings.json`
      )
        .then((response) => {
          if (!response.ok) {
            alert("No race found");
            throw new Error("No race found");
          }
          return response.json();
        })
        .then((data) => this.displayRacer(data));
    },
    displayRacer: function (data) {
        const { wins, position } = data.driverStandings[0];
        const { givenName, familyName, dateOfBirth, nationality } = data.driverStandings[1];
        document.querySelector(".first-name").innerHTML = givenName
        document.querySelector(".last-name").innerText = familyName
        document.querySelector(".dob").innerText = dateOfBirth;
        document.querySelector(".wins").innerText = wins
        document.querySelector(".position").innerText = position
        document.querySelector(".nationality").innerText = nationality     
      },
      search: function () {
        this.fetchRace(document.querySelector(".form-control").value);
      },
    };
    
    document.querySelector(".search button").addEventListener("click", function () {
      racer.search();
    });
    
    document
      .querySelector(".search-bar")
      .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
          racer.search();
        }
      });
      
    
    racer.fetchRace();