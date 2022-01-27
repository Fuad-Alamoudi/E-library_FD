const modal = document.getElementById("modal");
const btnFinsh = document.getElementById("btn-finsh");
const btnNext = document.querySelector("form .btn .btn-next");
const btnPrev = document.querySelector("form .btn .btn-prev");
const line = document.querySelector(".indcator .line span");
const indicatorItems = document.querySelectorAll(".indcator p");
const form = document.querySelector("form");
const allTab = document.querySelectorAll("form .tab");

btnFinsh.addEventListener("click", function () {
  modal.style.display = "block";
});
window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};
let step = 0;

//Show First tab
allTab[step].classList.add("show");
//Fill colore first cercal
indicatorItems[step].classList.add("active");

line.style.width = step;
btnPrev.style.display ="none"
console.log(step);
btnNext.addEventListener("click", function () {
  //Move to tab next
  step += 1;
  btnPrev.style.display ="block"
  if (step >= allTab.length) {
  } else {
    //Remve Prev Tab and Remov colre cercal
    for (let j = 0; j < allTab.length; j++) {
      allTab[j].classList.remove("show");
      indicatorItems[j].classList.remove("active");
    }
    

    for (let j = 0; j < step; j++) {
      indicatorItems[j].classList.add("active");
    }
    //Show Tab After click Next
    allTab[step].classList.add("show");
    //Fill line colore
    step * 25;
    line.style.width = step * 31 + "%";
    console.log(step + "%");
    //Fill colore cercal
    indicatorItems[step].classList.add("active");
    if(step ===allTab.length -1 ){
        btnNext.innerHTML = 'إرسال';
    }
    
  }
  
 
});

btnPrev.addEventListener("click", function () {
  step -= 1;
  console.log(step);
  //Remve Prev Tab and Remov colre cercal
  for (let j = 0; j < allTab.length; j++) {
    allTab[j].classList.remove("show");
    indicatorItems[j].classList.remove("active");
  }

  for (let j = 0; j < step; j++) {
    indicatorItems[j].classList.add("active");
  }
  //Show Tab After click Next
  allTab[step].classList.add("show");
  //Fill line colore
  line.style.width = step * 31 + "%";
  console.log(step + "%");
  //Fill colore cercal
  indicatorItems[step].classList.add("active");
  if(step <=3){
    btnNext.innerHTML = "التالي"
  }
});
// console.log(step);
//   if (step === 0) {
//     btnPrev.style.display = "nono";
//   } else {
//     btnPrev.style.display = "block";
//   }
