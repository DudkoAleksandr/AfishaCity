const eventsBlock = document.querySelector(".ivents__cards");

const routes = [
  {
    id: 1,
    date: "2026-09-22",
    name: "Рассвет",
    distance: "24",
    level: "easy",
    start: "Ростовский акв",
    text: "Спокойный",
    status: "Ближайший",
  },
  {
    id: 1,
    date: "2026-09-22",
    name: "Рассвет1",
    distance: "24 1",
    level: "easy 1",
    start: "Ростовский акв 1",
    text: "Спокойный 1",
    status: "Ближайший1",
  },
  {
    id: 1,
    date: "2026-09-22",
    name: "Рассвет2",
    distance: "24 2",
    level: "easy 2",
    start: "Ростовский акв 2",
    text: "Спокойный 2",
    status: "Ближайший2",
  },
  {
    id: 1,
    date: "2026-09-22",
    name: "Рассвет3",
    distance: "24 3",
    level: "easy 3",
    start: "Ростовский акв 3",
    text: "Спокойный 3",
    status: "Ближайший3",
  },
];

function render() {
  for (let route of routes) {
    const html = `
                    <div class="ivent__card">
              <div class="ivent__dates">
                <div class="ivent__date">
                  <p class="ivent__date-num">29</p>
                  <p class="ivent__date-month">АВГ</p>
                </div>
                <div class="ivent__start">
                  <img
                    class="ivent__start-img"
                    src="./img/Badgeicon.png"
                    alt=""
                  />
                  <p class="ivent__start-text">${route.status}</p>
                </div>
              </div>
              <p class="ivent__title">${route.name}</p>
              <p class="ivent__text">
                ${route.text}
              </p>
              <div class="ivent__level">
                <img
                  class="ivent__level-logo"
                  src="./img/RouteIcon.png"
                  alt=""
                />
                <p class="ivent__level-title">${route.distance} км</p>
                <div class="ivent__logos">
                  <img
                    class="ivent__logos-logo"
                    src="./img/EasyIcon.png"
                    alt=""
                  />
                  <p class="ivent__logos-text">${route.level}</p>
                </div>
              </div>
              <div class="ivent__adres">
                <img
                  class="ivent__adress-img"
                  src="./img/RouteCardIcon.png"
                  alt=""
                />
                <p class="ivent__adress">${route.start}</p>
              </div>
                            <div class="card__change">
                <div class="card__correct">
                  <img
                    class="card__correct-icon"
                    src="./img/GhostIcon.png"
                    alt=""
                  />
                  <a href=""><p class="card__correct-text">Редактировать</p></a>
                </div>
                <div class="card__del">
                  <img class="card__del-img" src="./img/IconGlyph.png" alt="" />
                </div>
              </div>
            </div>
        `;
    eventsBlock.insertAdjacentHTML("beforeend", html);
  }
}
render();
