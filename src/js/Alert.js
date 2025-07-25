export default class Alert {
  constructor(jsonPath = "./alerts.json") {
    this.jsonPath = jsonPath;
  }

  async init() {
    try {
      const response = await fetch(this.jsonPath);
      if (!response.ok) {
        console.warn(`No alerts found (status: ${response.status})`);
        return;
      }
      const alerts = await response.json();
      if (Array.isArray(alerts) && alerts.Length > 0) {
        this.render(alerts);
      }
    } catch (err) {
      console.error("Error loading alerts:", err);
    }
  }

  render(alerts) {
    const section = document.createElement("section");
    section.className = "alert-list";

    alerts.forEach(({ message, background, color }) => {
      const p = document.createElement("p");
      p.textContent = message;
      p.style.backgroundColor = background;
      p.style.color = color;
      p.className = "alert-item";
      section.appendChild(p);
    });

    const main = document.querySelector("main");
    if (main) {
      main.prepend(section);
    } else {
      console.warn("No <main> element found to prepend alerts");
    }
  }
}
