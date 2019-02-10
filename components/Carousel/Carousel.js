class Carousel {
    constructor(element) {
        this.el = element;
        this.leftButton = this.el.querySelector('.left-button');
        this.rightButton = this.el.querySelector('.right-button');
        this.img = this.el.querySelectorAll('img')
        this.index = 0;
        this.rightButton.addEventListener('click', () => this.goRight());
        this.leftButton.addEventListener('click', () => this.goLeft());
        this.imgArray = Array.from(this.img).map( img => new CurrentImg(img));
    }

    goLeft() {
        this.img[this.index].style.display = 'none';
        if (this.index === 0) {
            this.index = this.img.length - 1;
        } else {
            this.index--;
        }
        this.img[this.index].style.display = 'block';
        this.imgArray.forEach( (img, index) => {
            if (index !== this.index) {
                img.hide();
            }
        });
        this.imgArray[this.index].show();
        console.log(this.index);
    }
    goRight() {
        this.img[this.index].style.display = 'none';
        if (this.index < this.img.length - 1) {
            this.index ++;
        } else {
            this.index = 0;
        }
        this.img[this.index].style.display = 'block';
        this.imgArray.forEach((img, index) => {
            if (index !== this.index) {
                img.hide();
            }
        });
        this.imgArray[this.index].show();
        console.log(this.index);
    }
}


class CurrentImg {
    constructor(image) {
        this.image = image;
        this.val = this.image.dataset.image;
        this.slide = document.querySelector(`div[data-image="${this.val}"`);
    }
    show() {
        this.image.style.display = 'block';
    }
    hide() {
        this.image.style.display = 'none';
    }
}

let carousel = document.querySelector('.carousel');
new Carousel(carousel);






/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
