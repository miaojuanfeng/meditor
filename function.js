// JavaScript Document
/*
	显示信息框
	type:信息类型 "ok","warning","error"
	msg:"信息内容"
*/
function ShowMessage(type,msg)
{
	$(".messagebox").stop();
	$(".messagebox").remove();
	var box  = "<div class='messagebox'>";
		box += 		"<div class='messagecontent'>";
		if(type=="ok")
			box += 		"<div class='messageicon ok'></div>";
		else if(type=="warning")	
			box += 		"<div class='messageicon warning'></div>";
		else if(type=="error")
			box += 		"<div class='messageicon error'></div>";
		else
			box += 		"<div class='messageicon'></div>";
		box += 			"<div class='messagetext'>";
		box +=			msg;
		box += 			"</div>";
		box += 		"</div>";
		box += "</div>";
	$("body").prepend(box);
	$(".messagebox").css({"margin-top":$(".messagebox").height()/2-120+"px","margin-left":-$(".messagebox").width()/2+"px"});
	$(".messagebox").fadeIn(500).delay(1000).fadeOut(500,function(){
		$(this).remove();
	});
}
/*---表单验证-----------------------------------------------------------------------------------------------------------------*/
/* 
用途：检查输入对象的值是否符合E-Mail格式 
输入：str 输入的字符串 
返回：如果通过验证返回true,否则返回false 
*/ 
function isEmail(str){  
var myReg = /^[-_A-Za-z0-9]+@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/; 
if(myReg.test(str)) return true; 
return false; 
}
/* 
用途：检查输入对象的值是否符合数字/字母/汉字格式 
输入：str 输入的字符串 
返回：如果通过验证返回true,否则返回false 
*/ 
function isPetName(str){  
var myReg = /^[0-9a-zA-Z\u4e00-\u9fa5]+$/;
if(myReg.test(str) && str!="名字" && str.length<=8) return true; 
return false; 
}
/* 
用途：检查输入对象的值是否符合密码格式 
输入：str 输入的字符串 
返回：如果通过验证返回true,否则返回false 
*/ 
function isPwd(str){
if(6<=str.length && str.length<=16) return true; 
return false; 
}
/* 
用途：确认密码
输入：str 输入的字符串 
返回：如果通过验证返回true,否则返回false 
*/ 
function isPwdEque(str,str2){
if(str == str2) return true; 
return false; 
}

/*共同的方法*/
function showMask()
{
	$(".mask").stop();
	$(".mask").remove();
	$("body").prepend("<div class='mask'></div>");
	$(".mask").fadeTo(500,0.6,function(){
	});
}
function hideMask()
{
	$(".mask").stop();
	$(".mask").fadeTo(500,0,function(){
		$(this).remove();
	});
}
function showDialog(classname)
{
	//alert($(classname).height());
	showMask();
	$(classname).css({"margin-left":-$(classname).width()/2-40+"px","margin-top":-$(classname).height()/2-40+"px"}).fadeIn(200,function(){
		$(this).show();
	});
}
/*scrollbg*/
var l = 1;
var m;
function left()
{
	l-=1;
	if (l == -1150){
		l = 0;
	}
	$(".scrollbg").css("background-position",l+"px 0");
}
$(document).ready(function(){
	/*----背景移动--------------------------------------------------------------------------------------------------------------*/
	$(".scrollbg").mouseenter(function(){
		m = setInterval("left()",30);
	});
	$(".scrollbg").mouseleave(function(){
		clearInterval(m);
	});					   
	/*dialog*/
	$(".closeicon").click(function(){
		hideMask();						   
		$(".dialog").fadeOut(200,function(){
			$(this).hide();
		});
	});
	$(".cancel").click(function(){
		hideMask();						
		$(".dialog").fadeOut(200,function(){
			$(this).hide();
		});
	});
	/*right pic-text*/
	$(".pic-text").mouseenter(function(){
		$(this).children(".pic-desc").stop();
		$(this).children(".pic-desc").show();
		$(this).children(".pic-desc").animate({"top":150-$(this).children(".pic-desc").height()-10},100);
	});
	$(".pic-text").mouseleave(function(){
		$(this).children(".pic-desc").stop();
		$(this).children(".pic-desc").animate({"top":"150px"},100,function(){
			$(this).hide();
		});
	});
});

