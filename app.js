"use strict";

const ratingBtnsContainer = document.querySelector("#rating-btns-container");

const submitBtn = document.querySelector("#submit-btn");
submitBtn.onclick = handleSubmit;
submitBtn.setAttribute("disabled", "");

const choose = document.querySelector("#choose");
const thankyou = document.querySelector("#thankyou");
thankyou.style.display = "none";
const choice = document.querySelector("#choice");

const ratings = [1, 2, 3, 4, 5];

for (let rating of ratings) {
	let ratingBtn = document.createElement("div");
	ratingBtn.className = "btns rating-btns";
	ratingBtn.innerText = rating;
	ratingBtn.onclick = (event) => handleRatingBtnClick(event, rating);
	ratingBtnsContainer.appendChild(ratingBtn);
}

let chosenBtn, chosenRating;
function handleRatingBtnClick(event, rating) {
	chosenBtn && chosenBtn.classList.remove("selected");
	chosenBtn = event.target;
	chosenBtn.classList.add("selected");
	submitBtn.removeAttribute("disabled");
	chosenRating = rating;
	choice.innerText = `You selected ${rating} out of 5`;
}

function handleSubmit() {
	choose.style.display = "none";
	thankyou.style.display = "flex";
}
