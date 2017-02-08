$(window).on('load', function() {
	window.setTimeout(function() {
		$('#page-loader').hide();
	}, 0);
});

$(document).ready(function(){


	$('.spincrement').spincrement({
		from: 0,
		to: false,
		decimalPlaces: 2,
		decimalPoint: '.',
		thousandSeparator: ',',
		duration: 1000, // ms; TOTAL length animation
		leeway: 50, // percent of duraion
		easing: 'spincrementEasing',
		fade: true
	});

    // ACCOUNT ACTIVATION STEPS UPLOAD MODAL
    $('.account-status .activation-steps .modal-trigger, .pending-docs .modal-trigger').leanModal();

    // ACCOUNT MAIN PAGE DEPOSIT MODAL
    $('.account-status .investment-pending .modal-trigger').leanModal({
        complete: function() {
            $('.deposit-form')[0].reset(); 
        }
    });

    // ACCOUNT MESSAGES NEW MESSAGE MODAL
    $('.messages .modal-trigger').leanModal({
        complete: function() {
            $('#message_form')[0].reset();
        }
    });

    // ACCOUNT - UPLOAD AVATAR
     $('#edit-profile .modal-trigger').leanModal({
        complete: function() {
            $('#avatar_form')[0].reset();
        }
    });

     // ACTIVATE EDIT PROFILE TAB NAVIGATION
     $('.profile_tabs').tabs();


	// ACCOUNT SEND DEPOSIT
    
    $('.deposit-form').on('submit', function(e){

        e.preventDefault();

        var id = $(this).attr('id');
        var action = $(this).attr('action');

        $.ajax(action, {
            type: 'POST',
            data: new FormData($('#'+id)[0]),
            contentType: false,
        	processData: false,
            beforeSend: function(){
            	$('#'+id).find('.errors').html('').hide();
            	$('.deposit-form .inputs').css({'opacity' : '.6', 'cursor' : 'context-menu'});
                $('.deposit-form button[type="submit"]').addClass('disabled').attr('disabled', true);
                $('.deposit-form .ajaxLoader').show();
            },
            error: function(request){
            	var obj = request['responseJSON'];
            	$.each(obj, function(key, value) {
				   var p = $('<p><i class="material-icons left">error</i>'+value+'</p>');
					$('#'+id).find('.errors').append(p);
				});
				$('#'+id).find('.errors').show();
            },
            success: function(response){
            	if(response == 'true'){
            		$('#'+id+'-modal').closeModal();
            		$('#'+id+'-confirmation').openModal();
            	}
            },
            complete: function(){
            	$('.deposit-form .inputs').attr("style","");  
                $('.deposit-form button[type="submit"]').removeClass('disabled').removeAttr('disabled');
                $('.deposit-form .ajaxLoader').hide();
            },
            timeout: 5000
        });
    });

    // MI CUENTA . NOVEDADES TOGGLE NEWS
    $('.body .more').on('click', function(e){
        e.preventDefault();
        var target = $(this).data('target');
        $(target).slideToggle();
    });

    // MI CUENTA - SELECCIONAR MENSAJE
    
    $('.inbox-list input[type="checkbox"]').on('change', function(){

        var checkboxes = $('.inbox-list input[type="checkbox"]:checked');
        var reply_btn = $('.btn-actions').find('.reply-btn');
        var delete_btn = $('.btn-actions').find('.delete-btn');

        if($(this).is(":checked")){

            $(this).parent().parent().addClass('selected');
            if($(this).data('reply') == '1'){
                reply_btn.removeAttr('disabled').removeClass('disabled');
                reply_btn.html('Responder');
            }else{
                reply_btn.html('Cerrado');
            }
            delete_btn.removeAttr('disabled').removeClass('disabled');

            if(checkboxes.length > 1){
                reply_btn.attr('disabled', true).addClass('disabled');
            }

        }else{

            $(this).parent().parent().removeClass('selected');

            if(checkboxes.length == 0){
                reply_btn.attr('disabled', true).addClass('disabled');
                delete_btn.attr('disabled', true).addClass('disabled');
                reply_btn.html('Responder');
            }
            
            if(checkboxes.length == 1){
                var checkbox = $('.inbox-list input[type="checkbox"]:checked');
                if(checkbox.data('reply') == 0){
                    //alert(checkbox.data('reply'));
                    reply_btn.attr('disabled', true).addClass('disabled');
                    reply_btn.html('Cerrado');
                }else{
                    reply_btn.removeAttr('disabled').removeClass('disabled');
                    reply_btn.html('Responder');
                }
            }

        }
    });
    
    // MESSAGES ROW LINK TO MESSAGE
    
    $(".inbox-list table").on('click', '.linked', function() {
        window.document.location = $(this).parent().data("href");
    });

    // ACCOUNT SEND MESSAGE
    
    $('#message_form').on('submit', function(e){

        e.preventDefault();

        var action = $(this).attr('action');

        $.ajax(action, {
            type: 'POST',
            data: $('#message_form').serialize(),
            beforeSend: function(){
                $('#message_form').find('.errors').html('').hide();
                $('#message_form .input-field').css({'opacity' : '.6', 'cursor' : 'context-menu'});
                $('#message_form button[type="submit"]').addClass('disabled').attr('disabled', true);
                $('#message_form .ajaxLoader').show();
            },
            error: function(request){
                var obj = request['responseJSON'];
                $.each(obj, function(key, value) {
                   var p = $('<p><i class="material-icons left">error</i>'+value+'</p>');
                    $('#message_form').find('.errors').append(p);
                    $('#'+key).removeClass('valid').addClass('invalid');
                });
                $('#message_form').find('.errors').show();
            },
            success: function(response){
                if(response == 'true'){
                    $('#message_modal').closeModal();
                    $('#message_form').find('.reply_info').html('').hide();
                    $('#message-confirmation').openModal();
                }
            },
            complete: function(){
                $('#message_form .input-field').attr("style","");  
                $('#message_form button[type="submit"]').removeClass('disabled').removeAttr('disabled');
                $('#message_form .ajaxLoader').hide();
            },
            timeout: 5000
        });
    });

    $('.delete-btn').on('click', function(e){
        e.preventDefault();

       var checkboxes = $('.inbox-list input[type="checkbox"]:checked');
       var values = [];
       for(var i = 0; i < checkboxes.length; i++){
           var hidden = $('<input type="hidden" name="checkbox[]" value="'+checkboxes[i].value+'"></input>');
           $('#delete_modal').find('.input-hidden').append(hidden);
       }

        $('#delete_modal').openModal();

    });

    // DELETE MESSAGE MI CUENTA ON VIEW MESSAGE PAGE
    $('.view-delete-btn').on('click', function(e){
        e.preventDefault();

       var hidden = $('<input type="hidden" name="checkbox[]" value="'+$(this).data('message_id')+'"></input>');
       $('#delete_modal').find('.input-hidden').append(hidden);

        $('#delete_modal').openModal();

    });

    // REPLY MESSAGE MI CUENTA
    $('.reply-btn').on('click', function(e){

        e.preventDefault();

        var checkbox = $('.inbox-list input[type="checkbox"]:checked');
        var reply_id = checkbox.data('sender');
        var operator_id = checkbox.data('operator');
        var reply = checkbox.parent().parent().find('.from').text();
        var to = $('<div class="col s12"><input type="hidden" name="reply_id" value="'+reply_id+'"/><input type="hidden" name="replied_to" value="'+checkbox.val()+'"/><input type="hidden" name="operator_id" value="'+operator_id+'"/><p>Para: <span>'+reply+'</span></p></div>');
        $('#message_modal').find('.reply_info').append(to);
        $('#message_modal').find('.reply_info').show();
        $('#message_form').find('button[type="submit"]').html('<i class="material-icons right">send</i>Responder');

        var subject = checkbox.parent().parent().find('.subject').text();
        $('#message_modal').find('#subject').val(subject).attr('readonly', true).addClass('disabled').next().addClass('active');

        $('#message_modal').openModal({
            complete: function() {
                $('#message_form')[0].reset();
                $('#message_form').find('label').removeClass('active');
                $('#message_form').find('#subject').removeAttr('readonly');
                $('#message_form').find('.reply_info').html('').hide();
                $('#message_form').find('button[type="submit"]').html('<i class="material-icons right">send</i>Enviar');
            }
        });
    });

    // REPLY MESSAGE ON VIEW MESSAGE PAGE // MI CUENTA
    $('.view-reply-btn').on('click', function(e){

        e.preventDefault();

        var reply_id = $(this).data('reply_id');
        var operator_id = $(this).data('operator_id');
        var replied_to = $(this).data('replied_to');
        var reply = $('#sender').html();
        var to = $('<div class="col s12"><input type="hidden" name="reply_id" value="'+reply_id+'"/><input type="hidden" name="replied_to" value="'+replied_to+'"/><input type="hidden" name="operator_id" value="'+operator_id+'"/><p>Para: <span>'+reply+'</span></p></div>');
        $('#message_modal').find('.reply_info').append(to);
        $('#message_modal').find('.reply_info').show();
        $('#message_form').find('button[type="submit"]').html('<i class="material-icons right">send</i>Responder');

        var subject = $('.subject').text();
        $('#message_modal').find('#subject').val(subject).attr('readonly', true).addClass('disabled').next().addClass('active');

        $('#message_modal').openModal({
            complete: function() {
                $('#message_form')[0].reset();
                $('#message_form').find('label').removeClass('active');
                $('#message_form').find('#subject').removeAttr('readonly');
                $('#message_form').find('.reply_info').html('').hide();
                $('#message_form').find('button[type="submit"]').html('<i class="material-icons right">send</i>Enviar');
            }
        });
    });

    // ACCOUNT UPLOAD AVATAR PROFILE PICTURE - MI CUENTA
    
    $('#avatar_form').on('submit', function(e){

        e.preventDefault();

        var action = $(this).attr('action');

        $.ajax(action, {
            type: 'POST',
            data: new FormData($('#avatar_form')[0]),
            contentType: false,
            processData: false,
            beforeSend: function(){
                $('#avatar_form').find('.errors').html('').hide();
                $('#avatar_form .inputs').css({'opacity' : '.6', 'cursor' : 'context-menu'});
                $('#avatar_form button[type="submit"]').addClass('disabled').attr('disabled', true);
                $('#avatar_form .ajaxLoader').show();
            },
            error: function(request){
                var obj = request['responseJSON'];
                $.each(obj, function(key, value) {
                   var p = $('<p><i class="material-icons left">error</i>'+value+'</p>');
                    $('#avatar_form').find('.errors').append(p);
                });
                $('#avatar_form').find('.errors').show();
            },
            success: function(response){
                if(response == 'true'){
                    $('#upload-avatar').closeModal();
                    $('#upload_success').openModal({
                        complete: function(){
                            $('#page-loader').show();
                            window.location.reload();
                        }
                    });
                }else{
                    alert('Hubo un problema con el servidor. Inténtelo más tarde.');
                }
            },
            complete: function(){
                $('#avatar_form .inputs').attr("style","");  
                $('#avatar_form button[type="submit"]').removeClass('disabled').removeAttr('disabled');
                $('#avatar_form .ajaxLoader').hide();
            },
            timeout: 5000
        });
    });

    
    var opts = {
      lines: 14 // The number of lines to draw
    , length: 30 // The length of each line
    , width: 8 // The line thickness
    , radius: 27 // The radius of the inner circle
    , scale: 0.55 // Scales overall size of the spinner
    , corners: 2 // Corner roundness (0..1)
    , color: '#fff' // #rgb or #rrggbb or array of colors
    , opacity: 0.25 // Opacity of the lines
    , rotate: 0 // The rotation offset
    , direction: 1 // 1: clockwise, -1: counterclockwise
    , speed: 1.3 // Rounds per second
    , trail: 60 // Afterglow percentage
    , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
    , zIndex: 2e9 // The z-index (defaults to 2000000000)
    , className: 'spinner' // The CSS class to assign to the spinner
    , top: '50%' // Top position relative to parent
    , left: '50%' // Left position relative to parent
    , shadow: false // Whether to render a shadow
    , hwaccel: false // Whether to use hardware acceleration
    , position: 'absolute' // Element positioning
    }
    var target = document.getElementById('account-loader')
    var spinner = new Spinner(opts).spin(target);

    $('.edit-profile-form').on('submit', function(){
        $(this).find('button[type="submit"]').addClass('disabled');
        $('#account-loader').show();
    });


    // ACCOUNT CHANGE EMAIL
    
    $('#change_email').on('submit', function(e){

        e.preventDefault();

        var action = $(this).attr('action');

        $.ajax(action, {
            type: 'POST',
            data: $('#change_email').serialize(),
            beforeSend: function(){
                $('#change_email').find('.errors').html('').hide();
                $('#message_form .input').css({'opacity' : '.6', 'cursor' : 'context-menu'});
                $('#change_email button[type="submit"]').addClass('disabled').attr('disabled', true);
                $('#change_email .ajaxLoader').show();
            },
            error: function(request){
                var obj = request['responseJSON'];
                $.each(obj, function(key, value) {
                   var p = $('<p><i class="material-icons left">error</i>'+value+'</p>');
                    $('#change_email').find('.errors').append(p);
                    $('#'+key).removeClass('valid').addClass('invalid');
                });
                $('#change_email').find('.errors').show();
            },
            success: function(response){
                if(response == 'true'){
                    var i = $('<i class="fa fa-warning tooltipped" data-position="top" data-delay="0" data-tooltip="Pendiente de validación."></i>');
                    $('#change_email').find('.new-email-field i').removeClass('active').addClass('active');
                    $('#email-confirmation').openModal();
                }
            },
            complete: function(){ 
                $('#change_email button[type="submit"]').removeClass('disabled').removeAttr('disabled');
                $('#change_email .ajaxLoader').hide();
            },
            timeout: 10000
        });
    });

    // ACCOUNT CHANGE NOTIFICATIONS
    
    $('#change_notifications').on('submit', function(e){

        e.preventDefault();

        var action = $(this).attr('action');

        $.ajax(action, {
            type: 'POST',
            data: $('#change_notifications').serialize(),
            beforeSend: function(){
                $('#change_notifications').find('.errors').html('').hide();
                $('#message_form .input').css({'opacity' : '.6', 'cursor' : 'context-menu'});
                $('#change_notifications button[type="submit"]').addClass('disabled').attr('disabled', true);
                $('#change_notifications .ajaxLoader').show();
            },
            error: function(request){
                var obj = request['responseJSON'];
                $.each(obj, function(key, value) {
                   var p = $('<p><i class="material-icons left">error</i>'+value+'</p>');
                    $('#change_notifications').find('.errors').append(p);
                    $('#'+key).removeClass('valid').addClass('invalid');
                });
                $('#change_notifications').find('.errors').show();
            },
            success: function(response){
                if(response == 'true'){
                    $('#notifications-confirmation').openModal();
                }
            },
            complete: function(){ 
                $('#change_notifications button[type="submit"]').removeClass('disabled').removeAttr('disabled');
                $('#change_notifications .ajaxLoader').hide();
            },
            timeout: 10000
        });
    });

    // AJAX GENERATE CUAC
            
    $('#cuac_active').on('change', function(e){

        e.preventDefault();

        var action = $('#generate_cuac').attr('action');

        $.ajax(action, {
            type: 'POST',
            data: $('#generate_cuac').serialize(),
            beforeSend: function(){
                $('#generate_cuac #code').hide();
                $('#generate_cuac .ajaxLoader').show();
            },
            error: function(request){
                alert('Hubo un error al procesar su solicitud. Por favor intentá nuevamente después de actualizar la página.')
            },
            success: function(response){
                if(response == 'removed'){
                    $('#generate_cuac #code').remove();
                }else{
                    $('#generate_cuac #code').remove();
                    if(response[0] == 1){
                        var code = $('<div id="code"><div id="code-number"><i class="material-icons">vpn_key</i>'+response[1]+'</div><span id="code-status" class="on-use wow fadeInRight" data-wow-duration="0.3s" data-wow-delay="0"><i class="fa fa-check"></i>En uso por al menos un vendedor.</span><div class="clearfix"></div></div>');
                    }else{
                        var code = $('<div id="code"><div id="code-number"><i class="material-icons">vpn_key</i>'+response[1]+'</div><span id="code-status" class="waiting wow fadeInRight" data-wow-duration="0.3s" data-wow-delay="0"><i class="fa fa-warning"></i>No hay vendedores asociados con esta clave.</span><div class="clearfix"></div></div>');
                    }
                    $('#generate_cuac').find('.switch').append(code);
                }
            },
            complete: function(){
                $('#generate_cuac .ajaxLoader').hide();
            },
            timeout: 10000
        });
    });

    // ACCOUNT PROFILE CHANGE PASSWORD
    
    $('#change_password').on('submit', function(e){

        e.preventDefault();

        var action = $(this).attr('action');

        $.ajax(action, {
            type: 'POST',
            data: $('#change_password').serialize(),
            beforeSend: function(){
                $('#change_password').find('.errors').html('').hide();
                $('#change_password button[type="submit"]').addClass('disabled').attr('disabled', true);
                $('#change_password .ajaxLoader').show();
            },
            error: function(request){
                var obj = request['responseJSON'];
                $.each(obj, function(key, value) {
                   var p = $('<p><i class="material-icons left">error</i>'+value+'</p>');
                    $('#change_password').find('.errors').append(p);
                    $('#'+key).removeClass('valid').addClass('invalid');
                });
                $('#change_password').find('.errors').show();
            },
            success: function(response){
                if(response == 'true'){
                    $('#password-confirmation').openModal();
                }
            },
            complete: function(){ 
                $('#change_password button[type="submit"]').removeClass('disabled').removeAttr('disabled');
                $('#change_password .ajaxLoader').hide();
                $('#change_password')[0].reset();
            },
            timeout: 10000
        });
    });

    // ACCOUNT PROFILE CHANGE PASSWORD
    
    $('.payment_method').on('submit', function(e){

        e.preventDefault();

        var action = $(this).attr('action');
        var form = $(this);

        $.ajax(action, {
            type: 'POST',
            data: form.serialize(),
            beforeSend: function(){
                form.find('.errors').html('').hide();
                form.find('button[type="submit"]').addClass('disabled').attr('disabled', true);
                form.find('.ajaxLoader').show();
            },
            error: function(request){
                var obj = request['responseJSON'];
                $.each(obj, function(key, value) {
                   var p = $('<p><i class="material-icons left">error</i>'+value+'</p>');
                    form.find('.errors').append(p);
                    $('#'+key).removeClass('valid').addClass('invalid');
                });
                form.find('.errors').show();
            },
            success: function(response){
                form.parent().parent().parent().parent().parent().parent().find('.confirm_payment_step').removeClass('inactive');
                form.parent().hide();
                form.parent().parent().find('.method-box-'+response).show();
                form.parent().parent().parent().parent().parent().parent().find('.investment_step_3').removeClass('locked-header');
            },
            complete: function(){ 
                form.find('button[type="submit"]').removeClass('disabled').removeAttr('disabled');
                form.find('.ajaxLoader').hide();
            },
            timeout: 10000
        });
    });

    $('.change_payment_method').on('click', function(e){
        e.preventDefault();
        $(this).parent().parent().hide();
        $(this).parent().parent().parent().find('.select-box').show();
    });


});