import domify from "domify";
import { addClass, removeClass } from "../utilities/index.js";

function modalGallery(slides) {
  let wrapper;
  let closeButton;
  let nextButton;
  let previousButton;
  let index;
  let initialised = false;

  function init() {
    wrapper = domify('<div class="gallery-slider gallery-slider--closed"></div>');

    // TODO: Implement initialising the modal gallery

    document.body.appendChild(wrapper);
    initialised = true;
  }

  function open(index) {
    if (!initialised) {
      init();
    } else {
      document.body.appendChild(wrapper);
    }
    index = index;

    // TODO: Implement opening the modal gallery to a specific index
  }

  function close() {
    // TODO: Implement closing the gallery
  }

  function next() {
    // TODO: Implement moving to the next slide
  }

  function previous() {
    // TODO: Implement moving to the previous slide
  }

  /**
   * Handle the keydown event
   */
  function onKeyDown(e) {
    if (e.keyCode === 27) {
      close();
    }
  }

  /**
   * Handle the close click
   */
  function onCloseClick(e) {
    e.preventDefault();
    close();
  }

  /**
   * Expose public API
   */
  return {
    open,
    close
  };
}

export default modalGallery;

window.modalGallery = modalGallery;

function createSlide(slide) {
  return wrapped(
    domify(`<img class="gallery-slide__image" src="${slide.src}"/>`)
  );
}

function wrapped(content) {
  const wrapper = domify('<div class="gallery-slide"></div>');
  const inner = domify('<div class="gallery-slide__inner"></div>');
  inner.appendChild(content);
  wrapper.appendChild(inner);
  return wrapper;
}
