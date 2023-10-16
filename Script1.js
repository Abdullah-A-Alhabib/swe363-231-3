// JavaScript source code
class rectangularChicken {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    showchicken() {
        const myImage = new Image(this.width, this.height);
        myImage.src = "chikz.jpg";
        document.body.appendChild(myImage);
    }
}