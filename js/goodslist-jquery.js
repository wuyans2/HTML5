$(function() {
	$('header').load("commonHtml/header.html");
	$('footer').load("commonHtml/footer.html");

	$('body').on('click', '#back', function() {
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 500);
		return false;
	});

	$('.flip').click(function() {
		var a = $('.flip').index(this);
		$('.flip').eq(a).css({
			'color': '#ec3e7d',
			'border-color': '#ec3e7d'
		})
		$('.flip').each(function(index, element) {
			if(index != a) {
				$('.flip').eq(index).css({
					'color': '#666666',
					'border-color': '#dddddd'
				})
			}
		})
	})

	var str = '';
	$.each(goodslistdata, function(index, data) {
		var a = index + 1;
		var b = 'mgrr'
		if(a % 4 == 0) {
			var b = ' mgrr';
		} else {
			var b = '';
		}
		str = `<div class="rouge ${b}">
						<div class="country">
							<div class="coun-pic"><img src="${data.src}" /> </div>
							<span>欧美品牌</span>
						</div>
						<a href="detail.html"><img src="${data.img}" /></a>
						<div class="sold-price">
							<span class="n-pri">${data.npri}</span>
							<span class="o-pri">${data.opri}</span>
							<span class="count r">${data.count}</span>
						</div>
						<div class="decora">
							<p><span class="b"><b>${data.b}</b></span><span class="bra"><b>宝柏</b></span></p>
							<p class="limitnum"><span>${data.limitnum}</span></p>
							<p class="color"><span>${data.weig}</span><span>&nbsp;&nbsp;${data.color}</span> </p>
						</div>
						<div class="son">
							<div class="buy-now">
								<span>加入购物车</span>
							</div>
							</div>
					</div>`;

		$('#goods').append(str);
	})
})