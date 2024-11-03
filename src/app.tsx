import pingPongBallBird from "./images/pingpongball-bird";
import { settings } from "./settings";

async function main() {
  while (!Spicetify?.showNotification) {
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  const ppbEnabled = settings.getFieldValue("ppb-enabled");
  
  setInterval(() => {
    if (!ppbEnabled) return
    document.querySelectorAll("img").forEach(img => {
      if (img.getAttribute("cb-tbppb") == "true") return
      img.src = `data:image/png;base64,${pingPongBallBird.base64}`;
      img.srcset = `data:image/png;base64,${pingPongBallBird.base64}`;
      img.setAttribute("cb-tbppb", "true");
    });
  }, 100);

  settings.pushSettings();
}

export default main;
