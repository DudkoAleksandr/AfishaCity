const eventsBlock = document.querySelector(".ivents__cards");
const routeName = document.querySelector(".nameroute__input");
const startPoint = document.querySelector(".point__route-input");
const shortDescription = document.querySelector(".discription__route-input");
const btnAddRoute = document.querySelector(".btn__route-add");
const routeDistance = document.querySelector(".distance__route-input");
const routeDate = document.querySelector(".info__route-input");
const levelBlock = document.querySelector(".level__cards");
const nameRout = document.querySelector(".nameroute__text");
const dateRout = document.querySelector(".info__route-text");
const distanceRout = document.querySelector(".distance__route-text");
const pointRout = document.querySelector(".point__route-info");
const maxSymbol = document.querySelector(".route__title-symbol");
const delRout = document.querySelector(".btn__del");

let selectedLevel = "Легко";

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
  eventsBlock.innerHTML = null;
  for (let route of routes) {
    let date = new Date(route.date);
    let formatDay = new Intl.DateTimeFormat("ru", {
      day: "numeric",
    }).format(date);
    let formatMonth = new Intl.DateTimeFormat("ru", {
      month: "short",
    })
      .format(date)
      .toUpperCase();

    const html = `
                    <div class="ivent__card">
              <div class="ivent__dates">
                <div class="ivent__date">
                  <p class="ivent__date-num">${formatDay}</p>
                  <p class="ivent__date-month">${formatMonth.slice(0, formatMonth.length - 1)}</p>
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
                  <button id='${route.id}'><p class="card__correct-text">Редактировать</p></button>
                </div>
                <div class="card__del">
                  <img class="card__del-img" src="./img/IconGlyph.png" alt="" />
                </div>
              </div>
            </div>
        `;
    eventsBlock.insertAdjacentHTML("beforeend", html);
  }
  const btnChange = document.querySelectorAll(".card__correct-text");
  console.log(btnChange);
}

render();

btnAddRoute.addEventListener("click", () => {
  const newRoute = {
    id: crypto.randomUUID(),
    date: routeDate.value,
    name: routeName.value,
    distance: routeDistance.value,
    level: selectedLevel,
    start: startPoint.value,
    text: shortDescription.value,
  };

  let error = false;

  if (routeName.value.length < 3) {
    nameRout.innerHTML = "Введите не меньше 3 символов.";
    nameRout.classList.add("error-text");
    routeName.classList.add("error-input");
    error = true;
  } else {
    nameRout.innerHTML = "Минимум 3 символа";
    nameRout.classList.remove("error-text");
    routeName.classList.remove("error-input");
  }
  if (Number(routeDistance.value) < 0) {
    distanceRout.innerHTML = "Укажите дистанцию больше 0 км.";
    distanceRout.classList.add("error-text");
    routeDistance.classList.add("error-input");
    error = true;
  } else {
    distanceRout.innerHTML = "Только положительное число";
    distanceRout.classList.remove("error-text");
    routeDistance.classList.remove("error-input");
  }
  if (startPoint.value === "") {
    pointRout.innerHTML = "Укажите место старта.";
    pointRout.classList.add("error-text");
    startPoint.classList.add("error-input");
    error = true;
  } else {
    pointRout.innerHTML = "Укажите понятный ориентир";
    pointRout.classList.remove("error-text");
    startPoint.classList.remove("error-input");
  }
  if (routeDate.value === "") {
    dateRout.innerHTML = "Выберите дату старта.";
    dateRout.classList.add("error-text");
    routeDate.classList.add("error-input");
    error = true;
    console.log("date");
  } else {
    pointRout.innerHTML = "Формат: день · месяц · год";
    pointRout.classList.remove("error-text");
    routeDate.classList.remove("error-input");
  }
  // maxSymbol = shortDescription.value.length

  if (error === false) {
    routes.push(newRoute);
    render();
  }
});

levelBlock.addEventListener("click", (event) => {
  // if (
  //   event.target.classList.contains("easy") ||
  //   event.target.parentElement.classList.contains("easy")
  // ) {
  //   event.target.classList.add("easygreen");
  //   console.log(event.target);
  // }

  const levelCard = event.target.closest(".level__card");
  const levelCards = document.querySelectorAll(".level__card");
  for (let card of levelCards) {
    card.classList.remove("activ");
  }
  levelCard.classList.add("activ");
  if (levelCard.classList.contains("easy")) {
    selectedLevel = "Легко";
  } else if (levelCard.classList.contains("hard")) {
    selectedLevel = "Сложно";
  } else if (levelCard.classList.contains("midle")) {
    selectedLevel = "Средне";
  }
});

shortDescription.addEventListener("input", () => {
  maxSymbol.innerHTML = shortDescription.value.length;
});

delRout.addEventListener("click", () => {
  routeName.value = null;
  routeDate.value = null;
  routeDistance.value = null;
  startPoint.value = null;
  shortDescription.value = null;
  maxSymbol.innerHTML = 0
  if(selectedLevel === 'Сложно'){
    selectedLevel = 'Легко'
  }
});
