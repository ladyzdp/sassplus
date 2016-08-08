<!-- 顶部开始 -->
<div class="top">
	<div class="top-list">
		<ul class="top-menu">
			<li>您好！陈雨</li>
			<li><span class="icons-Watched-user icon-item"></span><span>(当前在线人数) 56</span></li>
			<li>
			<a href="javascript:;" class="skin">
			<span class="icons-T-Shirt icon-item"></span>换肤
				<ul id="skin">
					<li class="skin-color orange" title="orange"></li>
					<li class="skin-color black" title="black"></li>
					<li class="skin-color green" title="green"></li>
				</ul>
			</a>
			</li>
			<li><a href="index.html"><span class="icons-fanhui icon-item"></span>主页</a></li>
			<li><a href="#">返回旧版</a></li>
			<li><a href="#"><span class="icons-Folder icon-item"></span>个人文件夹</a></li>
			<li><a href="#"><span class="icons-wenhao icon-item"></span>帮助</a></li>
			<li><a href="javascript:;" id="exit"><span class="icons-Power icon-item"></span>退出</a></li>
		</ul>
	</div>
</div>
<script type="text/javascript">
	
	$(document).ready(function() {
		$(".skin").hover(function() {
			$("#skin").slideDown(100);
			/* Stuff to do when the mouse enters the element */
		}, function() {
			/* Stuff to do when the mouse leaves the element */
			$("#skin").slideUp(100);
		});
	});
</script>
<!-- 顶部结束 -->