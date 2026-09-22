const eventsBlock = document.querySelector(".ivents__cards");

const routes = [
    {
        id: 1,
        date: '2026-09-22',
        name: 'Рассвет',
        distance: '24',
        level: 'easy',
        start: 'Ростовский акв',
        text: 'Спокойный',
    },
    {
        id: 1,
        date: '2026-09-22',
        name: 'Рассвет',
        distance: '24',
        level: 'easy',
        start: 'Ростовский акв',
        text: 'Спокойный',
    },
    {
        id: 1,
        date: '2026-09-22',
        name: 'Рассвет',
        distance: '24',
        level: 'easy',
        start: 'Ростовский акв',
        text: 'Спокойный',
    },
    {
        id: 1,
        date: '2026-09-22',
        name: 'Рассвет',
        distance: '24',
        level: 'easy',
        start: 'Ростовский акв',
        text: 'Спокойный',
    }
    
]

function render(){
    for( let route of routes){
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
                  <p class="ivent__start-text">БЛИЖАЙШИЙ</p>
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
                <p class="ivent__level-title">24 км</p>
                <div class="ivent__logos">
                  <img
                    class="ivent__logos-logo"
                    src="./img/EasyIcon.png"
                    alt=""
                  />
                  <p class="ivent__logos-text">ЛЕГКО</p>
                </div>
              </div>
              <div class="ivent__adres">
                <img
                  class="ivent__adress-img"
                  src="./img/RouteCardIcon.png"
                  alt=""
                />
                <p class="ivent__adress">Ростокинский акведук</p>
              </div>
            </div>
        `;
        eventsBlock.insertAdjacentHTML('beforeend', html)
    }
    
}
render()