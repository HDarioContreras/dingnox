//Funciones en JQuery
$(function(){
    //Abrir menu movil
    $(document).ready(function() {
        $('.burger').on('click', function() {   
            $(this).hide();               
            $('.cross i').css('display','block');
            $('nav.navegacion-principal ul').show();
            $('nav.navegacion-principal ul ul').hide();            
        });
        $('.cross i').on('click', function() {     
            $(this).hide();    
            $('.burger').show();               
            $('nav.navegacion-principal ul').hide(); 
            $('nav.navegacion-principal ul ul').show();
        });
        $('nav.navegacion-principal ul li a').on('click', function() {                    
            $('.burger').show();            
            $('.cross i').hide();   
            $('nav.navegacion-principal ul').hide();                                     
        });
    });
   
    

    //Validar solo Letras
    $("#letras").keypress(function(e){
        key = e.keyCode || e.w;                
        tecla = String.fromCharCode(key).toLowerCase();
        letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
        especiales = "8-37-39-46";                    
        tecla_especial = false;
        for(var i in especiales){
            if(key == especiales[i]){
                tecla_especial = true;
                break;
            }
        } 
        if(letras.indexOf(tecla)==-1 && !tecla_especial){
            return false;
            }    
    });           

    $("#letras1").keypress(function(e){
        key = e.keyCode || e.w;                
        tecla = String.fromCharCode(key).toLowerCase();
        letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
        especiales = "8-37-39-46";                    
        tecla_especial = false;
        for(var i in especiales){
            if(key == especiales[i]){
                tecla_especial = true;
                break;
            }
        } 
        if(letras.indexOf(tecla)==-1 && !tecla_especial){
            return false;
            }    
    });

    $("#telefono").keypress(function(e){
        var key = window.event ? e.which : e.keyCode;
            if (key < 48 || key > 57) {
                e.preventDefault();
            }
    }); 

    $("#telefono1").keypress(function(e){
        var key = window.event ? e.which : e.keyCode;
            if (key < 48 || key > 57) {
                e.preventDefault();
            }
    }); 

    //Texto de validación de lo campos
    jQuery.extend(jQuery.validator.messages, {
        required: "Este campo es obligatorio.",
        remote: "Por favor arregla este campo.",
        email: "Por favor, introduce una dirección de correo electrónico válida.",
        url: "Por favor introduzca un URL válido.",
        date: "Por favor introduzca una fecha valida.",
        dateISO: "Por favor ingrese una fecha válida (ISO).",
        number: "Por favor ingrese un número valido.",
        digits: "Por favor ingrese solo dígitos.",
        creditcard: "Por favor, introduzca un número de tarjeta de crédito válida.",
        equalTo: "Por favor, introduzca el mismo valor de nuevo.",
        accept: "Por favor ingrese un valor con una extensión válida.",
        maxlength: jQuery.validator.format("Por favor, ingrese no más de {0} caracteres."),
        minlength: jQuery.validator.format("Por favor ingrese al menos {0} caracteres."),
        rangelength: jQuery.validator.format("Ingrese un valor entre {0} y {1} caracteres de largo."),
        range: jQuery.validator.format("Ingrese un valor entre {0} y {1}."),
        max: jQuery.validator.format("Ingrese un valor inferior o igual a {0}."),
        min: jQuery.validator.format("Ingrese un valor mayor o igual que {0}.")
    }); 
    //Validación de los campos del formulario 1
    $("#formulario1").validate({
        rules: {
            nombre: {required: true},                        
            documento: {required: true},
            mensaje: {required: true},            
            email: {required: true},
            telefono: {required: true},
        }
    });

    $("#formulario2").validate({
        rules: {
            nombre: {required: true},                                    
            mensaje: {required: true},            
            email: {required: true},
            telefono: {required: true},
        }
    });
    
    //Envio de correo 1         
    jQuery("#btn-enviar1").click(function(event){
        var recaptcha = grecaptcha.getResponse();
        if($("#formulario1").valid()){
            if(!recaptcha.length == 0){
                jQuery("#resultado1").html("");
                $("#btn-enviar1").prop('disabled',true);                
                var datos = jQuery('#formulario1').serialize();                      
                $.ajax({
                    type: 'POST',
                    url: 'enviar_formulario1.php',
                    data: datos,
                    beforeSend:function(msg){
                        jQuery("#resultado1").html("Procesando su solicitud");  
                    },
                    success: function(data){    
                        jQuery("#resultado1").html("Mensaje enviado con éxito");
                        $("#formulario1").trigger("reset"); setTimeout(function() {
                            location.reload('#contacto');
                            },3000);                                
                    },
                    error: function (xhr, ajaxOptions, thrownError){
                        return false;
                        jQuery("#resultado1").html("Error");
                        }
                });
            }
            else{
                jQuery("#resultado1").html("Por favor completa el captcha");
            }
        }        
        return false;
    });
    //Envio de correo 2   
    jQuery("#btn-enviar2").click(function(event){        
        if($("#formulario2").valid()){
            jQuery("#resultado2").html("");
                $("#btn-enviar2").prop('disabled',true);                
                var datos = jQuery('#formulario2').serialize();                      
                $.ajax({
                    type: 'POST',
                    url: 'enviar_formulario2.php',
                    data: datos,
                    beforeSend:function(msg1){
                        jQuery("#resultado2").html("Procesando su solicitud");  
                    },
                    success: function(data1){    
                        jQuery("#resultado2").html("Mensaje enviado con éxito");
                        $("#formulario2").trigger("reset"); setTimeout(function() {
                            location.reload('#contacto');
                            },3000);                                
                    },
                    error: function (xhr, ajaxOptions, thrownError){
                        return false;
                        jQuery("#resultado2").html("Error");
                        }
                });            
        }        
        return false;
    });  
    var lastPositionScrollTop = 0; 
    $(window).scroll(function () {
        var position = $(this).scrollTop();
        if (position > lastPositionScrollTop){
            $(".top-header").hide();
            $(".separador-header-body").css( { height : "60px"} );
        } 
        else if(position < 10){
            $(".top-header").show();
            $(".separador-header-body").css( { height : "220px"} );
        }
        lastPositionScrollTop = position;
    });

    jQuery(".desparecer").click(function(event){
        //alert($(window).scrollTop() + " px");
        //$(".separador-header-body").hide();
        //$(".separador-header-body").css( { height : "400px"} );
    });
	
	/*LDC832*/
	$(document).ready(function(){
		$(".btn-menu").click(function(e){
				e.preventDefault();
				var filtro = $(this).attr("data-filter");
				if (filtro == "todos"){
					$(".box-img").show(500);	
				}else{
					$(".box-img").not("."+filtro).hide(500);
					$(".box-img").filter("."+filtro).show(500);
				}
	 	});
		
		$("ul li").click(function(){
		 	$(this).addClass("active").siblings().removeClass("active");
		});
		
	});
	
	$(document).ready(function(){
		$(".box-img").click(function(e){
			var img =e.target.src;
			var img2 =e.currentTarget.name;
			var img3=e.currentTarget.alt;
			var descripcion=e.currentTarget.id;
	
	
	
		$("#slide_img1").attr("src",img);
		$("#slide_img2").attr("src",img2);
		$("#slide_img3").attr("src",img3);
			
		
		$("#descripcion_slide").append(descripcion);
		 $("#modal").css("display","block"); 
			
			
		$('#modal_boton').click(function(){
			$("#modal").css("display","none");
			$("#descripcion_slide").empty();
			});

		
});
					
	});
	
	

	
}());

