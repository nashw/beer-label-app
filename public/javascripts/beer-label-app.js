// define list of tools
const tools = {
    'brushTool': {
        'class': BrushTool
    }
}

function runApp() {
    let canvas = $('.canvas canvas');
    console.log(canvas);
    for (const tool of Object.keys(tools)) {
        const toolInstance = new tools[tool].class(canvas[0]);
        let toolDiv = $('<div/>').text(tools[tool].class.name);
        // toolDiv.on('click', function() {
        //     canvas.on('click', function(){
        //         toolInstance.mouseClick();
        //     });
        // });
        toolDiv.on('mousedown', function() {
            canvas.on('mousedown', function(event){
                toolInstance.mouseDown(event);
            });
        });
        toolDiv.on('mouseup', function() {
            canvas.on('mouseup', function(event){
                toolInstance.mouseUp(event);
            });
        });
        toolDiv.on('mousemove', function() {
            canvas.on('mousemove', function(event){
                toolInstance.mouseMove(event);
            });
        });
        $('.tools').append(toolDiv);
    }
}

// wait for document to be ready
$(runApp);