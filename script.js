document.getElementById("getJokeBtn").addEventListener("click", function () {
  const jokeType = document.getElementById("jokeType").value;
  console.log(jokeType);

  fetch(`http://localhost:3000/joke/${jokeType}`) // Utiliser le type de blague dans l'URL
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération de la blague");
      }
      return response.json();
    })
    .then((data) => {
      // Affichage de la blague dans le div
      jokeOutput.textContent = data.joke + " - " + data.answer;
    })
    .catch((error) => {
      jokeOutput.textContent = error.message;
    });
});

// document.getElementById("getJokeBtn").addEventListener("click", function () {
//   // Récupérer la catégorie sélectionnée par l'utilisateur
//   const category = document.getElementById("category").value;

//   // API JokeAPI avec la catégorie sélectionnée
//   fetch(`https://v2.jokeapi.dev/joke/${category}`)
//     .then((response) => response.json())
//     .then((data) => {
//       const jokeOutput = document.getElementById("jokeOutput");
//       // Si la blague est simple
//       if (data.type === "single") {
//         jokeOutput.textContent = data.joke;
//       }
//       // Si la blague a un setup et un punchline
//       else {
//         jokeOutput.textContent = `${data.setup} - ${data.delivery}`;
//       }
//     })
//     .catch((error) => {
//       console.error("Erreur lors de la récupération de la blague :", error);
//     });
// });
