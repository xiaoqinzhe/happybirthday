$(function(){
	var times=0;
	var str=new Array();
	var word="To 寿 星: \n 　　当 我 把 神 灯 擦 三 下 后, 灯 神 问 我 想 许 什 么 愿? 我 说: 我 想 你 帮 我 保 佑 一 个 正 在 看 这 张 贺 卡 的 人, 希 望 那 人 生 日 快 乐, 永 远 幸 福!  　　　　　　From Xiaoqinzhe";
    str=word.split(" ");
    setTimeout(show,12000);
    function show(){
    	$("img.img1").hide();
        $("div.words").hide();
    	for(var i=0;i<str.length;i++){
    		(function(a){
    			setTimeout(function(){
    				if(str[a]=="\n") $("div.bless").append("<span></span><br/>");
    				else  $("div.bless").append("<span>"+str[a]+"</span>");
    				$("div.bless span").eq(a).animate({"opacity":"1"},1000);
    				if(a==str.length-1)
    					setTimeout(function(){
	    					$("a.sing").show().animate({"opacity":"1"},1000);
	    					alert($("div.bless").width());
	    				},1000);
    		    },300*a);
    		})(i);
    	}
    }
	$("a.sing").draggable();
	audio = document.getElementById('audio');
	$("a.sing img").click(function(){
		$("audio").attr("controls","controls");
		//$(".bgmusic").remove();
		times++;
		if(times%2){
			$("a.sing img").attr("src","img/cat.gif");
			$("audio").attr("src","music/srg2.mp3");
			audio.play();
			//$(".a").append("<audio class="bgmusic" src="music/kanong.mp3" autoplay></audio>");
		}
		else {
			$("a.sing img").attr("src","img/cat.png");
			audio.pause();
			//$("audio").attr("src","music/kanong.mp3");
			//$(".a").html("<audio class="bgmusic" src="music/kanong.mp3" autoplay></audio>");
		} 
	});
});