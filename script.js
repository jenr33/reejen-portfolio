document.addEventListener("DOMContentLoaded", function () {

  var heroPieces = [
    document.querySelector(".greeting"),
    document.querySelector(".accent-line"),
    document.querySelector(".main-name"),
    document.querySelector(".subtitle")
  ];

  function playHeroPop() {
    for (var i = 0; i < heroPieces.length; i++) {
      var piece = heroPieces[i];
      piece.classList.remove("pop-in");
      void piece.offsetWidth;
      piece.classList.add("pop-in");
    }
  }

  playHeroPop();

  var skills = [
    { name: "HTML", icon: "devicon-html5-plain colored" },
    { name: "CSS", icon: "devicon-css3-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "Java", icon: "devicon-java-plain colored" },
    { name: "Figma", icon: "devicon-figma-plain colored" },
    { name: "Django", icon: "devicon-django-plain colored" },
    { name: "Python", icon: "devicon-python-plain colored" },
    { name: "C++", icon: "devicon-cplusplus-plain colored" },
    { name: "GitHub", icon: "devicon-github-original colored" },
    { name: "VS Code", icon: "devicon-vscode-plain colored" },
    { name: "Godot", icon: "devicon-godot-plain colored" },
    { name: "GDScript", icon: "fa-solid fa-code" }
  ];

  var skillsGrid = document.getElementById("skillsGrid");

  for (var i = 0; i < skills.length; i++) {
    var skill = skills[i];

    var card = document.createElement("div");
    card.className = "skill-card";
    card.style.setProperty("--pop-delay", (i * 0.06) + "s");

    var icon = document.createElement("i");
    icon.className = skill.icon;

    var label = document.createElement("span");
    label.textContent = skill.name;

    card.appendChild(icon);
    card.appendChild(label);

    skillsGrid.appendChild(card);
  }

  function playSkillsPop() {
    var cards = skillsGrid.querySelectorAll(".skill-card");
    for (var c = 0; c < cards.length; c++) {
      cards[c].classList.remove("pop-in");
      void cards[c].offsetWidth;
      cards[c].classList.add("pop-in");
    }
  }

  var projects = [
    {
      title: "Triple T",
      image: "images/triplet.png",
      summary: "A 2D maze game where Sahur jumps across platforms, collects coins, and dodges enemies.",
      description: "Triple T is a 2D maze game where Sahur (the game character) has to jump across platforms, collect coins, avoid enemies, and make his way through different levels.",
      tools: ["Godot", "GDScript"]
    },
    {
      title: "Airplane Management System",
      image: "images/airplane.png",
      summary: "A console-based airplane ticket booking system built for my Object-Oriented Programming class.",
      description: "This project was developed for my Object-Oriented Programming course. It is a console-based airplane ticket booking system where users can reserve seats, view seat availability, and cancel reservations. The project helped me strengthen my understanding of object-oriented programming concepts and Java development.",
      tools: ["Java", "OOP"]
    }
  ];

  var projectsGrid = document.getElementById("projectsGrid");

  var projectModal = document.getElementById("projectModal");
  var projectModalTitle = document.getElementById("projectModalTitle");
  var projectModalImage = document.getElementById("projectModalImage");
  var projectModalDesc = document.getElementById("projectModalDesc");
  var projectModalToolsList = document.getElementById("projectModalToolsList");
  var closeProjectModalBtn = document.getElementById("closeProjectModalBtn");

  function openProjectModal(project) {
    projectModalTitle.textContent = project.title;
    projectModalImage.src = project.image;
    projectModalImage.alt = project.title;
    projectModalDesc.textContent = project.description;

    projectModalToolsList.innerHTML = "";
    for (var t = 0; t < project.tools.length; t++) {
      var toolTag = document.createElement("span");
      toolTag.textContent = project.tools[t];
      toolTag.classList.add("pop-in");
      projectModalToolsList.appendChild(toolTag);
    }

    projectModal.classList.add("open");
  }

  for (let p = 0; p < projects.length; p++) {
    let project = projects[p];

    let projectCard = document.createElement("div");
    projectCard.className = "section-card primary-card project-card";

    projectCard.innerHTML =
      '<div class="project-card-image-wrap">' +
        '<img class="project-card-image" src="' + project.image + '" alt="' + project.title + '">' +
      '</div>' +
      '<div class="project-card-body">' +
        '<h3>' + project.title + '</h3>' +
        '<p>' + project.summary + '</p>' +
        '<span class="project-card-hint"><i class="fa-solid fa-arrow-up-right-from-square"></i> View details</span>' +
      '</div>';

    projectCard.addEventListener("click", function () {
      openProjectModal(project);
    });

    projectsGrid.appendChild(projectCard);
  }

  closeProjectModalBtn.addEventListener("click", function () {
    projectModal.classList.remove("open");
  });

  projectModal.addEventListener("click", function (event) {
    if (event.target === projectModal) {
      projectModal.classList.remove("open");
    }
  });

  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");

  navToggle.addEventListener("click", function () {
    navLinks.classList.toggle("mobile-open");
  });

  var allNavLinks = navLinks.querySelectorAll("a");
  for (var n = 0; n < allNavLinks.length; n++) {
    allNavLinks[n].addEventListener("click", function () {
      navLinks.classList.remove("mobile-open");
    });
  }

  var contactModal = document.getElementById("contactModal");
  var openModalBtn = document.getElementById("openModalBtn");
  var closeModalBtn = document.getElementById("closeModalBtn");

  openModalBtn.addEventListener("click", function () {
    contactModal.classList.add("open");
  });

  closeModalBtn.addEventListener("click", function () {
    contactModal.classList.remove("open");
  });

  contactModal.addEventListener("click", function (event) {
    if (event.target === contactModal) {
      contactModal.classList.remove("open");
    }
  });

  var themeToggle = document.getElementById("themeToggle");
  var themeIcon = themeToggle.querySelector("i");

  var savedTheme = localStorage.getItem("theme");

  function turnOnDarkMode() {
    document.documentElement.setAttribute("data-theme", "dark");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  }

  function turnOnLightMode() {
    document.documentElement.removeAttribute("data-theme");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }

  if (savedTheme === "light") {
    turnOnLightMode();
  } else {
    turnOnDarkMode();
  }

  themeToggle.addEventListener("click", function () {
    var isDark = document.documentElement.getAttribute("data-theme") === "dark";
    if (isDark) {
      turnOnLightMode();
      localStorage.setItem("theme", "light");
    } else {
      turnOnDarkMode();
      localStorage.setItem("theme", "dark");
    }
  });

  var infoHeaders = document.querySelectorAll(".info-block-header");
  for (var h = 0; h < infoHeaders.length; h++) {
    infoHeaders[h].addEventListener("click", function () {
      var block = this.closest(".info-block");
      block.classList.toggle("open");
    });
  }

  var backToTop = document.getElementById("backToTop");
  var cornerLogo = document.getElementById("cornerLogo");

  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  var homeSection = document.getElementById("home");
  var skillsSection = document.getElementById("skills");
  var navbarWrapper = document.getElementById("navbarWrapper");
  var sidebarSocials = document.getElementById("sidebarSocials");

  var heroWasVisible = false;
  var skillsWasVisible = false;

  var lastScrollY = window.scrollY;

  function isInView(el) {
    var rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight * 0.6 && rect.bottom > 0;
  }

  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    var pageHeight = document.documentElement.scrollHeight;
    var windowHeight = window.innerHeight;

    var heroNowVisible = isInView(homeSection);
    if (heroNowVisible && !heroWasVisible) {
      playHeroPop();
    }
    heroWasVisible = heroNowVisible;

    var skillsNowVisible = isInView(skillsSection);
    if (skillsNowVisible && !skillsWasVisible) {
      playSkillsPop();
    }
    skillsWasVisible = skillsNowVisible;

    var scrollHint = document.querySelector(".sidebar-scroll");
    if (scrollPosition > 50) {
      scrollHint.classList.add("hidden");
    } else {
      scrollHint.classList.remove("hidden");
    }

    var nearBottom = scrollPosition + windowHeight >= pageHeight - 60;
    if (nearBottom) {
      cornerLogo.classList.add("visible");
    } else {
      cornerLogo.classList.remove("visible");
    }

    var homeBottom = homeSection.offsetTop + homeSection.offsetHeight;

    if (scrollPosition < homeBottom - 150) {
      sidebarSocials.classList.remove("hidden");
    } else {
      sidebarSocials.classList.add("hidden");
    }

    var scrollingDown = scrollPosition > lastScrollY;

    if (scrollPosition <= homeBottom) {
      navbarWrapper.classList.remove("nav-hidden");
    } else if (scrollingDown) {
      navbarWrapper.classList.add("nav-hidden");
    } else {
      navbarWrapper.classList.remove("nav-hidden");
    }

    lastScrollY = scrollPosition;
  });

});