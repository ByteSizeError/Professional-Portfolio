let projectsEl = document.querySelector("#projects");

const projects = [
    {
        name: "Personal Portfolio",
        url: "https://bytesizeerror.github.io/",
        bg: 'url("assets/images/sitelogo.png")',
    },
    {
        name: "Microsoft's DCCD Charitable Givings App",
        url: "https://github.com/p10dibb/TeamMicrosoft423",
        bg: 'url("http://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4OAgf?ver=6a31")',
    },
    {
        name: "Music Trivia",
        url: "https://github.com/ByteSizeError/Tech-Blog",
        bg: 'url("https://image.freepik.com/free-vector/colorful-sound-wave-equalizer_53876-63961.jpg")',
    },
    {
        name: "The Tech Blog",
        url: "https://bcole37.github.io/Project-1-Music-Trivia/",
        bg: 'url("https://image.freepik.com/free-vector/organic-flat-blog-post-illustration-with-people_23-2148955260.jpg")',
    },
    {
        name: "Weather Dashboard",
        url: "https://bytesizeerror.github.io/Weather-Dashboard/",
        bg: 'url("https://image.freepik.com/free-vector/meteorology-abstract-concept-vector-illustration-met-station-meteorology-program-university-degree-weather-prediction-method-measuring-instruments-atmosphere-study-abstract-metaphor_335657-1980.jpg")',
    },
    {
        name: "Code Quiz",
        url: "https://bytesizeerror.github.io/Code-Quiz/",
        bg: 'url("https://image.freepik.com/free-vector/quiz-neon-sign_1262-19629.jpg")',
    },
    {
        name: "Note Taker",
        url: "https://github.com/ByteSizeError/Note-Taker",
        bg: 'url("https://image.freepik.com/free-vector/office-school-stationery-background_1284-58335.jpg")',
    },
    {
        name: "Team Profile Generator",
        url: "https://github.com/ByteSizeError/Team-Profile-Generator",
        bg: 'url("https://image.freepik.com/free-vector/recruiting-professionals-studying-candidate-profiles_1262-21404.jpg")',
    },
    {
        name: "Password Generator",
        url: "https://github.com/ByteSizeError/Password-Generator",
        bg: 'url("https://image.freepik.com/free-vector/biometric-security-concept_53876-90466.jpg")',
    },
];

const loadProjects = () => {
    for (let i = 0; i < projects.length; i++) {
        let projectEl = document.createElement("a");
        projectEl.classList.add("project");
        projectEl.href = projects[i].url;
        projectEl.target = "_blank";
        projectEl.style.backgroundImage = projects[i].bg;

        if (i === 0) {
            projectEl.style.backgroundColor = "#D7DEDC";
            projectEl.style.width = "100%";
            projectEl.style.height = "50vh";
            projectEl.style.backgroundSize = "contain";
        }

        let headerEl = document.createElement("header");
        headerEl.textContent = projects[i].name;
        headerEl.classList.add("project-name");

        projectEl.append(headerEl);
        projectsEl.append(projectEl);
    }
};
