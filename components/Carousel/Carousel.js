class Carousel {
    constructor(element) {
        this.el = element;
        this.leftButton = this.el.querySelector('.left-button');
        this.rightButton = this.el.querySelector('.right-button');
        this.img = this.el.querySelectorAll('img')
        this.imgArray = Array.from(this.img).map( img => img);
        this.count = 0;
        this.rightButton.addEventListener('click', () => this.goRight());
        this.leftButton.addEventListener('click', () => this.goLeft());
    }

    goRight() {
        console.log('Hello');
        this.imgArray[this.count].style.display = 'none';
        if (this.count > 0) {
            this.count += 1;
            this.imgArray[this.count].style.display = 'block';
        } else {
            this.counter = this.img.length - 1;
            this.imgArray[this.count].style.display = 'block';
        }
    }
    goLeft() {

    }
}


// class CurrentImg {
//     constructor(imgElement) {
//         this.el = imgElement;
//     }
//     show() {
//         this.el.style.opacity = '1'
//         this.el.style.display = 'block'
//     }
// }

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
