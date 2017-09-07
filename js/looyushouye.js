document.writeln("<style>");
document.writeln(".shouhou{ position:fixed; right:5px; top:545px;}");
document.writeln(".shouhou img{border:0px; float:right}");
document.writeln("</style>");
// var file2 = '<script type="text/javascript" charset="utf-8" src="http://lead.soperson.com/20000485/10047770.js"><\/script>';
var file2 = '<script type="text/javascript" charset="utf-8" src="http://lead.soperson.com/20000485/10058648.js"><\/script>';
var file2 = '<script type="text/javascript" charset="utf-8" src="http://lead.soperson.com/20000485/10058673.js"></script>';
//document.writeln("<a href=\"http://wpa.b.qq.com/cgi/wpa.php?ln=1&key=XzkzODA1MDg5NV8xNDI0MTZfNDAwMDEwNTc4OV8yXw\" target=\"_blank\" class=\"shouhou\"><img src=\"http://www.5haoxue.net/images/looyu-bg2.png\" /></a>");
document.write(file2);
//document.write('<img scr="http://img1.5haoxue.net/images/cons.jpg" width="100%" /> ');
	function beforeLooyuPanelBuilder(){
		this.defUI();
		var closer=document.createElement('a');
        /*var img=document.createElement('img');
            img.src="http://img1.5haoxue.net/images/cons.jpg";
            img.style.width = "100%";
            img.style.clear = "both";
            img.style.marginTop = "117px";
			*/
		closer.href="#";
		closer.innerHTML='&nbsp;';
		closer.style.display='block';
		closer.style.margin='3px';
		closer.style.marginRight='1px'
		closer.style.width='10px';
		closer.style.height='20px';
        //this.obj.style.height = "auto";
        //this.obj.appendChild(img);
		this.obj.insertBefore(closer,this.obj.firstChild);
		if(typeof closer.style.cssFloat!='undefined')
			 closer.style.cssFloat='right';
		else 
			closer.style.styleFloat='right';
		var me = this;
		closer.onclick=function(){
			me.close();
			return false;
		}	
	}