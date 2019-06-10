$(function() {
	$('header').load("commonHtml/header.html");
	$('footer').load("commonHtml/footer.html");

	$('body').on('click', '#back', function() {
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 500);
		return false;
	});

	//点击选择口红的颜色，边框变色，图片切换
	$('.ri').click(function() {
		//获得按钮的索引值
		var b = $('.ri').index(this);
		$('.ri').eq(b).css('border', '1px solid #ec3e7d')
		//对按钮进行遍历
		$('.ri').each(function(index, element) {
			//如果选择不等于索引值
			if(index != b) {
				$('.ri').eq(index).css('border', '1px solid #f2f2f7')
				$('#Img img').eq(0).attr('src', 'img/detail/bpic1.jpg')
				$('#bb').attr('src', 'img/detail/bpic1.jpg')
				//转换下面列表的小图
				$('.spic').each(function(index, element) {
					var xt = index + 1;
					console.log(2)
					var bp2 = 'img/detail/spic' + xt + '.jpg';
					$('.spic img').eq(index).attr('src', bp2);
				})
				//调用点击小图切换大图函数
				changebigepic('bpic');
				//等于索引值	
			} else {
				$('#Img img').eq(0).attr('src', 'img/detail/bpic7.jpg')
				$('#bb').attr('src', 'img/detail/bpic7.jpg')
				//转换下面列表的小图
				$('.spic').each(function(index, element) {
					var change = index + 1;
					var bp1 = 'img/detail/changepic' + change + '.jpg';
					$('.spic img').eq(index).attr('src', bp1);
				})
				//调用点击小图切换大图函数
				changebigepic('changepic');
			}
		})

	})

	//小图点击大图切换
	changebigepic('bpic');

	function changebigepic(pic) {
		$('.spic').click(function() {
			var c = $('.spic').index(this);
			var b = c + 1;
			var bp = 'img/detail/' + pic + b + '.jpg';
			$('.bpic').attr('src', bp);
			$('#bb').attr('src', bp);
			$('.spic').eq(c).css('border', '1px solid hotpink')
			$('.spic').each(function(index, element) {
				if(index != c) {
					$('.spic').eq(index).css('border', '1px solid #dddddd')
				}
			})
		})
	}

	//大图下面的小图列表
	$('.zuo').click(function() {
		$('.pul').css('left', '0px');
	})
	$('.you').click(function() {
		$('.pul').css('left', '-65px');
	})

	//商品数量加减
	$('.add').click(function() {
		var num = $('.md').html();
		console.log(num)
		num++;
		$('.md').html(num);
	})

	$('.sub').click(function() {
		var num2 = $('.md').html();
		console.log(num2)
		num2--;
		if(num2 <= 1) {
			num2 = 1;
		}
		$('.md').html(num2);
	})
	//放大镜
	$('#Img').mousemove(function(event) {

		var nowleft = event.pageX - $('#Img').offset().left - 50 + 100;
		var nowtop = event.pageY - $('#Img').offset().top - 50;
		console.log(nowleft, nowtop);

		if(nowleft < 100) {
			nowleft = 100;
		}
		if(nowleft > 300) {
			nowleft = 300;
		}
		if(nowtop < 0) {
			nowtop = 0;
		}
		if(nowtop > 200) {
			nowtop = 200;
		}
		$('#square').css({
			'left': nowleft,
			'top': nowtop
		})
		$('#bb').css({
			'left': -nowleft * 3 + 300,
			'top': -nowtop * 3
		})

	});

	//吸顶效果
	$(document).scroll(function() {
		var top = $(document).scrollTop();
		if(top > 1140) {
			$('#product-tags').css('position', 'fixed');
			$('#product-tags').css('top', '0');
			$('#product-tags').css('box-shadow', '0px 3px 5px rgba(0,0,0,.2)');
		} else {
			$('#product-tags').css('position', 'static');
			$('#product-tags').css('box-shadow', '');
		}
	})

	//封装锚点函数
	var maodian = function(x) {
		$('body').on('click', x, function() {
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top
			}, 700);
			return false;
		});
	}
	maodian("#t1");
	maodian("#t2");
	maodian("#t3");

	//点击选择的时候下边框颜色变化
	$('.tags').click(function() {
		var liindex = $('.tags').index(this);
		$('.tags').eq(liindex).css('border-bottom', '4px solid #c69a62')
		$('.tags').each(function(index, element) {
			if(index != liindex) {
				$('.tags').eq(index).css('border-bottom', '0')
			}
		})
	})

})