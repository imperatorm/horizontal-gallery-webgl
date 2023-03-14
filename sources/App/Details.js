import { gsap, Power1 } from "gsap";

export default class Details {
  elements = {
    circle: document.querySelector(".centerCircle"),
    detailText: document.querySelector(".detailTitle--text"),
    mainText: document.querySelector(".mainTitle--text")
  };

  visible = false;

  show(article) {
    if (this.visible !== true) {
      this.visible = true;

      //MainText
      gsap.killTweensOf(this.elements.mainText);
      gsap.fromTo(this.elements.mainText, { y: 0 }, { y: -120, duration: 0.5, ease: Power1.easeInOut });

      //text
      this.elements.detailText.innerText = article.title;
      gsap.killTweensOf(this.elements.detailText);
      gsap.fromTo(this.elements.detailText, { y: 100 }, { y: 0, duration: 0.7, ease: Power1.easeInOut });

      //circle
      gsap.to(this.elements.circle, { opacity: 0, duration: 0.2, delay: 0.2, ease: Power1.easeInOut });
    }
  }

  hide() {
    if (this.visible === true) {
      this.visible = false;

      //MainText
      gsap.killTweensOf(this.elements.mainText);
      gsap.fromTo(this.elements.mainText, { y: -90 }, { y: 0, duration: 0.5, ease: Power1.easeInOut });

      //text
      gsap.killTweensOf(this.elements.detailText);
      gsap.to(this.elements.detailText, { y: -90, duration: 0.5, ease: Power1.easeInOut });

      //circle
      gsap.to(this.elements.circle, { opacity: 1, duration: 0.2, delay: 0.2, ease: Power1.easeInOut });
    }
  }
}
