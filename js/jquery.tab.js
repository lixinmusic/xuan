/*
 * 1.请使用如下结构:
 * <div class="tab"id="shang">
		<ul class="title">
			<li class="active">1</li>
			<li>2</li>
			<li>3</li>
		</ul>
		<ul class="content">
			<li class="active">1</li>
			<li>2</li>
			<li>3</li>
		</ul>
	 </div>
	 2.配置项
	   2.1选项的css选择器  .title li
	   2.2内容的css选择器 .content li
	   2.3激活状态的类名   active
	   2.4一个回调函数      callback:$.noop
	 */
+function($){
		$.fn.tab=function(op){
	var option = { 
		title:'.title li',
	    content:'.content li',
	    active:'active',
	    callback:$.noop
	};
	$.extend(option,op);
		var titles=$(this).find(option.title);
		var contents=$(this).find(option.content);
		
		titles.on('click',function(){
	    var c=option.active;
		titles
		.removeClass(c);
		
		$(this)
		.addClass(c);
		contents
		.removeClass(c)
		.eq($(this).index())
		.addClass(c);
		//option.callback();
		option.callback($(this).index());
	})
    }
}(jQuery);
















