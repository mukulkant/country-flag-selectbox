	$(document).ready(function(){
		$('ul li').click(function(){
			$('#box').val($(this).text());
			$('ul').slideUp('400');
		});
	});

	$('#box').keyup(function () {
		$('ul').slideDown('400');
	var valThis = this.value.toLowerCase(),
    lenght  = this.value.length;

	    $('ul li').each(function () {
	    	var text  = $(this).text();
	    	    var classVal=$(this).find('span').attr('class');
	            textL = text.toLowerCase();
	            htmlR = '<b>' + text.substr(0, lenght) + '</b>' + text.substr(lenght) + '<span class="'+classVal+'"></span>';
	        (textL.indexOf(valThis) == 0) ? $(this).html(htmlR).show() : $(this).hide();
	    });
		   
	});