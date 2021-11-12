let projectsEl = document.querySelector("#projects");

const projects = [
    {
        name: "Command Line Interface Themed Portfolio",
        repoUrl: "",
        deployUrl: "https://bytesizeerror.github.io/",
        img: "https://image.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg",
    },
    {
        name: "Microsoft's DCCD Charitable Givings App Prototype",
        repoUrl: "https://github.com/p10dibb/TeamMicrosoft423",
        deployUrl: "",
        img: "http://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4OAgf?ver=6a31",
    },
    {
        name: "Music Trivia",
        repoUrl: "https://github.com/BCole37/Project-1-Music-Trivia",
        deployUrl: "https://bcole37.github.io/Project-1-Music-Trivia/",
        img: "https://image.freepik.com/free-vector/colorful-sound-wave-equalizer_53876-63961.jpg",
    },
    {
        name: "The Tech Blog",
        repoUrl: "https://github.com/ByteSizeError/Tech-Blog",
        deployUrl: "https://glacial-ridge-40516.herokuapp.com/",
        img: "https://image.freepik.com/free-vector/organic-flat-blog-post-illustration-with-people_23-2148955260.jpg",
    },
    {
        name: "Weather Dashboard",
        repoUrl: "https://github.com/ByteSizeError/Weather-Dashboard",
        deployUrl: "https://bytesizeerror.github.io/Weather-Dashboard/",
        img: "https://image.freepik.com/free-vector/meteorology-abstract-concept-vector-illustration-met-station-meteorology-program-university-degree-weather-prediction-method-measuring-instruments-atmosphere-study-abstract-metaphor_335657-1980.jpg",
    },
    {
        name: "Code Quiz",
        repoUrl: "https://github.com/ByteSizeError/Code-Quiz",
        deployUrl: "https://bytesizeerror.github.io/Code-Quiz/",
        img: "https://image.freepik.com/free-vector/quiz-neon-sign_1262-19629.jpg",
    },
    {
        name: "Note Taker",
        repoUrl: "https://github.com/ByteSizeError/Note-Taker",
        deployUrl: "https://whispering-taiga-97956.herokuapp.com/",
        img: "https://image.freepik.com/free-vector/office-school-stationery-background_1284-58335.jpg",
    },
    {
        name: "E-Commerce Back End",
        repoUrl: "https://github.com/ByteSizeError/E-Commerce-Back-End",
        deployUrl: "",
        img: "https://image.freepik.com/free-vector/isometric-laptop-with-shopping-cart-keypad_1262-16544.jpg",
    },
    {
        name: "Employee Management System",
        repoUrl: "https://github.com/ByteSizeError/Employee-Management-System",
        deployUrl: "",
        img: "https://image.freepik.com/free-vector/choosing-best-candidate-concept_52683-43377.jpg",
    },
    {
        name: "Team Profile Generator",
        repoUrl: "https://github.com/ByteSizeError/Team-Profile-Generator",
        deployUrl: "",
        img: "https://image.freepik.com/free-vector/recruiting-professionals-studying-candidate-profiles_1262-21404.jpg",
    },
    {
        name: "Password Generator",
        repoUrl: "https://github.com/ByteSizeError/Password-Generator",
        deployUrl: "https://bytesizeerror.github.io/Password-Generator/",
        img: "https://image.freepik.com/free-vector/biometric-security-concept_53876-90466.jpg",
    },
];

const loadProjects = () => {
    for (let i = 0; i < projects.length; i++) {
        let colEl = document.createElement("div");
        colEl.classList.add("col");

        let cardEl = document.createElement("div");
        cardEl.classList.add("card");

        let imgEl = document.createElement("img");
        imgEl.src = projects[i].img;
        imgEl.classList.add("card-img-top");

        let cardBodyEl = document.createElement("div");
        cardBodyEl.classList.add("card-body");

        let titleEl = document.createElement("h5");
        titleEl.classList.add("card-title");
        titleEl.innerHTML = projects[i].name;

        let cardFooterEl = document.createElement("div");
        cardFooterEl.classList.add("card-footer");
        cardFooterEl.classList.add("bg-white");

        let btnGroupEl = document.createElement("div");
        btnGroupEl.classList.add("d-flex");
        btnGroupEl.classList.add("justify-content-evenly");

        if (projects[i].repoUrl != "") {
            let repoBtnEl = document.createElement("a");
            let cls = ["btn", "btn-outline-primary"];
            repoBtnEl.classList.add(...cls);
            repoBtnEl.href = projects[i].repoUrl;
            repoBtnEl.target = "_blank";
            repoBtnEl.innerHTML = '<i class="fab fa-github"></i> Repository';
            btnGroupEl.append(repoBtnEl);
        }

        if (projects[i].deployUrl != "") {
            let deployBtnEl = document.createElement("a");
            let cls = ["btn", "btn-outline-primary"];
            deployBtnEl.classList.add(...cls);
            deployBtnEl.href = projects[i].deployUrl;
            deployBtnEl.target = "_blank";
            deployBtnEl.innerHTML =
                '<i class="fas fa-globe"></i> Deployed Link ';
            btnGroupEl.append(deployBtnEl);
        }
        cardFooterEl.append(btnGroupEl);
        cardBodyEl.append(titleEl);
        cardEl.append(imgEl, cardBodyEl, cardFooterEl);
        colEl.append(cardEl);
        projectsEl.append(colEl);
    }
};
