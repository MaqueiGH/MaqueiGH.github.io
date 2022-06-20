

let ideasArticle = document.querySelector(".ideas-article")
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
    ideasArticle.style.backgroundColor = "#3b3b3b"
    info.style.color = "white"

} else if (btn.textContent === "Light mode") {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#000000";
    btn.textContent = "Dark mode";
    btn.style.backgroundColor = "#3b3b3b";
    btn.style.color = "white";
    h2ColorTeam.style.color = "black";
    h2ColorLocations.style.color = "black";
    ideasArticle.style.backgroundColor = "#e0ebd7"
    info.style.color = "rgba(3, 3, 3, 0.801)"
}
})


let projects = [
    {
        id: 1,
        img: "https://previews.123rf.com/images/pkazmierczak/pkazmierczak1801/pkazmierczak180102665/92875082-wooden-mountain-house-built-from-wood-logs-on-sunny-day-pieniny-mountains-poland.jpg",
        title: "Wooden house",
        locationz: "the mountains",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo velit eius at commodi nesciunt veniam adipisci voluptas sed omnis? Quod pariatur exercitationem officiis id laborum rem quibusdam illo eum quo?"
    },
    {
        id: 2,
        img: "https://cdn.onekindesign.com/wp-content/uploads/2020/02/Modern-Rustic-Home-Design-Axial-Art-Architecture-01-1-Kindesign.jpg",
        title: "Modern rustic house",
        locationz: "the hills",
        info: "Odio morbi quis commodo odio aenean sed adipiscing diam. Arcu dictum varius duis at. Sed id semper risus in hendrerit. Turpis tincidunt id aliquet risus. Sapien et ligula ullamcorper malesuada proin libero."
    },
    {
        id: 3,
        img: "https://2.bp.blogspot.com/-2I5aNXzw4zg/VS20uV0g_uI/AAAAAAAAlEM/suJG7kGJ6iA/s1600/GLASS%2BAND%2BWOOD%2BATRIUM%2BHOME%2BDESIGN%2BSURROUNDED%2BBY%2BYOUNG%2BPINES%2BOF%2BFOREST%2B(1).jpg",
        title: "Modern house",
        locationz: "city street",
        info: "Tincidunt ornare massa eget egestas. Neque convallis a cras semper auctor. Eu turpis egestas pretium aenean pharetra magna ac. In ante metus dictum at tempor commodo ullamcorper a lacus. Libero justo laoreet sit amet."
    }
];

let img = document.querySelector(".ideas-img");
let title = document.querySelector(".ideas-name");
let locationz = document.querySelector(".ideas-location");
let info = document.querySelector(".ideas-info");

let prevBtn = document.querySelector(".prev-btn")
let nextBtn = document.querySelector(".next-btn")

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem)
})

function showPerson(person){
    const item = projects[person];
    img.src = item.img;
    title.textContent = item.title;
    locationz.textContent = item.locationz;
    info.textContent = item.info;
}

nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > projects.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
})

prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = projects.length - 1;
    }
    showPerson(currentItem);
  });