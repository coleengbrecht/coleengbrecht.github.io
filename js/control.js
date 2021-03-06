
window.onload = function() {
	$('iframe').each(function(index,item) {
		if($(item).attr('src').match(/(https?:)?\/\/www\.youtube\.com/)) {
			var w=$(item).attr('width');
			var h=$(item).attr('height');
			var ar = h/w*100;
			ar=ar.toFixed(2);
			//Style iframe
			$(item).css('position','absolute');
			$(item).css('top','0');
			$(item).css('left','0');
			$(item).css('width','100%');
			$(item).css('height','100%');
			$(item).css('max-width',w+'px');
			$(item).css('max-height', h+'px');
			$(item).wrap('<div style="max-width:'+w+'px;margin:0 auto; padding:auto;" />');
			$(item).wrap('<div style="position: relative;padding-bottom: '+ar+'%; height: 0; overflow: hidden;" />');
		}
	});
}

show_page = function(page) {
	let links = document.getElementsByClassName("nav-link");
	let pages = document.getElementsByClassName("page");
	if (page < pages.length) {
		for (let i = 0; i < pages.length; ++i) {
			pages[i].style.display = "none";
			links[i].className = "nav-link ";
		}
		pages[page].style.display = "block";
		links[page].className += "active";
	}
}
