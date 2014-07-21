//back end
var search=function(tofind){
	var out=[];
//	var p=new RegExp(tofind,'g');
	for(var i=0;i<idioms.length;i++){
		if(idioms[i].key.indexOf(tofind)>-1){
			idioms[i].key=idioms[i].key.replace(tofind,wordcolor(tofind));
			out.push(idioms[i]);
		}
	}
	return out;
}

var defsearch=function(tofind){
	var out=[];
	for(var i=0;i<idioms.length;i++){
		if(idioms[i].def.indexOf(tofind)>-1){
			idioms[i].def=idioms[i].def.replace(tofind,blodwordcolor(tofind));

			out.push(idioms[i]);
		}
	}
	return out;
}

var blodwordcolor=function(w){
	return "<font color=red>"+"<b>"+w+"</b>"+"</font>";
}

var wordcolor=function(w){
	return "<font color=red>"+w+"</font>";
}

var search2=function(tofind){
	var out=[];
	var p=new RegExp(tofind,'g');
	for(var i=0;i<idioms.length;i++){
		var match=idioms[i].key.match(p);
		if(match){
			idioms[i].key=idioms[i].key.replace(p,wordcolor);
			out.push(idioms[i]);
		}
	}
	return out;
}

var stacksearch=function(tofind){
	var out=[];
	for(var i=0;i<idioms.length;i++){
		var match=idioms[i].key.match(tofind);
		if(match){
//			idioms[i].key=idioms[i].key.replace(tofind,wordcolor);
			out.push(idioms[i]);
		}
	}
	return out;
}


