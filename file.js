// My Way

const activeemoji = document.querySelector(".active");
const openemoji = document.querySelector(".open");
// console.log(activeemoji.textContent);
// console.log(openemoji.textContent);

activeemoji.addEventListener("click", (event) => {
  // event.preventDefault();
  activeemoji.style.display = "none";
  openemoji.style.display = "flex";
});

openemoji.addEventListener("click", (event) => {
  // event.preventDefault();
  openemoji.style.display = "none";
  activeemoji.style.display = "flex";
});

// From Video
// const closedemoji = document.querySelector(".closed");
// const openemoji = document.querySelector(".open");

// // Add event Listener
// closedemoji.addEventListener("click",() =>{
//   if (openemoji.classList.contains('open')) {
//     openemoji.classList.add('active');
//     closedemoji.classList.remove('active');
//   }

// })

// openemoji.addEventListener('click',()=>{
//     if (closedemoji.classList.contains('closed')) {
//         closedemoji.classList.add('active');
//         openemoji.classList.remove('active');
//     }
// })
