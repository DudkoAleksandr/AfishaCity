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
                <div class="ivent__change">
                <div class="ivent__start">
                  <img
                    class="ivent__start-img"
                    src="./img/Badgeicon.png"
                    alt=""
                  />
                  <p class="ivent__start-text">Ближайший</p>
                </div>
                <div class="redact__card none">
  <img class="redact__logo" src="./img/EditingIcon.png" alt="" />
  <p class="redact__text">Редактируется</p>
</div>

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
                  <button class="card__correct-text" id='${route.id}'>Редактировать</button>
                </div>
                <div class="card__del">
                  <img class="card__del-img" src="./img/IconGlyph.png" alt="" />
                </div>
              </div>
            </div>
        `;
    eventsBlock.insertAdjacentHTML("beforeend", html);
  }
  editRoute();
}

function editForm(route) {
  addRouteTitle.innerHTML = "Редактировать маршрут";
  routeName.value = route.name;
  routeDate.value = route.date;
  routeDistance.value = route.distance;
  startPoint.value = route.start;
  shortDescription.value = route.text;
  maxSymbol.innerHTML = route.text.length;
  selectedLevel = route.level;
  addRouteLogo.src = "./img/EditingIcon.png";
  addRouteSubTitle.innerHTML =
    "Измените данные и сохраните запись без создания дубликата.";
  btnAddRoute.innerHTML = "Сохранить";
  delRout.innerHTML = "Отменить";
  btnAddRoute.classList.add("safe");
  imgBtnAdd.src = "./img/Button!PrimaryIcon.png";
  imgBtnDel.src = "./img/Button!SecondaryIcon.png";
  addRouteBlock.classList.add("ivents__add-green");
}

function editRoute() {
  const btnsChange = document.querySelectorAll(".card__correct-text");
  const eventCards = document.querySelectorAll(".ivent__card");
  const redactCards = document.querySelectorAll(".redact__card");

  for (let i = 0; i < btnsChange.length; i++) {
    let btnChange = btnsChange[i];
    btnChange.addEventListener("click", () => {
      console.log(i);

      for (let route of routes) {
        if (btnChange.id === route.id) {
          editForm(route);
          redactCards[i].classList.remove("none");
          eventCards[i].classList.add("ivents__add-green");
        }
      }
    });
  }
}

function addRoute() {
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
    addRouteTitle.innerHTML = "Проверьте поля";
    addRouteLogo.src = "./img/CreateIcon.png";
    addRouteBlock.classList.add("ivents__add-red");
    btnAddRoute.innerHTML = "Исправить";
    imgBtnAdd.src = "./img/Button!Primary.png";
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
    addRouteTitle.innerHTML = "Проверьте поля";
    addRouteLogo.src = "./img/CreateIcon.png";
    addRouteBlock.classList.add("ivents__add-red");
    btnAddRoute.innerHTML = "Исправить";
    imgBtnAdd.src = "./img/Button!Primary.png";

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
    addRouteTitle.innerHTML = "Проверьте поля";
    addRouteLogo.src = "./img/CreateIcon.png";
    addRouteBlock.classList.add("ivents__add-red");
    btnAddRoute.innerHTML = "Исправить";
    imgBtnAdd.src = "./img/Button!Primary.png";

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
    addRouteTitle.innerHTML = "Проверьте поля";
    addRouteLogo.src = "./img/CreateIcon.png";
    addRouteBlock.classList.add("ivents__add-red");
    btnAddRoute.innerHTML = "Исправить";
    imgBtnAdd.src = "./img/Button!Primary.png";

    dateRout.innerHTML = "Выберите дату старта.";
    dateRout.classList.add("error-text");
    routeDate.classList.add("error-input");
    error = true;
    console.log("date");
  } else {
    dateRout.innerHTML = "Формат: день · месяц · год";
    dateRout.classList.remove("error-text");
    routeDate.classList.remove("error-input");
  }

  if (error === false) {
    addRouteLogo.src = "./img/plus.png";
    addRouteBlock.classList.remove("ivents__add-red");
    btnAddRoute.innerHTML = "Добавить";

    routes.push(newRoute);
    console.log(routes);
  }
}
