const gamesarray = [
  {
    title: "Fill Color",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToIif9cbCQXZv6QMfC3TJFx-K0lgwyrDLkJdo37FtODKL-wRWp1X2SlUVjCMWscwjiGvI&usqp=CAU",
    description: "Enjoy a coloring game where you get to fill in black-and-white drawings with various colors. It is a fun and creative way to spend your time.",
  },
  {
    title: "Connect the Dots",
    img: "https://tcf.admeen.org/game/4500/4419/400x246/connect-the-dots.jpg",
    description: "Try a Dot-to-dot game where you connect numbered dots in the right order to reveal a picture or shape. It's a simple yet satisfying puzzle challenge.",
  },
  {
    title: "Mazes",
    img: "https://www.shutterstock.com/image-illustration/maze-game-logo-labyrinth-entry-260nw-406331857.jpg",
    description: "Mazes can intrigue you. You will love navigating through a series of paths to reach the goal, trying to avoid dead ends and obstacles along the way.",
  },
  {
    title: "Word Search",
    img:"https://www.wordsearch365.com/static/Assets/Game_Images/Icon/WordSearch_Android_App_Icon.png",
    description: "Word search games can be very relaxing for you. You will like searching for hidden words within a grid of letters.",
  }
];


const leftarrow = document.getElementById("left");
const rightarrow = document.getElementById("right");
const exit = document.querySelector(".exit")
const modal = document.getElementById("modal");
const games =document.getElementById("games")
const video =document.getElementById("video")
const books =document.getElementById("books")
const music =document.getElementById("music")

let translateYValue = 0;

games.addEventListener("click", () => {

  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.body.appendChild(overlay)

  const pagesbody = document.createElement('div');
  pagesbody.classList.add('pages');
  modal.insertBefore(pagesbody, right);

  modal.classList.add("modalexit");
  document.body.appendChild(overlay);
  setTimeout(()=>{
  const numberOfDivs = 4;
    for (let i = 0; i < numberOfDivs; i++) {
        const div = document.createElement("div");
        div.classList.add("page");
        div.innerHTML = `<h1>Game ${i+1}<\h1>
        <img src="${gamesarray[i].img}" alt="" class="gamesimg">
        <h1 class="gametitle">${gamesarray[i].title}</h1>
<p class="gamedesc">${gamesarray[i].description}</p>
<button id="${gamesarray[i].title} " class="playit">Play the game</button>`;
        pagesbody.appendChild(div);
    }
  },1000)
  

});

leftarrow.addEventListener("click", () => {
  const pages = document.querySelectorAll(".page");
  
  if (translateYValue < 0) {
    translateYValue += 100;
    pages.forEach((p, i) => {
      p.style.transform = `translateY(${translateYValue}%)`;
    });
  }
});

rightarrow.addEventListener("click", () => {
  const pages = document.querySelectorAll(".page");

  if (translateYValue > -300) {
    translateYValue -= 100;
    pages.forEach((p, i) => {
      p.style.transform = `translateY(${translateYValue}%)`;
    });
  }
});
exit.addEventListener("click", () => {
  modal.classList.remove("modalexit");
  const overlayElement = document.body.querySelector(".overlay");

  if (overlayElement) {
    overlayElement.remove();
  }
  setTimeout(()=>{
    const elementsToRemove = Array.from(modal.children).filter(
      (child) => (child!==exit)&&(child!==rightarrow)&&(child!==leftarrow)
    );
    elementsToRemove.forEach((element) => modal.removeChild(element));
  },1000)
});

