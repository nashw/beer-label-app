class Tool {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.canvasRect = canvas.getBoundingClientRect();
        this.xOffset = this.canvasRect.left;
        this.yOffset = this.canvasRect.top;
        console.log('creating a tool');
    }

    mouseClick() {
        console.log('mouse clicked');
    }
}