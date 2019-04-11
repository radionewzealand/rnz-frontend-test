import modalGallery from "../modal-gallery";

export default function imageGrid(el, props) {
  const slides = el.querySelectorAll(`${props.slideSelector}`);
  const gallery = modalGallery(slides);
  const buttons = Array.prototype.slice.call(el.querySelectorAll("a, button"));
  buttons.forEach((button, i) => {
    button.addEventListener("click", e => {
      e.preventDefault();
      gallery.open(i);
    });
  });
}
