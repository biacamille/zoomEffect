const container = document.getElementById("container");
const img = document.querySelector("img");

container.addEventListener("mousemove", (e) => {
const x = e.clientx - e.target.offsetLeft;
const y = e.clienty - e.target.offsetTop;

console.log(x, y);

img.style.transformOrigin = `${x}px ${y}px`;
img.style.transform = "scale(2)";


});

container.addEventListener("mouseleave", () => {
    img.style.transformOrigin = "center center";
    img.style.transform = "scale(1)";
});