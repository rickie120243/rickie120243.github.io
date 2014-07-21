var glob=require("glob");
var fs=require("fs");
//var out=[];

var processFile=function(fn){
	var lines=fs.readFileSync(fn,"utf8").split("\n");
	var out=[];
	var key="成語&nbsp;";
	var def="釋義&nbsp;";
	var pronounce="注音&nbsp;";
	var enspell="漢語拼音&nbsp;";
	for(var i=200;i<lines.length;i++){
		var line=lines[i];
		if(line.indexOf("<!-- layoutclass_second -->")>-1)break;
		line=line.replace(/<.*?>/g,"");
		var pronouncestart=line.indexOf(pronounce);
		var enspellstart=line.indexOf(enspell);
		var keystart=line.indexOf(key);
		var defstart=line.indexOf(def);
		if(keystart>-1){
			out.push('"key":"'+line.substr(keystart+8)+'"');
		}else if(pronouncestart>-1){
			out.push('"pronounce":"'+line.substr(pronouncestart+8)+'"');
		}else if(enspellstart>-1){
			out.push('"enspell":"'+line.substr(enspellstart+10)+'"');
		}else if(defstart>-1){
			out.push('"def":"'+line.substr(defstart+9)+'"');
		}
	}
	return "{"+out.join(",")+"}";   
}
glob("all-data/**/*.html",function(err,files){ //在命令提示字元打 npm install glob
	var arr=files.map(processFile);
	var output="var idioms=["+arr.join(",\n")+"]"
	console.log(output);
})