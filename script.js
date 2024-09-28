// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue === htmlEndValue) {
    clearInterval(progresshtml);
  }
  
}, htmlspeed);

// javascript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 85,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue === javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// PHP progress circular bar 
let phpProgress = document.querySelector(".php"),
  phpValue = document.querySelector(".php-progress");

let phpStartValue = 0,
  phpEndValue = 80,
  phpspeed = 30;

let progressphp = setInterval(() => {
  phpStartValue++;

  phpValue.textContent = `${phpStartValue}%`;
  phpProgress.style.background = `conic-gradient(#20c997 ${
    phpStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (phpStartValue === phpEndValue) {
    clearInterval(progressphp);
  }
}, phpspeed);

// ReactJS progress circular bar 
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 75,
  rjsspeed = 30;

let progressreact = setInterval(() => {
  reactStartValue++;

  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#3f396d ${
    reactStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (reactStartValue === reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);

// Additional progress bars for circular skills 
document.querySelectorAll('.circular-progress').forEach((progressElement) => {
  const progressValue = progressElement.getAttribute('data-progress');
  let startValue = 0;
  const endValue = progressValue;
  const speed = 30;

  let progressAnimation = setInterval(() => {
    startValue++;

    const valueDisplay = progressElement.querySelector('.progress-value');
    valueDisplay.textContent = `${startValue}%`;

    progressElement.style.background = `conic-gradient(#7d2ae8 ${startValue * 3.6}deg, #ededed 0deg)`;

    if (startValue === endValue) {
      clearInterval(progressAnimation);
    }
  }, speed);
});

// Filter using jQuery
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value === "all") {
      $(".post").show(1000);
    } else {
      $(".post")
        .not("." + value)
        .hide(1000);
      $(".post")
        .filter("." + value)
        .show(1000);
    }
  });
});

// Sticky navbar
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.getElementById("navbar-top").classList.add("fixed-top");
      // Add padding top to show content behind navbar
      let navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      document.getElementById("navbar-top").classList.remove("fixed-top");
      // Remove padding top from body
      document.body.style.paddingTop = "0";
    }
  });
});

// Back to top button functionality
let mybutton = document.getElementById("btn-back-to-top");

// Show the button when the user scrolls down 20px
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Scroll to the top when the button is clicked
mybutton.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
