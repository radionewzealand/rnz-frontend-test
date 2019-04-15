import domify from "domify";
import { addClass, removeClass } from "../utilities/index.js";

function modalGallery(slides) {
  let wrapper;
  let closeButton;
  let nextButton;
  let previousButton;
  let initialised = false;

  function init() {
    wrapper = domify('<div class="gallery-slider gallery-slider--closed"></div>');
    closeButton = createCloseButton();

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

function createCloseButton() {
  return domify(`<svg width="40px" height="40px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Desktop-Copy" transform="translate(-948.000000, -40.000000)" fill="#FFFFFF" fill-rule="nonzero">
            <g id="16px-Dismiss-Cross" transform="translate(948.000000, 40.000000)">
                <polygon id="Combined-Shape" points="20 16.3985383 36.3985383 1.13092555e-15 40 3.60146163 23.6014617 20 40 36.3985383 36.3985383 40 20 23.6014616 3.60146163 40 0 36.3985383 16.3985383 20 0 3.60146163 3.60146163 0"></polygon>
            </g>
        </g>
    </g>
  </svg>`)
}
