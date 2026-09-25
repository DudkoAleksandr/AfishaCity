const eventsBlock = document.querySelector(".ivents__cards");
const routeName = document.querySelector(".nameroute__input");
const startPoint = document.querySelector(".point__route-input");
const shortDescription = document.querySelector(".discription__route-input");
const btnAddRoute = document.querySelector(".btn__route-add");
const routeDistance = document.querySelector(".distance__route-input");
const routeDate = document.querySelector(".info__route-input");
const levelBlock = document.querySelector(".level__cards");

const routes = [
  {
    id: 1,
    date: "2026-09-22",
    name: "Рассвет",
    distance: "24",
    level: "easy",
    start: "Ростовский акв",
    text: "Спокойный",
    // status: "Ближайший",
  },
];


function render() {
  eventsBlock.innerHTML = null
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
                  <p class="ivent__start-text">Ближайший</p>
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

btnAddRoute.addEventListener('click', () => {
  const newRoute = {
    id: crypto.randomUUID(),
    date: routeDate.value,
    name: routeName.value,
    distance: routeDistance.value,
    level: "easy",
    start: startPoint.value,
    text: shortDescription.value,
  };
  routes.push(newRoute)
  render()

  
  console.log(routes)
})

levelBlock.addEventListener('click', (event) => {
  if (event.target.classList.contains("easy") || event.target.parentElement.classList.contains('easy')) {
    console.log('easy');
  }

})
