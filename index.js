document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("nameInput");
  const button = document.getElementById("Submit");
  const output = document.getElementById("greeting");

  button.addEventListener("click", function () {
    const name = input.value.trim();

    if (name) {
      // Skapa ljud
      const audio = new Audio("horror-jump-scare-effect-4-250456.mp3");

      // Skapa overlay för jumpscare
      const scareDiv = document.createElement("div");
      scareDiv.style.position = "fixed";
      scareDiv.style.top = "0";
      scareDiv.style.left = "0";
      scareDiv.style.width = "100%";
      scareDiv.style.height = "100%";
      scareDiv.style.background = `url('scary.jpg') center/cover no-repeat`;
      scareDiv.style.display = "flex";
      scareDiv.style.alignItems = "center";
      scareDiv.style.justifyContent = "center";
      scareDiv.style.zIndex = "9999";
      scareDiv.innerHTML = `<h1 style="color:black; font-size:4rem; text-shadow:2px 2px black;">Välkommen hit ${name} &#128520;</h1>`;
      document.body.appendChild(scareDiv);

      // Spela ljud
      audio.play();

      // Ta bort jumpscare efter 2 sek
      setTimeout(() => {
        scareDiv.remove();
        output.textContent = `Oj! ${name}, välkommen tillbaka!`;
      }, 2000);
    } else {
      output.textContent = "Skriv in ditt namn först";
    }
  });
});
