// JavaScript Document
function tagClose()
{
	//点击删除标签
	$(".inner-tag-close").click(function(){
		$(this).parent().remove();
	});
}
$(document).ready(function(){
	//var ue = UM.getEditor('post_content');					   
	//图片，视频，音乐
	var picture  = "<div class='edui-btn edui-btn-image' onmousedown='return false'>";
		picture += 		"<div class='edui-icon-image edui-icon'></div>";
		picture +=		"<div class='edui-tooltip' onmousedown='return false' style='z-index: 1000; display: none; top: 28px; left: -15px;'>";
		picture +=			"<div class='edui-tooltip-arrow' onmousedown='return false'></div>";
		picture +=			"<div class='edui-tooltip-inner' onmousedown='return false'>插入图片</div>";
		picture +=		"</div>";
		picture += "</div>";
	$(".edui-btn-toolbar").append(picture);
	$(".edui-btn-image").mouseenter(function(){
		$(this).addClass("hover");
		$(this).children(".edui-tooltip").show();
	});
	$(".edui-btn-image").mouseleave(function(){
		$(this).removeClass("hover");
		$(this).children(".edui-tooltip").hide();
	});
	var video  = "<div class='edui-btn edui-btn-insertvideo' onmousedown='return false'>";
		video += 	"<div class='edui-icon-insertvideo edui-icon'></div>";
		video += 	"<div class='edui-tooltip' onmousedown='return false' style='z-index: 1000; display: none; top: 28px; left: -15px;'>";
		video += 		"<div class='edui-tooltip-arrow' onmousedown='return false'></div>";
		video += 		"<div class='edui-tooltip-inner' onmousedown='return false'>插入视频</div>";
		video += 	"</div>";
		video += "</div>";
	$(".edui-btn-toolbar").append(video);
	$(".edui-btn-insertvideo").mouseenter(function(){
		$(this).addClass("hover");
		$(this).children(".edui-tooltip").show();
	});
	$(".edui-btn-insertvideo").mouseleave(function(){
		$(this).removeClass("hover");
		$(this).children(".edui-tooltip").hide();
	});
	var video  = "<div class='edui-btn edui-btn-insertmusic' onmousedown='return false'>";
		video += 	"<div class='edui-icon-insertmusic edui-icon'></div>";
		video += 	"<div class='edui-tooltip' onmousedown='return false' style='z-index: 1000; display: none; top: 28px; left: -15px;'>";
		video += 		"<div class='edui-tooltip-arrow' onmousedown='return false'></div>";
		video += 		"<div class='edui-tooltip-inner' onmousedown='return false'>插入音乐</div>";
		video += 	"</div>";
		video += "</div>";
	$(".edui-btn-toolbar").append(video);
	$(".edui-btn-insertmusic").mouseenter(function(){
		$(this).addClass("hover");
		$(this).children(".edui-tooltip").show();
	});
	$(".edui-btn-insertmusic").mouseleave(function(){
		$(this).removeClass("hover");
		$(this).children(".edui-tooltip").hide();
	});	
	
	$(".edui-toolbar").after("<div class='post-title'><input id='post_title' type='text' autocomplete='off' placeholder='在此键入标题' class='title-text'></div>");
	
	/*music*/
	$(".edui-btn-insertmusic").click(function(){
		showDialog(".music-dlg");
		$("#musiccode").focus();
	});
	$("#musiccode").keyup(function(){
		$(".musicpreview").html($.trim($("#musiccode").val()));								 
	});
	$(".insert-music").click(function(){
		if($.trim($("#musiccode").val())!="")
		{
			var code = "<p style='text-align:center'>"+ $.trim($("#musiccode").val()) +"</p>";
			ue.execCommand('insertHtml', code);
			$("#musiccode").val("");
			$(".musicpreview").html("");
			$(".closeicon").click();
		}
		else
		{
			ShowMessage("error","请粘贴音乐HTML代码");	
		}
	});
	/*video*/
	$(".edui-btn-insertvideo").click(function(){
		showDialog(".video-dlg");
		$("#videocode").focus();
	});
	$("#videocode").keyup(function(){
		//http://www.tudou.com/v/gZHQaE5-Rek/&resourceId=0_04_05_99/v.swf
		var code = "<embed src='" + $.trim($("#videocode").val()) + "' type='application/x-shockwave-flash' allowscriptaccess='always' allowfullscreen='true' wmode='opaque' width='522' height='320'></embed>";
		$(".videopreview").html(code);								 
	});
	$(".insert-video").click(function(){
		if($.trim($("#videocode").val())!="")
		{
			var code = "<p style='text-align:center'>" + "<embed src='" + $.trim($("#videocode").val()) + "' type='application/x-shockwave-flash' allowscriptaccess='always' allowfullscreen='true' wmode='opaque' width='100%' height='400'></embed>" +"</p>";
			ue.execCommand('insertHtml', code);
			$("#videocode").val("");
			$(".videopreview").html("");
			$(".closeicon").click();
		}
		else
		{
			ShowMessage("error","请粘贴播放器代码");	
		}
	});
	
	
	
	//class_box
	$(".class_box").click(function(){
		if($("#class_list").is(":hidden"))
			$("#class_list").show();
		else if($("#class_list").is(":visible"))
			$("#class_list").hide();
	  });
	$('body').click(function(evt) {
		if($(evt.target).parents(".class_box").length==0 && evt.target.id != "class_box") {
			$('#class_list').hide();
		}
	});
	$(".class_item").click(function(){
			$(".class_item").removeClass("selected");
			$("#post_class").attr("value",this.innerHTML);
			$(".class_current").html(this.innerHTML);
			$(this).addClass("selected");
	});
	//src_box
	$(".src_box").click(function(){
		if($("#src_list").is(":hidden"))
			$("#src_list").show();
		else if($("#src_list").is(":visible"))
			$("#src_list").hide();
	  });
	$('body').click(function(evt) {
		if($(evt.target).parents(".src_box").length==0 && evt.target.id != "src_box") {
			$('#src_list').hide();
		}
	});
	$(".src_item").click(function(){
		$(".src_item").removeClass("selected");
		$("#post_src").attr("value",this.innerHTML);
		$(".src_current").html(this.innerHTML);
		$(this).addClass("selected");
		if($(this).html()=="转载")
			$(".post-attr-src-input").show();
		else
			$(".post-attr-src-input").hide();	
	});	
	//tag
	$(".tag_box").click(function(){
		$(".tag_input").focus();
	});
	$(".tag_group_item").click(function(){
		var isaddTag = true;
		var tagNum = 0;
		var thisHtml = $(this).html();
		$(".inner-tag-name").each(function(){
			if($(this).html()==thisHtml)
				isaddTag = false;
			tagNum = tagNum + 1;	
		});
		if(!isaddTag)
		{
			ShowMessage("warning","已经有了这个标签");
		}
		else if(tagNum>9)
		{
			ShowMessage("warning","no more then 10 tags");
		}
		else
		{	 
			var addTag  = "<div class='inner-tag-wrapper'>";
				addTag += "<span class='inner-tag-name'>";
				addTag += $(this).html();
				addTag += "</span>";
				addTag += "<a class='inner-tag-close' href='javascript:return false' title='删除'>";
				addTag += "×";
				addTag += "</a>";
				addTag += "</div>";
			$(".tag_input").before(addTag);
			tagClose();
		}
	});
	//var tagAddOver = false;
	$(".tag_input").keypress(function(k){
		if(k.which == 13 || k.which == 32)
		{
			if($.trim($(this).val())!="")
			{
				var isaddTag = true;
				var tagNum = 0;
				var thisHtml = $.trim($(".tag_input").val());
				$(".inner-tag-name").each(function(){
					if($(this).html()==thisHtml)
						isaddTag = false;
					tagNum = tagNum + 1;
				});
				if(!isaddTag)
				{
					ShowMessage("warning","已经有了这个标签");
				}
				else if(tagNum>9)
				{
					ShowMessage("warning","no more then 10 tags");
				}
				else
				{	 
					var addTag  = "<div class='inner-tag-wrapper'>";
						addTag += "<span class='inner-tag-name'>";
						addTag += $.trim($(this).val());
						addTag += "</span>";
						addTag += "<a class='inner-tag-close' href='javascript:return false' title='删除'>";
						addTag += "×";
						addTag += "</a>";
						addTag += "</div>";
					$(".tag_input").before(addTag);
					tagClose();
				}
				
				$(this).val("");
				//tagAddOver = true;
			}
			/*else
			{
				tagAddOver = true;
			}*/
		}
	});
	/*$(".tag_input").keyup(function(k){
		if(k.which == 32)
		{
			if(tagAddOver)
			{
				$(this).val("");
				tagAddOver = false;
			}	
		}
	});*/
	function updateArt()
	{
		$(".update").click(function(){
			if($("#post_title").val()=="")
			{
				ShowMessage("error","还木有填写标题");
			}
			else if($("#post_content").children().hasClass("post-notice-msg") || !ue.hasContents())
			{
				ShowMessage("error","还木有写正文");
			}
			else if($(".src_current").html()=="转载" && $("#src_host").val()=="")
			{
				ShowMessage("error","请填写来源网址");
			}
			else
			{
				$(this).parent().children(".submiting").show();
				var tags = "";
				var jinhao = true;
				$(".inner-tag-name").each(function(){
					if(jinhao)
					{	
						tags = tags + $(this).html();
						jinhao = false;
					}
					else
						tags = tags + "#" + $(this).html();
				});
				if($("#post_src").val()=="原创") $("#src_host").val("");
				$.post("do/post.php",{do:"update",id:$("#post_id").val(),title:$("#post_title").val(),content:ue.getContent(),class:$("#post_class").val(),tags:tags,src:$("#src_host").val()},function(data,status){
						//alert(data);
						var ob = eval('(' + data + ')');
						$("#post_title").val(ob.title);
						ue.setContent(ob.content,false);
						$(".update").next(".submiting").hide();
						ShowMessage("ok","更新成功");
				});
			}							
		});	
	}
	updateArt();
	$(".post").click(function(){
		if($("#post_title").val()=="")
		{
			ShowMessage("error","还木有填写标题");
		}
		else if($("#post_content").children().hasClass("post-notice-msg") || !ue.hasContents())
		{
			ShowMessage("error","还木有写正文");
		}
		else if($(".src_current").html()=="转载" && $("#src_host").val()=="")
		{
			ShowMessage("error","请填写来源网址");
		}
		else
		{
			$(this).parent().children(".submiting").show();
			var tags = "";
			var jinhao = true;
			$(".inner-tag-name").each(function(){
				if(jinhao)
				{	
					tags = tags + $(this).html();
					jinhao = false;
				}
				else
					tags = tags + "#" + $(this).html();
			});
			if($("#post_src").val()=="原创") $("#src_host").val("");
			$.post("do/post.php",{do:"new",title:$("#post_title").val(),content:ue.getContent(),class:$("#post_class").val(),tags:tags,src:$("#src_host").val()},function(data,status){
					//alert(data);
					var ob = eval('(' + data + ')');
					$("#post_id").val(ob.id);
					$("#post_title").val(ob.title);
					ue.setContent(ob.content,false);
					$(".post").next(".submiting").hide();
					$(".buttonbox").find(".post").remove();
					$(".buttonbox").prepend("<div class='button update'>更新</div>");
					updateArt();
					ShowMessage("ok","发布成功");
			});
		}
	});
	
	//post-attr浮动
	var t  = $(".post-attr").offset().top;
	$(window).scroll(function(e){
		s = $(document).scrollTop();	
		if(s > t - 50){
			$('.post-attr').css({'position':'fixed','top':'50px','background-color':'#FBFBFB','border-bottom':'1px solid #E1E1E1'});	
		}else{
			$('.post-attr').css({'position':'','top':'','background-color':'','border-bottom':''});
		}
	});
	
	if($("#post_id").val())
	{
		$.post("do/post.php",{do:"getcontent",id:$("#post_id").val()},function(data,status){
			//alert(data);
			var ob = eval('(' + data + ')');
			$("#post_title").val(ob.title);
			ue.setContent(ob.content,false);
			
			var tag_arr = new Array;
			tag_arr = ob.tags.split("#");
			
			var tag_temp = "";
			for(i=0;i<tag_arr.length;i++)
			{
				if(tag_arr[i])
				{
					tag_temp += "<div class='inner-tag-wrapper'>";
					tag_temp +=		"<span class='inner-tag-name'>";
					tag_temp += 	tag_arr[i];
					tag_temp += 	"</span>";
					tag_temp +=		"<a class='inner-tag-close' href='javascript:return false' title='删除'>×</a>";
					tag_temp += "</div>";
				}
			}
			$(".tag_box").prepend(tag_temp);
			tagClose();
			$("#post_class").val(ob.class);
			$(".class_current").html(ob.class);
			$(".class_item").removeClass("selected");
			$(".class_item").each(function(){
				if($(this).html()==ob.class)
					$(this).addClass("selected");
			});
			if(ob.src)
			{
				$("#post_src").val("转载");
				$(".src_current").html("转载");
				$("#src_host").val(ob.src);
				$(".post-attr-src-input").show();
				$(".src_item").removeClass("selected");
				$(".src_item").each(function(){
					if($(this).html()==ob.src)
						$(this).addClass("selected");
				});
			}
			else
			{
				$("#post_src").val("原创");
				$(".src_current").html("原创");
				$(".src_item").removeClass("selected");
				$(".src_item").each(function(){
					if($(this).html()==ob.src)
						$(this).addClass("selected");
				});
			}
		});	
	}
});