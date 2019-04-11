import domready from "domready";
import viewloader from "viewloader";

import imageGrid from "./components/image-grid";
import modalGallery from "./components/modal-gallery";

const views = {
  imageGrid,
  modalGallery
};

// Initialise the JavaScript components
domready(() => {
  var viewManager = viewloader(views);
  viewManager.callViews();
});
