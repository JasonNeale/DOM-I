const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// ###################################################################
// Start my code...

// Constant variables
const headerNavA = document.querySelectorAll("nav a");
const headerNavAArray = Array.from(headerNavA);
const ctaImg = document.getElementById("cta-img");
const ctaH1 = document.querySelector(".cta-text h1");
const ctaButton = document.querySelector(".cta-text button");
const middleImg = document.getElementById("middle-img");
const topContent = document.querySelectorAll(".top-content .text-content");
const topContentArray = Array.from(topContent);
const bottomContent = document.querySelectorAll(".bottom-content .text-content");
const bottomContentArray = Array.from(bottomContent);
const contact = document.querySelectorAll(".contact");
const contactArray = Array.from(contact);


// Navigation
headerNavAArray[0].innerHTML = "Services";
headerNavAArray[1].innerHTML = "Product";
headerNavAArray[2].innerHTML = "Vision";
headerNavAArray[3].innerHTML = "Features";
headerNavAArray[4].innerHTML = "About";
headerNavAArray[5].innerHTML = "Contact";


// Header
ctaImg.src = 'img/header-img.png';
ctaH1.innerHTML = "DOM<br>is<br>awesome"
ctaButton.innerHTML = "Get Started!"


// Main content top
topContentArray[0].children[0].innerHTML = "features";
topContentArray[0].children[1].innerHTML = "Features content lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam in arcu cursus euismod quis. Nulla facilisi cras fermentum odio eu feugiat pretium nibh. Risus nullam eget felis eget nunc lobortis mattis.";
topContentArray[1].children[0].innerHTML = "about";
topContentArray[1].children[1].innerHTML = "About content lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam in arcu cursus euismod quis. Nulla facilisi cras fermentum odio eu feugiat pretium nibh. Risus nullam eget felis eget nunc lobortis mattis.";


// Main content middle
middleImg.src = 'img/mid-page-accent.jpg';


// Main content bottom
bottomContentArray[0].children[0].innerHTML = "services";
bottomContentArray[0].children[1].innerHTML = "Services content lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam in arcu cursus euismod quis. Nulla facilisi cras fermentum odio eu feugiat pretium nibh. Risus nullam eget felis eget nunc lobortis mattis.";
bottomContentArray[1].children[0].innerHTML = "product";
bottomContentArray[1].children[1].innerHTML = "Services content lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam in arcu cursus euismod quis. Nulla facilisi cras fermentum odio eu feugiat pretium nibh. Risus nullam eget felis eget nunc lobortis mattis.";
bottomContentArray[2].children[0].innerHTML = "vision";
bottomContentArray[2].children[1].innerHTML = "Services content lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam in arcu cursus euismod quis. Nulla facilisi cras fermentum odio eu feugiat pretium nibh. Risus nullam eget felis eget nunc lobortis mattis.";


// Contact
contactArray[0].children[0].innerHTML = "Contact";
contactArray[0].children[1].innerHTML = "123 Way 456 Street<br>Somewhere, USA";
contactArray[0].children[2].innerHTML = "1 (888) 888-8888";
contactArray[0].children[3].innerHTML = "sales@greatidea.io";