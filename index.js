const goals = document.querySelector(".goals");

goals.addEventListener("wheel", (event) => {
    event.preventDefault();
    goals.scrollLeft += event.deltaY;
});

document.addEventListener("DOMContentLoaded", () => {
    let popup = document.querySelector(".popup");
    const btn1 = document.querySelector("#btn1");
    const close = document.querySelector(".close");

    popup.style.display = "none";


    btn1.addEventListener('click', () => {
        console.log('Button Clicked')
        popup.style.display = "flex";
    })

    close.addEventListener("click", () => {
        popup.style.display = "none"
    })
    window.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.style.display = "none";
        }

    })
})


document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu");
    const close_bar1 = document.querySelector(".close-bar1");
    const veiw_btn = document.querySelector(".veiw-btn");

    menu.style.display = "none";

    veiw_btn.addEventListener("click", () => {
        console.log("burger Hit")
        menu.style.display = "flex";
    })

    close_bar1.addEventListener("click", () => {
        menu.style.display = "none"
    })
})