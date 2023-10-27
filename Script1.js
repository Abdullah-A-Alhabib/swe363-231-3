// JavaScript source code
class rectangularChicken {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    showchicken() {
        const img = new Image(this.width, this.height);
        img.src = "chiknbutn.png";
        document.body.appendChild(img);
    }
}
let x = new rectangularChicken(50, 50);
x.showchicken();