/*auto slide galeria*/
(function() {
	
	function Slideshow( element ) {
		this.el = document.querySelector( element );
		this.init();
	}
	
	Slideshow.prototype = {
		init: function() {
			this.wrapper = this.el.querySelector( ".slider-wrapper" );
			this.slides = this.el.querySelectorAll( ".slide" );
			this.previous = this.el.querySelector( ".slider-previous" );
			this.next = this.el.querySelector( ".slider-next" );
			this.index = 0;
			this.total = this.slides.length;
			this.timer = null;
			
			this.action();
			this.stopStart();	
		},
		_slideTo: function( slide ) {
			var currentSlide = this.slides[slide];
			currentSlide.style.opacity = 1;
			
			for( var i = 0; i < this.slides.length; i++ ) {
				var slide = this.slides[i];
				if( slide !== currentSlide ) {
					slide.style.opacity = 0;
				}
			}
		},
		action: function() {
			var self = this;
			self.timer = setInterval(function() {
				self.index++;
				if( self.index == self.slides.length ) {
					self.index = 0;
				}
				self._slideTo( self.index );
				
			}, 3000);
		},
		stopStart: function() {
			var self = this;
			self.el.addEventListener( "mouseover", function() {
				clearInterval( self.timer );
				self.timer = null;
				
			}, false);
			self.el.addEventListener( "mouseout", function() {
				self.action();
				
			}, false);
		}
		
		
	};
	
	document.addEventListener( "DOMContentLoaded", function() {
		
		var slider = new Slideshow( "#main-slider" );
		
	});
	
	
})();

//Header dinámico
/*
$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $('header').addClass('header2');
        } else {
            $('header').removeClass('header2');
        }
    });

});
*/

//galeria de imagenes para proyectos especificos

