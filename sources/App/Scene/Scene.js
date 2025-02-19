import App from "../App";
import TeaserImage from "./TeaserImage";
import Raycasting from "./Raycasting";
import { Transform } from "ogl";
import { gsap } from "gsap";

export default class Scene {
  constructor() {
    this.app = new App();
    this.loader = this.app.loader;
    this.articles = this.app.articles;

    this.instance = new Transform();

    this.teaserImages = [];

    this.loader.on("loaded", () => {
      this.articles.forEach((article, index) => {
        this.teaserImages.push(new TeaserImage(article, index));
      });

      this.raycasting = new Raycasting();

      this.pageloading()
      this.playOpening();
      this.Logoloading();
      
    });
  }

  pageloading()
  {
    gsap.to(
      ".page-wrapper",
      {opacity: 1,duration: 1.5,
        ease: "power4.inOut",}
    )
  }

  logoloading() {
    gsap.fromTo(
      ".mainTitle",
        { y:-150, 
          z: 0, 
          opacity: 0,
        },
        {y:0, 
          opacity: 1,
          delay: 0.2,
          z: 20,
          duration: 1,
          ease: "power4.inOut",}
      );
  }

  playOpening() {
    this.teaserImages.forEach((teaserImage, index) => {
      gsap.fromTo(
        teaserImage.mesh.position,
        { x: index * 0.08, z: -index * 0.3 },
        {
          x: teaserImage.mesh.position.x,
          delay: 0.2,
          z: 0,
          duration: 1.5,
          ease: "power4.inOut",
          stagger: 0.1
        }
      );
    });

    gsap.delayedCall(0.8, () => {
      this.app.openingPlayed = true;
    });
  }

  resize() {
    this.teaserImages.forEach((teaserImage) => {
      teaserImage.resize();
    });
  }

  update() {
    this.teaserImages.forEach((teaserImage) => {
      teaserImage.update();
    });
  }
}
