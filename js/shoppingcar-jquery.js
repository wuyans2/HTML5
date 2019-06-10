$(function() {
	$('body').on('click', '#back', function() {
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 500);
		return false;
	});

	$('.btn').click(function() {
		var btnindex = $('.btn').index(this);
		$('.trfath').eq(btnindex).remove();
	})

	//选中上面的框的时候，全选下面的复选框并计算
	$('#all').click(function() {
		if($('#all').prop('checked')) {
			$('.check').prop('checked', true);
			var alltotal = 0;
			$.each($('.check'), function(index, element) {
				alltotal += Number($('.calculate').eq(index).html());
				$('.totalnum').html(alltotal);
			});
		} else {
			$('.check').prop('checked', false);
			$('.totalnum').html(0);
		}
	})

	//加减函数
	$('.add').click(function() {
		var a = $('.add').index(this)
		var addnum = $('.md').eq(a).html();
		var count = $('.oneprice').eq(a).html();
		addnum++;
		var addcount = count * addnum;
		$('.md').eq(a).html(addnum);
		$('.calculate').eq(a).html(addcount);
		$('.check').prop('checked', false)
		$('#all').prop('checked', false)
		$('.totalnum').html('0');
	})

	$('.sub').click(function() {
		var b = $('.sub').index(this)
		var subnum = $('.md').eq(b).html();
		var count2 = $('.oneprice').eq(b).html();
		//		console.log(subnum)
		subnum--;
		if(subnum <= 1) {
			subnum = 1;
		}
		var subcount = count2 * subnum;
		$('.md').eq(b).html(subnum);
		$('.calculate').eq(b).html(subcount);
		$('.check').prop('checked', false)
		$('#all').prop('checked', false)
		$('.totalnum').html('0');
	})

	//点击复选框计算总值
	$('.check').click(function() {
		//获得当前多选框的索引值
		var checkindex = $('.check').index(this);
		//获得多选框对应的小计的值
		var total = Number($('.calculate').eq(checkindex).html());
		//判断当时多选框是否勾上
		if($('.check').eq(checkindex).prop('checked')) {
			//原来页面的总额
			var oldtotal = Number($('.totalnum').html());
			//用页面的值加上后来勾上的值
			var newtotal = oldtotal + total;
			//替换页面的值
			$('.totalnum').html(newtotal);
		} else {
			//重新获取当前页面的值
			var oldtotal2 = Number($('.totalnum').html());
			//页面的值减去从勾选到删除的那个值
			var newtotal2 = oldtotal2 - total;
			$('.totalnum').html(newtotal2);
		}
	})
})