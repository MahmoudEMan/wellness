//header
const logo = document.querySelector(".logo");
const headerArrow = document.querySelector(".header-arrow-animation");
//section1
const section1 = document.querySelector("#section-1");


//section 2
const section2 = document.querySelector("#section-2");


window.addEventListener("scroll" , () =>{
  changeLogoColor()
})

headerArrow.addEventListener("click",()=>{
  section2.scrollIntoView();
})

function changeLogoColor(){
  if (window.scrollY >= section1.offsetHeight ) {
    logo.style.color = '#236053'
  }else
  {
    logo.style.color = '#f8eadc';
  }
}
//section 5
const blogsContainer = document.querySelector("#blogs-container");
const photoSwingContainer = document.querySelector(".photo-swing-container");
const photoSwing = document.querySelector(".photo-swing");

blogsContainer.addEventListener("mousemove" , e => {
  const x = e.clientX + 'px';
  const y = e.layerY + 'px';

  photoSwingContainer.style.left = x;
  photoSwingContainer.style.top = y;

  // const children = [...e.currentTarget.children];
  // children.forEach((child,i) => {
  //   child.addEventListener("mouseenter" , (e) => {
  //     console.log(i);
  //   })
  // })
  // console.log(e,x,y);

})
const blogSector = document.querySelectorAll(".blog-sector");


blogSector.forEach((child,i) => {
  child.addEventListener("mouseenter" , (e) => {
    photoSwing.setAttribute("src" , `images/blog-img${i+1}.jpg`)
  })
})

console.log(blogSector);
console.log( blogsContainer.children);
//section 6 video player

const videoPlayButton = document.querySelector(".video-play-button");
const videoPlayerScreen = document.querySelector(".video-player-screen");
const video = videoPlayerScreen.querySelector("video");

videoPlayButton.addEventListener("click" , ()=>{
  videoPlayerScreen.classList.add("active-video-player")
})

videoPlayerScreen.addEventListener("click" , ()=>{
  videoPlayerScreen.classList.remove("active-video-player");
  video.pause();
})



















//
