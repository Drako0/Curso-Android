var fn = {
    ready: function(){
        document.addEventListener('deviceready',fn.init,false);
    },
    init: function(){
        var x = false;
        if(!x)
            window.location.href = "#registro";
        $('#registro a:eq(0)').tap(capture.takePhoto);
        $('#registro a:eq(1)').tap(fn.registrar);
    },
    registrar: function(){
        var nom = $('#registro input:eq(0)').val();
        var mail = $('#registro input:eq(1)').val();
        var tel = $('#registro input:eq(2)').val();
        
        if(nom != '' && mail != '' && tel != '')
            alert(nom + ' - ' + mail + ' - ' + tel);
        else
            navigator.notification.alert('Todos los campos son requeridos', null, 'Error de Datos','Aceptar');
    }
};
$(fn.ready);