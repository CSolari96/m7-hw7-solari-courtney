// Store ice cream image element
const iceCream = document.getElementsByTagName("img")[0];

// Store image caption element
const caption = document.getElementsByClassName("caption")[0];

// Toggle .hide class
const toggleHide = () => caption.classList.toggle("hide");

// Hide caption when page loads
caption.classList.add("hide");

// When the user's mouse enters or leaves the image, toggle the display of the caption
iceCream.addEventListener("mouseenter", toggleHide);
iceCream.addEventListener("mouseleave", toggleHide);