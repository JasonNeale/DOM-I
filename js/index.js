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
    "h1": "DOM<br>Is<br>Awesome",
    "button": "Get Started!",
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
    "address" : "123 Way 456 Street<br>Somewhere, USA",
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
const doc = document;
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
const footerP = document.querySelector("footer");
const addNavA = document.getElementsByTagName("nav");
const newNav1 = document.createElement("a");
const newNav2 = document.createElement("a");

// Navigation
// headerNavAArray[0].innerHTML = siteContent['nav']['nav-item-1'];
// headerNavAArray[1].innerHTML = siteContent['nav']['nav-item-2'];
// headerNavAArray[2].innerHTML = siteContent['nav']['nav-item-3'];
// headerNavAArray[3].innerHTML = siteContent['nav']['nav-item-4'];
// headerNavAArray[4].innerHTML = siteContent['nav']['nav-item-5'];
// headerNavAArray[5].innerHTML = siteContent['nav']['nav-item-6'];

// or...

for (let i = 0; i < headerNavAArray.length; i++) {
    let navItem = `nav-item-${i + 1}`;
    headerNavAArray[i].innerHTML = siteContent['nav'][navItem];

    // Stretch
    headerNavAArray[i].style.color = 'green';
}

newNav1.innerHTML = "NewNav1";
newNav1.style.color = 'green';
newNav2.innerHTML = "NewNav2";
newNav2.style.color = 'green';
addNavA[0].prepend(newNav1);
addNavA[0].appendChild(newNav2);


// Header
ctaImg.src = siteContent['cta']['img-src'];
ctaH1.innerHTML = siteContent['cta']['h1'];
ctaButton.innerHTML = siteContent['cta']['button'];


// Main content top
topContentArray[0].children[0].innerHTML = siteContent['main-content']['features-h4'];
topContentArray[0].children[1].innerHTML = siteContent['main-content']['features-content'];
topContentArray[1].children[0].innerHTML = siteContent['main-content']['about-h4'];
topContentArray[1].children[1].innerHTML = siteContent['main-content']['about-content'];


// Main content middle
middleImg.src = siteContent['main-content']['middle-img-src'];


// Main content bottom
bottomContentArray[0].children[0].innerHTML = siteContent['main-content']['services-h4'];
bottomContentArray[0].children[1].innerHTML = siteContent['main-content']['services-content'];
bottomContentArray[1].children[0].innerHTML = siteContent['main-content']['product-h4'];
bottomContentArray[1].children[1].innerHTML = siteContent['main-content']['product-content'];
bottomContentArray[2].children[0].innerHTML = siteContent['main-content']['vision-h4'];
bottomContentArray[2].children[1].innerHTML = siteContent['main-content']['vision-content'];


// Contact
contactArray[0].children[0].innerHTML = siteContent['contact']['contact-h4'];
contactArray[0].children[1].innerHTML = siteContent['contact']['address'];
contactArray[0].children[2].innerHTML = siteContent['contact']['phone'];
contactArray[0].children[3].innerHTML = siteContent['contact']['email'];


// Footer
footerP.innerHTML = siteContent['footer']['copyright'];


// Stretch
ctaButton.style.borderRadius = "50px";

ctaButton.onclick = function() {alert("Boo~");};
