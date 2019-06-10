$(function() {
	//注册的表单验证
	$('.inptx').blur(function() {
		//获得索引值
		var index = $('.inptx').index(this);
		//获得每个框的值
		var value = $('.inptx').eq(index).val();
		var reg;
		switch(index) {
			case 0:
				reg = /(^1\d{10}$)|(^\w{1,11}@\w{2,4}.com$)/;
				break;
			case 1:
				reg = /^\w{6,16}$/;
				break;
			case 2:	
				//验证确认密码的时候是否跟上面输入的密码一致
				var q = index - 1;
				var pwdvalue =$('.inptx').eq(q).val(); 
				if(value==pwdvalue){
					$('.inptp').eq(index).css('color', 'white');
				}else{
					$('.inptp').eq(index).css('color', 'red');
				}
//				reg = /^\w{6,16}$/;
				break;
			case 3:
				reg = /^\w{4}$/;
				break;
		}
		checked(reg, value, index);

	});
		
	//登录的表单验证
	$('.loinptx').blur(function() {
		//获得索引值
		var index = $('.loinptx').index(this);
		//获得每个框的值
		var value = $('.loinptx').eq(index).val();
		var reg;
		switch(index) {
			case 0:
				reg = /(^1\d{10}$)|(^\w{1,11}@\w{2,4}.com$)/;
				break;
			case 1:
				reg = /^\w{6,16}$/;
				break;
			case 2:
				reg = /^\w{4}$/;
				break;
		}
		checked(reg, value, index);

	});
	
	//表单验证之后的提示与否
	function checked(reg, value, index) {
		var resulet = reg.test(value);
		if(resulet == false) {
			$('.inptp').eq(index).css('color', 'red');
		} else {
			$('.inptp').eq(index).css('color', 'white');
		}
	}

	//在点击注册的时候进行判断协议是否打钩，以及复选框也要自己判断是否打钩，给出提示
	function regcheck(btn){
		$(btn).click(function() {
			var m = $('#check').prop('checked');
			if(m) {
				$('#check-test').css('color', 'white');
			} else {
				$('#check-test').css('color', 'red');
			}
		})
	}
	regcheck('#reg-btn');
	regcheck('#check');
	
	//焦点的获取和失去，输入框阴影的变化
	function focusblur(inp){
		$(inp).focus(function() {
			var index = $(inp).index(this);
			$(inp).eq(index).css('box-shadow', '0px 0px 3px #ec3e7d')
		}).blur(function() {
			var index = $(inp).index(this);
			$(inp).eq(index).css('box-shadow', '')
		})
	}
	focusblur('.loinptx');
	focusblur('.inptx');
	
})