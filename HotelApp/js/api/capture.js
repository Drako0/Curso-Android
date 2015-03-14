//media-capture
var capture = {
    imgSuccess: function(mf){//funcion en caso de que sea satisfactorio
        var i, path, len;
    for (i = 0, len = mf.length; i < len; i += 1) {
        path = mf[i].fullPath;//ruta completa del archivo de imagen
        // do something interesting with the file
        }
        $('#registro div[role=main] a').attr('rel',path);
        $('#registro div[role=main] ul li:eq(4)').html('<img src="' + path + '" style="width:100%;">');
    
    },
    imgError: function(err){//funcion en caso de que haya un error
        navigator.notification.alert('Error code: ' + err.code, null, 'Capture Error');
    },
    takePhoto: function(){//implementacion o llamada de captura de imagen
        // start audio capture
        navigator.device.capture.captureImage(capture.imgSuccess, capture.imgError, {limit:2});
    }
}; //objeto 

