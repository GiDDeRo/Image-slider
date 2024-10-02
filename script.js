const btnx = document.querySelectorAll(".btn");
const gallery = document.getElementById("container");


btnx[0].addEventListener("click", e=> {
    gallery.style.scrollBehavior = "smooth";
    gallery.scrollLeft -= 900;
})

btnx[1].addEventListener("click", e=> {
    gallery.style.scrollBehavior = "smooth";
    gallery.scrollLeft += 900;
})
