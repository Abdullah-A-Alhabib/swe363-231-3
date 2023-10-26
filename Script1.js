// JavaScript source code
class rectangularChicken {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    showchicken() {
        const img = new Image(this.height, this.width);
        img.src = "chikz.jpg";
        document.body.appendChild(img);
    }
}
