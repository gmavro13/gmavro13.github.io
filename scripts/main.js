const myImage = document.querySelector("#dog");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/xrusa-scarlet.png") {
    myImage.setAttribute("src", "images/scarlet-heart.jpg");
  } else {
    myImage.setAttribute("src", "images/xrusa-scarlet.png");
  }
}