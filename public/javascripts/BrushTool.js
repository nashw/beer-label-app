class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    set(x, y) {
        // x is a point object
        if (typeof x === 'object') {
            this.x = x.x;
            this.y = x.y;
        }
        // x and y are numbers
        else {
            this.x = x;
            this.y = y;
        }
    }

    distance(x, y) {
        return Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2));
    }

    distance(p) {
        return Math.sqrt(Math.pow(this.x - p.x, 2) + Math.pow(this.y - p.y, 2));
    }
}

class BrushTool extends Tool {
    constructor(canvas) {
        super(canvas);
        this.isMouseDown = false;
        this.currentMousePoint = new Point(0, 0);
        this.previousMousePoint = new Point(0, 0);
        this.canvasPoint = new Point(0, 0);
        console.log('brush tool constructor');
    }

    convertCoordinatesToCanvas(p) {
        return new Point(p.x - this.xOffset, p.y - this.yOffset);
    }

    mouseClick() {
        super.mouseClick();
        console.log('brush tool mouse click');
        this.context.fillStyle = 'green';
        this.context.fillRect(10, 10, 100, 100);
    }

    mouseDown(event) {
        this.isMouseDown = true;
        this.previousMousePoint.set(event.pageX, event.pageY);
        this.canvasPoint = this.convertCoordinatesToCanvas(this.previousMousePoint);
        this.context.beginPath();
        this.context.moveTo(this.canvasPoint.x, this.canvasPoint.y);
    }

    mouseUp() {
        this.isMouseDown = false;
        this.context.closePath();
    }

    mouseMove(event) {
        if (this.isMouseDown) {
            this.currentMousePoint.set(event.pageX, event.pageY);
            if (this.currentMousePoint.distance(this.previousMousePoint) > 1) {
                this.previousMousePoint.set(this.currentMousePoint);
                this.canvasPoint = this.convertCoordinatesToCanvas(this.previousMousePoint);
                this.context.lineTo(this.canvasPoint.x, this.canvasPoint.y);
                this.context.stroke();
            }
        }
    }
}