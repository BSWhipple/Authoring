$(document).ready( function() {
	var images = document.getElementsByClassName("port-image");
	$("img").click(function(e) {
		var image_src = $(this).attr("src");
		if ($('#lightbox').length > 0) { 
			$('#content').html('<img class="light-img" src="' + image_src + '" />');
			$('#lightbox').show();
		} else {  
			var lightbox = 
				'<div id="lightbox">' +
				'<div id="content">' + 
				'<img class="light-img" src="' + image_src +'" />' +
				'</div>' +	
				'</div>';
				$('body').append(lightbox);
}
	})
	$("body").on('click', "#lightbox", function() {
	$('#lightbox').hide();
	});
})