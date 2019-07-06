"use strict";

// Store ice cream image element
var iceCream = document.getElementsByTagName("img")[0];

// Store image caption element
var caption = document.getElementsByClassName("caption")[0];

// Toggle .hide class
var toggleHide = function toggleHide() {
  return caption.classList.toggle("hide");
};

// When the user hovers over the image, show the caption
iceCream.addEventListener("mouseenter", toggleHide);

iceCream.addEventListener("mouseleave", toggleHide);