//front end
var showidiom=function(idiom){
	return '<span class="key">'+idiom.key+"</span>"+"注音 : "+idiom.pronounce+" 漢語拼音 : "+idiom.enspell+"<br>"+idiom.def;
}
var dosearch=function(tofind){
	var arr=search(tofind);
	document.getElementById("result").innerHTML=arr.map(showidiom).join("<br/>");
}

var dodefsearch=function(tofind){
	var arr=defsearch(tofind);
	document.getElementById("result").innerHTML=arr.map(showidiom).join("<br/>");
}

var dosearch2=function(tofind){
	var arr=search2(tofind);
	document.getElementById("result").innerHTML=arr.map(showidiom).join("<br/>");
}

var dosearchOOXX=function(){
	var tofind=/(.)\1(.)\2/;
	var arr=stacksearch(tofind);
	document.getElementById("result").innerHTML=arr.map(showidiom).join("<br/>");
}

var dosearchOXOX=function(){
	var tofind=/(.).\1/;
	var arr=stacksearch(tofind);
	document.getElementById("result").innerHTML=arr.map(showidiom).join("<br/>");
}