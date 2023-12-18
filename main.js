const toggleSwitch = document.getElementById('checkbox');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);


function Pages(btn) {
    var about = document.getElementById("about");
    let home = document.getElementById("home");
    let projects = document.getElementById('projects');
    let contact = document.getElementById('contact');

    document.getElementById('burrger_btn').click()
    
    if(btn=='About'){
        if (window.getComputedStyle(about).display === "none") {
            home.style.display = "none";
            contact.style.display = "none";
            about.style.transition = "visibility 2s";
            about.style.display = "flex";
        } else {
            about.style.display = "none";
            projects.style.display = "none";
            home.style.display = "flex";
        }
    }
    else if(btn =='projects'){
        if (window.getComputedStyle(projects).display === "none") {
            home.style.display = "none";
            contact.style.display = "none";
            about.style.display = "none";
            projects.style.transition = "visibility 2s";
            projects.style.display = "flex";
        } else {
            projects.style.display = "none";
            about.style.display = "none";
            contact.style.display = "none";

            home.style.display = "flex";
        }
        
    }else{
        if (window.getComputedStyle(contact).display === "none") {
            home.style.display = "flex";
            contact.style.display = "flex";
            about.style.display = "none";
            projects.style.display = "none";
        } else {
            about.style.display = "none";
            contact.style.display = "none";
            projects.style.display = "none";
            home.style.display = "flex";
        }
    }
}