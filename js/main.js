// start header

// start var
let body = document.getElementById("body");
let mode = document.getElementById("theme-btn");
let but = document.getElementById("menu-btn");
let nav = document.querySelector(".nav");
let formBut = document.getElementById("login-btn");
let user = document.querySelector(".user");
let list = document.querySelectorAll(".list");
let searchBut = document.getElementById("search-btn");
let searchForm = document.querySelector(".search-form");

// dark mode
mode.addEventListener("click", () => {
  body.classList.toggle("active");
  mode.classList.toggle("fa-sun");

  nav.classList.remove("active");
  user.classList.remove("active");
  but.classList.remove("fa-times");
  searchForm.classList.remove("active");
});

// search form
searchBut.addEventListener("click", () => {
  searchForm.classList.toggle("active");
  nav.classList.remove("active");
  user.classList.remove("active");
  but.classList.remove("fa-times");
});

// menu nav
but.addEventListener("click", () => {
  nav.classList.toggle("active");
  but.classList.toggle("fa-times");

  user.classList.remove("active");
  searchForm.classList.remove("active");
});

// user form
formBut.addEventListener("click", () => {
  user.classList.toggle("active");

  nav.classList.remove("active");
  but.classList.remove("fa-times");
  searchForm.classList.remove("active");
});

// start window
window.onscroll = function () {
  nav.classList.remove("active");
  user.classList.remove("active");
  but.classList.remove("fa-times");
  searchForm.classList.remove("active");
};

// nav active
list.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".list.active").classList.remove("active");
    item.classList.add("active");
  });
});
// end header

// start move
// start home
let home = document.getElementById("home");
let homeImg = document.getElementById("home-img");
let homeInfo = document.getElementById("home-info");
let homeHeight = home.offsetHeight;
let bod = document.body;

console.log(homeHeight);

window.onscroll = function () {
  let height = window.pageYOffset;
  console.log(height);

  // start small
  let small = document.getElementById("small");
  let smallHeight = small.offsetHeight;

  if (height < homeHeight - smallHeight * 2) {
    small.classList.remove("active");
  } else {
    small.classList.add("active");
  }
  // end small

  // start packages
  let back = document.getElementById("packages");
  let backHeight = back.offsetHeight;
  let boxOne = document.querySelectorAll(".box-1");
  let boxTwo = document.querySelectorAll(".box-2");

  if (height < homeHeight / 1.2) {
    boxOne.forEach((e) => {
      e.classList.remove("active");
    });
  } else {
    boxOne.forEach((e) => {
      e.classList.add("active");
    });
  }
  console.log(homeHeight + backHeight);
  console.log(height);
  if (height < homeHeight + backHeight / 3) {
    boxTwo.forEach((e) => {
      e.classList.remove("active");
    });
  } else {
    boxTwo.forEach((e) => {
      e.classList.add("active");
    });
  }
  // end packages

  // start services
  let services = document.getElementById("services");
  let serHeight = services.offsetHeight;
  let boxThree = document.querySelectorAll(".box-3");
  let boxFour = document.querySelectorAll(".box-4");

  if (height < homeHeight + backHeight / 1.1) {
    boxThree.forEach((e) => {
      e.classList.remove("active");
    });
  } else {
    boxThree.forEach((e) => {
      e.classList.add("active");
    });
  }

  if (height < homeHeight + backHeight * 1.1) {
    boxFour.forEach((e) => {
      e.classList.remove("active");
    });
  } else {
    boxFour.forEach((e) => {
      e.classList.add("active");
    });
  }
  // end services

  // start price
  let price = document.getElementById("pricing");
  let priceHeight = price.offsetHeight;
  let boxFive = document.querySelectorAll(".box-5");
  console.log(homeHeight + serHeight + priceHeight + smallHeight);
  console.log(height);
  if (height < homeHeight + serHeight + priceHeight + smallHeight * 1.1) {
    boxFive.forEach((e) => {
      e.classList.remove("active");
    });
  } else {
    boxFive.forEach((e) => {
      e.classList.add("active");
    });
  }
  // end price

  // start review
  let review = document.getElementById("review");
  let reviewHeight = review.offsetHeight;
  let boxSix = document.querySelectorAll(".box-6");
  console.log(homeHeight + serHeight + priceHeight + backHeight);
  console.log(height);
  if (height < homeHeight + serHeight + priceHeight + backHeight) {
    boxSix.forEach((e) => {
      e.classList.remove("active");
    });
  } else {
    boxSix.forEach((e) => {
      e.classList.add("active");
    });
  }
  // end review

  // start form
  let form = document.getElementById("contact");
  let formHeight = form.offsetHeight;
  let boxSeven = document.querySelectorAll(".box-7");
  let boxEight = document.querySelectorAll(".box-8");
  let boxNine = document.querySelectorAll(".box-9");
  console.log(homeHeight + serHeight + priceHeight + backHeight + formHeight);
  console.log(height);
  if (
    height <
    homeHeight + serHeight + priceHeight + backHeight + formHeight / 2
  ) {
    boxSeven.forEach((e) => {
      e.classList.remove("active");
    });
  } else {
    boxSeven.forEach((e) => {
      e.classList.add("active");
    });
  }

  if (
    height <
    homeHeight + serHeight + priceHeight + backHeight + formHeight / 1.6
  ) {
    boxEight.forEach((e) => {
      e.classList.remove("active");
    });
  } else {
    boxEight.forEach((e) => {
      e.classList.add("active");
    });
  }

  if (
    height <
    homeHeight + serHeight + priceHeight + backHeight + formHeight / 1.4
  ) {
    boxNine.forEach((e) => {
      e.classList.remove("active");
    });
  } else {
    boxNine.forEach((e) => {
      e.classList.add("active");
    });
  }
  // end form

  // start blogs
  let blogs = document.getElementById("blogs");
  let blogsHeight = blogs.offsetHeight;
  let boxTen = document.querySelectorAll(".box-10");
  console.log(
    homeHeight +
      serHeight +
      priceHeight +
      backHeight +
      blogsHeight +
      smallHeight * 3
  );
  console.log(height);
  if (
    height <
    homeHeight +
      serHeight +
      priceHeight +
      backHeight +
      blogsHeight +
      smallHeight * 0.9
  ) {
    boxTen.forEach((e) => {
      e.classList.remove("active");
    });
  } else {
    boxTen.forEach((e) => {
      e.classList.add("active");
    });
  }
  // end blogs

  // start footer
  let footer = document.getElementById("footer");
  let footerHeight = footer.offsetHeight;
  let boxEleven = document.querySelectorAll(".box-11");
  if (
    height <
    homeHeight +
      serHeight +
      priceHeight +
      backHeight +
      footerHeight +
      smallHeight * 5
  ) {
    boxEleven.forEach((e) => {
      e.classList.remove("active");
    });
  } else {
    boxEleven.forEach((e) => {
      e.classList.add("active");
    });
  }
  // end footer
};

window.onload = function () {
  homeImg.classList.add("active");
  homeInfo.classList.add("active");
};
// end home
// end move
