<?php
	// require_once "../comm/function.php";
	// LoadCookie();
	// if(!isset($_SESSION["u_id"]) || !isset($_SESSION["u_petname"]))
	// 	header("location:$web_url/member/login.php");
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="main.css" />
<title><?php if($_GET["id"]) echo "编辑文字"; else echo "写新文字";?> - 生活多美好</title>
</head>

<body>
	<?php //require "../header.php" ?>
	<div class="main">
		<div class="scrollbg"></div>
		<div class="content">
			<div class="left">
				<div class="post-wrapper">
					<div class="post-icon"></div>
					<div class="post-content">
						<input id="post_id" type="hidden" value="<?=$_GET["id"]?>">
						<script type="text/plain" id="post_content">
							<p class='post-notice-msg'>在此输入正文</p>
							<p class='post-notice-msg'>
								提示:<br/>
								1、支持键盘快捷键：（Ctrl+C 复制、Ctrl+V 粘贴、Ctrl+X 剪切、Ctrl+A 全选、Ctrl+Z 撤销、Ctrl+Y 重做）。<br />
								2、支持外部文字和图片的复制、粘贴（部分网站由于自身安全设置无法支持）。<br />
								3、请尊重他人劳动成果，转载注明出处。<br />
								4、严禁发布色情，反动，暴力，广告等内容，否则视情节严重予以封停帐号或删除帐号处理。
							</p>
						</script>
					</div>
				</div>
				<div class="contentshadow"></div>
			</div>
			<div class="right">
				<div class="righttitle"><span>码字，是一种享受。</span></div>
				<div class="rightitem post-attr">
					<div class="itemlist post-attr-class">
						<div class="class_box">
							<span class="class_main">
								<input id="post_class" type="hidden" value="文字" />
								<span class="class_text">发表到</span>
								<span class="class_current">文字</span>
								<span class="class_arrow"></span>
							</span>
							<ul id="class_list" style="display:none;">
								<li><a class="class_item selected" href="javascript:return false">文字</a></li>
								<li><a class="class_item" href="javascript:return false">音乐</a></li>
								<li><a class="class_item" href="javascript:return false">图片</a></li>
								<li><a class="class_item" href="javascript:return false">视频</a></li>
							</ul>
						</div>
					</div>
					<div class="itemlist post-attr-tag">
						<div class="tag_box">
								<input class="tag_input" type="text" placeholder="添加标签，以空格或回车隔开" maxlength="10" onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;" />
						</div>	
						<div class="tag_group">
							<div class="tag_group_list">
								<a class="tag_group_item" href="javascript:return false">音乐</a>
								<a class="tag_group_item" href="javascript:return false">美文</a>
								<a class="tag_group_item" href="javascript:return false">美好</a>
								<a class="tag_group_item" href="javascript:return false">感人</a>
								<a class="tag_group_item" href="javascript:return false">生活</a>
								<a class="tag_group_item" href="javascript:return false">爱情</a>
								<a class="tag_group_item" href="javascript:return false">青春</a>
								<div class="clear"></div>
							</div>
							<div class="tag_group_notice">最多10个标签，每个不超过10个字符</div>
						</div>
					</div>
					<div class="itemlist post-attr-src">
						<div class="src_box">
							<span class="src_main">
								<input id="post_src" type="hidden" value="原创" />
								<span class="src_text">文章来源</span>
								<span class="src_current">原创</span>
								<span class="src_arrow"></span>
							</span>
							<ul id="src_list" style="display:none;">
								<li><a class="src_item selected" href="javascript:return false">原创</a></li>
								<li><a class="src_item" href="javascript:return false">转载</a></li>
							</ul>
						</div>
						<div class="post-attr-src-input">
							<div class="src_input">
								<span class="src_input_main">
									<span class="src_input_text">网址</span>
									<span class="src_input_current"><input id="src_host" type="text" placeholder="如：http://www.baidu.com"></span>
								</span>
							</div>
						</div>
					</div>
					<div class="itemlist post-attr-submit">
						<div class="buttonbox">
							<?php
							if($_GET["id"])
							{
							?>
							<div class="button update">更新</div>
							<?php
							}
							else
							{
							?>
							<div class="button post">发布</div>
							<?php
							}
							?>
							<div class="submiting"><div class="submiting_inner"></div></div>
						</div>
					</div>
				</div>
			</div>
			<div class="clear"></div>
		</div>
	</div>
	<div class="dialog music-dlg">
		<div class="dialog-head">
			<span class="dialog-title">插入音乐</span><i class="closeicon"></i>
			<div class="clear"></div>
		</div>
		<div class="main-box">
			<div class="insertcode"><label>HTML代码</label><textarea id="musiccode" class="text-input text-area" style="width:500px; height:45px;"></textarea></div>
			<div class="preview-box"><label>预览</label><div class="musicpreview"></div><div class="clear"></div></div>
		</div>
		<div class="dialog-action" style="padding-left:90px;">
			<div class="buttonbox" style="float:left;">
				<div class="button insert-music">插入</div>
				<div class="submiting"><div class="submiting_inner"></div></div>
			</div>
			<div class="cancel"><a href="javascript:return false">取消</a></div>
			<div class="clear"></div>
		</div>
	</div>
	<div class="dialog video-dlg">
		<div class="dialog-head">
			<span class="dialog-title">插入视频</span><i class="closeicon"></i>
			<div class="clear"></div>
		</div>
		<div class="main-box">
			<div class="insertcode"><label>播放器地址</label><input id="videocode" type="text" class="text-input" style="width:500px;"/></div>
			<div class="preview-box"><label>预览</label><div class="videopreview"></div><div class="clear"></div></div>
		</div>
		<div class="dialog-action" style="padding-left:90px;">
			<div class="buttonbox" style="float:left;">
				<div class="button insert-video">插入</div>
				<div class="submiting"><div class="submiting_inner"></div></div>
			</div>
			<div class="cancel"><a href="javascript:return false">取消</a></div>
			<div class="clear"></div>
		</div>
	</div>
</body>
<link href="editor/themes/default/css/umeditor.css" type="text/css" rel="stylesheet">
<script type="text/javascript" charset="utf-8" src="jquery-1.10.2.min.js"></script>
<script type="text/javascript" charset="utf-8" src="editor/umeditor.config.js"></script>
<script type="text/javascript" charset="utf-8" src="editor/umeditor.min.js"></script>
<script type="text/javascript" charset="utf-8" src="editor/lang/zh-cn/zh-cn.js"></script>
<script>var ue = UM.getEditor('post_content');</script>
<script type="text/javascript" charset="utf-8" src="function.js"></script>
<script type="text/javascript" charset="utf-8" src="post.js"></script>
</html>