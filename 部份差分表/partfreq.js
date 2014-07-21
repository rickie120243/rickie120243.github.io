//given a part, 
//return array of character having the given part
var findbypart=function (part){
	//return["盟"];
	
	var res=[];
	for(var i in decompose){
		if(decompose[i].indexOf(part) >-1){
		res.push(i);
		}
	}
	return res;
}

var partindex={};//包含部件的字列表
var sorted_freq=[];//排序過的頻次
var charactercount=0;//總字數

var caculatefreq=function(){
	
	//var freq={"木":2000,"口":3000,"山":10000,"人":1000}
	partindex={};
	for(var i in decompose){
		var ids=decompose[i];//每一行
		for(var j in ids){
			var ch=ids[j];//每個字
			if(!partindex[ch]){
				partindex[ch]=[];
			};
			partindex[ch].push(i);//i=字本身
		}
	}
	//算出結果後，再排序
	sorted_freq=[];
	for (var i in partindex) {
		sorted_freq.push([i,partindex[i].length]);
	}
	sorted_freq.sort(function(a,b){
	
	  return b[1]-a[1]; //比較字頻數 排序
	});
	return sorted_freq;
	//return[["口",3000],["木",2000],["人",1000]];
}
var calaccufreq=function(){
	var report=[];
	var res={};
	var accu=0;//累頻
	for(var i in sorted_freq){
		var part=sorted_freq[i][0];
		var hasme=partindex[part]; //含有part的陣列，每個元素即字頭
		for(var j in hasme){
			var ch=hasme[j];
			if(!res[ch]){
				accu++;
				res[ch]=0;
			}
			res[ch]+=1;
		}
		var percent=((accu/charactercount)*100).toFixed(2)+"%";
		report.push([parseInt(i)+1,part,accu,percent]);
		//console.log(accu); //測試
	}
	return report;
}
