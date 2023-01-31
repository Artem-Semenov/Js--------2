 "use strict";
/*
const ratings = document.querySelectorAll(".rating");

if (ratings.length > 0) {
  initRatings();
}

function initRatings() {
  let ratingActive, ratingValue;

  for (let i = 0; i < ratings.length; i++) {
    const rating = ratings[i];
    initRating(rating);
  }

  function initRating(rating) {
    initRatingVars(rating);
    setRatingActiveWidth();

    if (rating.classList.contains("rating__set")) {
      setRating(rating);
    }
  }

  function initRatingVars(rating) {
    ratingActive = rating.querySelector(".rating-active");
    ratingValue = rating.querySelector(".rating__value");
  }

  function setRatingActiveWidth(i = ratingValue.innerHTML) {
    const ratingActiveWidth = i / 0.05;
    ratingActive.style.width = ratingActiveWidth + "%";
  }

  function setRating(rating) {
    const ratingItems = rating.querySelectorAll(".rating__item");
    ratingItems.forEach((el, i) => {
      el.addEventListener("mouseenter", () => {
        initRatingVars(rating);
        setRatingActiveWidth(el.value);
      });
      el.addEventListener("mouseleave", () => {
        setRatingActiveWidth();
      });
      el.addEventListener("click", () => {
        initRatingVars(rating);

        if (rating.dataset.ajax) {
          setRatingValue(el.value, rating);
        } else {
          ratingValue.innerHTML = i + 1;
          setRatingActiveWidth();
        }
      });
    });
  }

  async function setRatingValue(value, ratingElem) {
    if (ratingElem.classList.contains("rating_sending")) {
      return false;
    }

    ratingElem.classList.add("rating_sending");

    let response = await fetch("rating.json");

    if (response.ok) {
      const result = await response.json();

      const { newRating, amount: ratingsAmount } = result;

      ratingValue.innerHTML = (
        (newRating * ratingsAmount + +value) /
        (ratingsAmount + 1)
      ).toFixed(2);

      setRatingActiveWidth();

      ratingElem.classList.remove("rating_sending");
    } else {
      alert("error!");
      ratingElem.classList.remove("rating_sending");
    }
  }
}
 */
class StarRating {
  constructor(ratings) {
    this.ratingsWrappers = ratings;
  }
  ratingActive;
  ratingValue;

  InitRatings() {
    if (this.ratingsWrappers.length < 1) {
      console.log("error! There is no rating wrappers to init star rating");
      return;
    }
    for (let i = 0; i < this.ratingsWrappers.length; i++) {
      const rating = this.ratingsWrappers[i];
      this.initRating(rating);
    }
  }

  initRating(rating) {
    this.initRatingVars(rating);
    this.setRatingActiveWidth();
    if (rating.classList.contains("rating__set")) {
      this.setRating(rating);
    }
  }

  initRatingVars(rating) {
    this.ratingActive = rating.querySelector(".rating-active");
    this.ratingValue = rating.querySelector(".rating__value");
  }

  setRatingActiveWidth(i = this.ratingValue.innerHTML) {
    const ratingActiveWidth = i / 0.05;
    this.ratingActive.style.width = ratingActiveWidth + "%";
  }


  setRating(rating) {
    const ratingItems = rating.querySelectorAll(".rating__item");
    ratingItems.forEach((el, i) => {
      el.addEventListener("mouseenter", () => {
        this.initRatingVars(rating);
        this.setRatingActiveWidth(el.value);
      });
      el.addEventListener("mouseleave", () => {
        this.setRatingActiveWidth();
      });
      el.addEventListener("click", () => {
        this.initRatingVars(rating);

        if (rating.dataset.ajax) {
          this.setRatingValue(el.value, rating);
        } else {
          this.ratingValue.innerHTML = i + 1;
          this.setRatingActiveWidth();
        }
      });
    });
  }

  async setRatingValue(value, ratingElem) {
    if (ratingElem.classList.contains("rating_sending")) {
      return false;
    }

    ratingElem.classList.add("rating_sending");
    //Place here your code;
    let response = await fetch("rating.json");

    if (response.ok) {
      const result = await response.json();

      const { newRating, amount: ratingsAmount } = result;

      this.ratingValue.innerHTML = (
        (newRating * ratingsAmount + +value) /
        (ratingsAmount + 1)
      ).toFixed(2);

      this.setRatingActiveWidth();

      ratingElem.classList.remove("rating_sending");
    } else {
      alert("error!");
      ratingElem.classList.remove("rating_sending");
    }
  }

}


let ratings = new StarRating(document.querySelectorAll(".rating"));
ratings.InitRatings()