$(function() {
	//滑动回顶部      
	$('#back').click(function() {
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 500);
		return false;
	});

	//大图轮播
	slider();
	//一进来就应该是下面第一个小按钮发亮
	$('.picBtn').eq(0).css('background-color', '#fa3778');
	function slider() {
		function changePic(index) {
			for(var j = 0; j < $('.bigPic').length; j++) {
				$('.bigPic').eq(j).css('opacity', '0');
				if(j == index) {
					$('.bigPic').eq(index).css('opacity', '1');
				}
			}
			for(var a = 0; a < $('.bigPic').length; a++) {
				if(a == index) {
					$('.picBtn').eq(a).css('background-color', '#fa3778');
				} else {
					$('.picBtn').eq(a).css('background-color', '');
				}
			}
		}

		function inter() {
			timer = setInterval(function() {
				iNow++;
				if(iNow > 3) {
					iNow = 0;
				}
				changePic(iNow);
			}, 2000);
		}

		//点击事件
		function bind(index) {
			$('.picBtn').eq(index).click(function() {
				clearInterval(timer);
				iNow = index;
				changePic(index);
				inter();
				for(var m = 0; m < $('.picBtn').length; m++) {
					if(m == index) {
						$('.picBtn').eq(m).css('background-color', '#fa3778');
					} else {
						$('.picBtn').eq(m).css('background-color', '');
					}
				}
			})
		}

		inter();
		var timer;
		var iNow = 0;
		for(var i = 0; i < $('.picBtn').length; i++) {
			bind(i);
		}
		//当hover上去的时候清除轮播，移开鼠标之后恢复轮播
		$(".bigPic").hover(function(){
			console.log('aaa')
	        clearInterval(timer);
 	    },slider);
	}

	//锚点导航栏出现的位置
	$(document).scroll(function() {
		var scroll_top = $(document).scrollTop();
		console.log(scroll_top)
		//获取到限时特卖的高度
		//出现的距离范围
		if(scroll_top >= 800 && scroll_top <= 8500) {
			$("#sidenav").css("display", "block");
		} else {
			$("#sidenav").css("display", "none");
		}
	});

	//随着页面的滑动导航锚点进行跟随切换
	//锚点导航栏
	var nav = $("#sidenav");
	//要找的分类，比如每日必看，限时特卖
	var mainPage = $(".find");
	//定义一个数组，用于存放分类的top值
	var mainTopArr = new Array();

	//将每个分类的top值放入数组中
	for(var i = 0; i < mainPage.length; i++) {
		var top = mainPage.eq(i).offset().top;
		mainTopArr.push(top);
	}
	//鼠标滑动事件
	$(window).scroll(function() {
		var scrollTop = $(this).scrollTop();
		var k;
		for(var i = 0; i < mainTopArr.length; i++) {
			//判断鼠标滑动的值是否到了我们的分类，进行循环，是为了判断每一个
			if(scrollTop >= mainTopArr[i]) {
				k = i;
			}
		}
		//k = i相等了，那就切换背景色
		nav.find("li").eq(k).addClass("active").siblings().removeClass("active");
	});

	//锚点定位的时候不是瞬间跳转，而是进行滑动
	var maodian1 = function(x) {
		$('body').on('click', x, function() {
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top
			}, 400);
			return false;
		});
	}
	maodian1("#floor_0");
	maodian1("#floor_1");
	maodian1("#floor_2");
	maodian1("#floor_3");

	//公告的水平轮播	  修改
	var num=0;
    setInterval(function(){
    	num++;
    	if(num>4){
    		num=0;
    		$('#ulbox').css({'top':-28*num+'px'});
    		num=1;
    	}
    	$('#ulbox').animate({'top':-28*num+'px'})
    },2000)
    
    
	//每日必看的动态创建
	var everyday = '';
	$.each(everydaydate, function(index, data) {
		var b = index + 1;
		var ff = 'l';
		if(b % 2 == 0) {
			ff = 'l'
		} else {
			ff = 'r'
		}
		everyday = `<a href="#">
						<div class="check-goods ${ff}">
								<img src="${data.src}"/>
								<div class="check-goods-info">
									<p class="check-info-title">${data.title}</p>
									<p class="check-festival">${data.festival}</p>
									<p class="check-date">${data.checkdate}</p>
									<span class="check-buynow">立即疯抢</span>
								</div>	
							</div>
					</a>	
							`;
		$('#must-check-body').append(everyday);
	})

	//限时特卖动态创建
	var limited = '';
	$.each(limiteddate, function(index, data) {
		limited = `<a href="#">
						<div class="limited-goods">
									<div class="limited-goods-img">
										<img src="${data.src}" />
										<i class="limited-count">
											<span class="italic">${data.italic}</span> 折
										</i>
									</div>
									<div class="limited-goods-info">
										<div class="limted-countdown">
											剩余<span class="hour">11</span>:
											<span class="min">59</span>:
											<span class="sec">59</span>
										</div>
										<div class="limted-detail">
											<div class="limited-goods-text">
												<i>"</i>
												${data.text}
											</div>
											<div class="limited-goods-introduce">
												<b>${data.intrb}</b>
												${data.intr}             
											</div>
											<div class="limited-goods-price">
												<div class="limited-goods-newprice">
													<span class="yuan">￥</span>
													<span class="num">${data.num}</span>
												</div>
												<div class="limited-goods-oldprice">
													<span>${data.oldprice}</span>
												</div>
											</div>
										</div>
										<div class="limted-btn">
											<span class="sold">${data.sold}</span>
											<span class="limted-buynow">马上抢</span>
										</div>
									</div>
								</div>
						</a>`;
		$('#limited-offer-body').append(limited);
	})

	//倒计时
	daojishi();

	function daojishi() {
		var tmin = $('.min').eq(0).html();
		var tsec = $('.sec').eq(0).html();
		var thour = $('.hour').eq(0).html();
		//定时器以毫秒为单位1s = 1000ms

		var timer1 = setInterval(function() {
			tsec--;
			$('.sec').eq(0).html(tsec);
			if(tsec < 0) {
				tsec = 59;
			}
			if(tsec < 10) {
				$('.sec').eq(0).html('0' + tsec);
				tsec = $('.sec').eq(0).html();
			} else {
				$('.sec').eq(0).html(tsec);
			}

			for(var d = 0; d < 10; d++) {
				$('.sec').eq(d).html(tsec);
			}
		}, 1000)

		var timer2 = setInterval(function() {
			tmin--;
			$('.min').eq(0).html(tmin);
			if(tmin < 0) {
				//停止定时器
				tmin = 59;
			}
			if(tmin < 10) {
				$('.min').eq(0).html('0' + tmin);
				tmin = $('.min').eq(0).html();
			} else {
				$('.min').eq(0).html(tmin);
			}
			for(var f = 0; f < 10; f++) {
				$('.min').eq(f).html(tmin);
			}
		}, 60000)
		var timer3 = setInterval(function() {
			thour--;
			$('.hour').eq(0).html(thour);
			if(thour < 0) {
				//停止定时器
				clearInterval(timer);
			}
			if(thour < 10) {
				$('.hour').eq(0).html('0' + thour);
				thour = $('.hour').eq(0).html();
			} else {
				$('.hour').eq(0).html(thour);
			}
			for(var g = 0; g < 10; g++) {
				$('.hour').eq(g).html(thour);
			}
		}, 3600000)

	}

	//护肤创建
	topitemcreate();

	function topitemcreate() {
		var top = '';
		$.each(topitemdata, function(index, data) {
			top = `
				<div class="column-item">
					<div class="top1"><img src="${data.img}"/></div>
					<a href="#"><img src="${data.src}"/></a>
					<div class="item-info">
						<div class="item-name">
							<a href="#">
								<b class="yellow">${data.color}</b>
								<span>${data.text}</span>
							</a>
						</div>
						<div class="item-price">
							<span class="top-newprice">${data.newprice}</span>
							<span class="top-oldprice">${data.oldprice}</span>
							<span class="top-soldnum">${data.soldnum}</span>
						</div>
					</div> 
				</div>`;
			$('.item-father').append(top);
		})
	}

	//新品动态创建
	newgoodscreate();

	function newgoodscreate() {
		var newg = '';
		$.each(newgoodsdata, function(index, data) {
			var rr;
			var now1 = index + 1;
			if(now1 % 4 == 0) {
				rr = ' rr'
			} else {
				rr = ''
			}
			newg = `<a href="#">
					<div class="new-goods ${rr}">
						<div class="new-goods-pic">
							<img src="${data.img}" />
							<div class="new-icon"><p>新品<br />上市</p></div>
							<div class="country">
								<div class="coun-pic"><img src="${data.coimg}" /></div>
								<span>${data.coun}</span>
							</div>
						</div>
						<div class="new-text">
							<b class="yellow">${data.yell} </b>
							${data.text}
						</div>
						<div class="new-goods-price">
							<span class="new-yuan">￥</span>
							<span class="new-newprice">${data.newpri}</span>
							<span class="top-oldprice">${data.oldpri}</span>
						</div>
					</div>
				</a> `;
			$('#new-goods-body').append(newg);
		})
	}

});