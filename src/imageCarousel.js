import { domController } from "./domController";

import streetImage1 from "./images/hanvin-cheong.jpg";
import streetImage2 from "./images/laura-lezman.jpg";
import streetImage3 from "./images/toxic-smoker.jpg";

const imageCarousel = (function () {
  const drawImageCarouselPage = () => {
    const contentPage = domController.clearMainContentContainer();
    const imageCarouselContainerDiv = document.createElement("div");
    const imageCarouselDiv = document.createElement("div");

    const imageArray = [streetImage1, streetImage2, streetImage3];

    imageArray.forEach((image) => {
      const imageBeingAdded = document.createElement("img");
      imageBeingAdded.src = image;
      imageBeingAdded.setAttribute("style", "height:300px;");
      imageCarouselDiv.appendChild(imageBeingAdded);
    });
    imageCarouselContainerDiv.appendChild(imageCarouselDiv);
    contentPage.appendChild(imageCarouselContainerDiv);
  };
  return { drawImageCarouselPage };
})();

export { imageCarousel };
