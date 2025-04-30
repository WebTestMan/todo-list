import { domController } from "./domController";

import streetImage1 from "./images/hanvin-cheong.jpg";
import streetImage2 from "./images/laura-lezman.jpg";
import streetImage3 from "./images/toxic-smoker.jpg";

const imageCarousel = (function () {
  const imageArray = [streetImage1, streetImage2, streetImage3];

  let slideIndex = 1;

  const _nextPrevSlide = (n) => {
    showSlides((slideIndex += n));
  };

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("image-carousel");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.toggle("active");
  }

  const drawImageCarouselPage = () => {
    const contentPage = domController.clearMainContentContainer();
    const imageCarouselContainerDiv = document.createElement("div");
    const nextBtn = document.createElement("a");
    const prevBtn = document.createElement("a");
    const dotDiv = document.createElement("div");
    dotDiv.setAttribute("text-align", "center");

    nextBtn.innerHTML = "&#10095;";
    nextBtn.classList.add("next");
    nextBtn.addEventListener("click", () => {
      _nextPrevSlide(1);
    });

    prevBtn.innerHTML = "&#10094;";
    prevBtn.classList.add("prev");
    prevBtn.addEventListener("click", () => {
      _nextPrevSlide(-1);
    });

    imageArray.forEach((image, index) => {
      const imageCarouselDiv = document.createElement("div");
      const imageBeingAdded = document.createElement("img");

      imageBeingAdded.src = image;
      imageBeingAdded.setAttribute("style", "height:300px;");

      imageCarouselDiv.classList.add("image-carousel");
      imageCarouselDiv.appendChild(imageBeingAdded);
      imageCarouselContainerDiv.appendChild(imageCarouselDiv);

      const dotSpan = document.createElement("span");
      dotSpan.classList.add("dot");
      dotSpan.addEventListener("click", () => {
        currentSlide(index);
      });
      dotDiv.appendChild(dotSpan);
    });
    imageCarouselContainerDiv.appendChild(nextBtn);
    imageCarouselContainerDiv.appendChild(prevBtn);
    imageCarouselContainerDiv.classList.add("slideshow-container");
    contentPage.appendChild(imageCarouselContainerDiv);
    contentPage.appendChild(dotDiv);
    showSlides();
  };

  return { drawImageCarouselPage };
})();

export { imageCarousel };
