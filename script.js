let selectedLevel = "Легко";

const routes = [
  {
    id: "1",
    date: "2026-09-22",
    name: "Рассвет",
    distance: "24",
    level: "Легко",
    start: "Ростовский акв",
    text: "Спокойный",
    // status: "Ближайший",
  },
  {
    id: "2",
    date: "2026-09-22",
    name: "Рассвет2",
    distance: "24",
    level: "Сложно",
    start: "Ростовский акв",
    text: "Спокойный",
    // status: "Ближайший",
  },
  {
    id: "3",
    date: "2026-09-22",
    name: "Рассвет3",
    distance: "24",
    level: "Средне",
    start: "Ростовский акв",
    text: "Спокойный",
    // status: "Ближайший",
  },
];

render();

btnAddRoute.addEventListener("click", () => {
  if (!btnAddRoute.classList.contains("safe")) {
    addRoute();
    render();
  }
});

levelBlock.addEventListener("click", (event) => {
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
  if (shortDescription.value.length > 240) {
    shortDescription.value = shortDescription.value.slice(0, 240);
    alert("меньше символов");
  }
});

delRout.addEventListener("click", () => {
  routeName.value = null;
  routeDate.value = null;
  routeDistance.value = null;
  startPoint.value = null;
  shortDescription.value = null;
  maxSymbol.innerHTML = 0;
  selectedLevel = "Легко";

  const levelCard = document.querySelectorAll(".level__card");
  for (let level of levelCard) {
    if (level.classList.contains("activ")) {
      level.classList.remove("activ");
    }
    if (level.classList.contains("easy")) {
      level.classList.add("activ");
    }
  }
});
