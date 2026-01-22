const nextButton = document.querySelector(".next-btn");
const video = document.querySelector(".hero-video");
const heroSection = document.querySelector(".hero-section");

const movieList = [
  "Videos/hero-1.mp4",
  "Videos/hero-2.mp4",
  "Videos/hero-3.mp4",
  "Videos/hero-4.mp4",
];

let index = 0;

nextButton.addEventListener("click", function () {
  index += 1;
  video.src = movieList[index];

  if (index === 3) {
    index = -1;
  }
});

heroSection.addEventListener("mousemove", function(dets) {
//   console.log(dets)

gsap.to(".next-btn",{
    left: dets.clientX + "px",
    top: dets.clientY + "px",
    ease: Power3
})

//   gsap.set('.next-btn',{
//     x: dets.offsetX ,
//     y: dets.offsetY ,
//     // duration: 0.3,
//     // ease: "power2.out"
//   })

});
