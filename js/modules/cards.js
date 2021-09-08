import {getResourse} from '../services/services';

function cards() {
    
    class MenuCards {
        constructor(src, alt, title, desc,  price, parentSelector ) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.desc = desc;
            this.parent = document.querySelector(parentSelector);
            this.price = price;
            this.transfer = 27;
            this.changeToUan();
        }
        changeToUan() {
            this.price = this.price * this.transfer;
        }
        render() {
            const elem = document.createElement('div');
            elem.innerHTML = `
            <div class="menu__item">
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.desc}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            </div>
        `;
            this.parent.append(elem);
        }

    }
    

    getResourse('http://localhost:3000/menu')
    .then(data => {
        data.forEach(({img, alting, title, descr, price}) => {
            new MenuCards(img, alting, title, descr, price, '.menu .container').render();
        });
    });

}
export default cards;