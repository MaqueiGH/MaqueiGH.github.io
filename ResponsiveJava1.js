let btn = document.querySelector("#btn");
let whiteText = document.querySelector(".white-text");
let h2ColorTeam = document.querySelector(".h2-color-team");
let h2ColorLocations = document.querySelector(".h2-color-locations");
let maps = document.getElementsByClassName("maps");
btn.addEventListener("click", function() {
        if (btn.textContent === "Dark mode") {
    document.body.style.backgroundColor = "#5b5e5a";
    document.body.style.color = "#ffffff";
    btn.textContent = "Light mode";
    btn.style.backgroundColor = "#3b3b3b";
    btn.style.color = "white";
    h2ColorTeam.style.color = "white";
    h2ColorLocations.style.color = "white";

} else if (btn.textContent === "Light mode") {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#000000";
    btn.textContent = "Dark mode";
    btn.style.backgroundColor = "#3b3b3b";
    btn.style.color = "white";
    h2ColorTeam.style.color = "black";
    h2ColorLocations.style.color = "black";
}
})