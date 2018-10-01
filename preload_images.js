const images = [];

function preloadImages() {
  for (i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = arguments[i];
  }
}

preloadImages("logo.jpg", "main_bg.jpg", "body_bg.jpg", "header_bg.jpg");
