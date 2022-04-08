let currentRating = 0;
let submittedRating = 0;

const ratings = document.querySelectorAll("[data-rating]");
const ratingDialog = document.getElementById("rating-form");
const thanksDialog = document.getElementById("thanks-dialog");
const submitButton = document.getElementById("submit-button");
const confirmation = document.getElementById("confirmation");

window.onload = (event) => {
  let currentRatingElement;
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].addEventListener("click", () => {
      if (currentRatingElement == ratings[i]) {
        return;
      } else {
        if (currentRatingElement) {
          currentRatingElement.classList.remove("selected");
        }
        currentRating = parseInt(ratings[i].dataset.rating);
        ratings.item(i).classList.add("selected");
        currentRatingElement = ratings.item(i);
      }
    });
  }
  submitButton.addEventListener("click", submitRating);
};

function submitRating() {
  if (currentRating > 0) {
    submittedRating = currentRating;

    ratingDialog.classList.add("hidden");
    thanksDialog.classList.remove("hidden");

    confirmation.innerText = `You selected ${submittedRating} out of 5`;
  }
}
