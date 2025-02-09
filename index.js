function runaway(id) {
    id.style.top = Math.round(Math.random() * 250) - 100 + 'px';
    id.style.left = Math.round(Math.random() * 250) - 200 + 'px';
}

document.querySelectorAll(".yes").forEach(element => {
    element.addEventListener("click", function () {
        alert("You Made The Right Choice Afterall!!!");
    });
});



