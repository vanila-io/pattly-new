prototypefabric;
var prototypefabric = new function() {
    var canvas = window._canvas = new fabric.Canvas('canvas');
    canvas.setWidth($('.canvas').width());
    canvas.setHeight($('.canvas').height());
    initCenteringGuidelines(canvas);
    initAligningGuidelines(canvas);
    canvas.clipBackground = false;
    canvas.clipOverlay = false;
    canvas.controlsAboveOverlay = true;
    canvas.backgroundColor = '#ffffff';
    canvas.on('after:render',function(options){
        var json = JSON.stringify(canvas.toJSON(['src','class','id','name','canvasWidth','canvasHeight','canvasClipSrc']));
        $('#device_data').val(json);
    });
    this.addImage = function(src){
        var image = new Image();
        image.onload = function() {
            img = new fabric.Image(image);
            img.scaleToWidth(canvas.width);
            canvas.centerObject(img);
            canvas.add(img);
            canvas.sendToBack(img);
            canvas.renderAll();
        }
        image.src = src;
    };

    this.addText = function(text){
        var title = text;
        var text = new fabric.IText(title, {
            fontSize: 50,
            textAlign: 'center',
            fontWeight:100,
            fontFamily:'Roboto'
        });
        text.setShadow({
            blur:3,
            offsetX:1,
            offsetY:1,
            color:'#333',
        });
        canvas.add(text);
        canvas.centerObject(text);
        canvas.bringToFront(text);
        text.setCoords();
        canvas.calcOffset();
        canvas.renderAll();
        canvas.renderAll();
    }
    this.deleteObject = function(){
        canvas.remove(canvas.getActiveObject());
    }
};

//============== Jquery Events ================

$(window).load(function(){
    prototypefabric.addText('C A N V A S');
    $('html').keyup(function(e){
        if(e.keyCode == 46) {
            prototypefabric.deleteObject();
        }
    });
});