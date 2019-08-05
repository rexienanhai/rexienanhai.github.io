function getDays(date1 , date2)
{
  var date1Str = date1.split("-");
  var date1Obj = new Date(date1Str[0],(date1Str[1]-1),date1Str[2]);
  var date2Str = date2.split("-");
  var date2Obj = new Date(date2Str[0],(date2Str[1]-1),date2Str[2]);
  var t1 = date1Obj.getTime();
  var t2 = date2Obj.getTime();
  var dateTime = 1000*60*60*24; //每一天的毫秒数
  var minusDays = Math.floor(((t2-t1)/dateTime));//计算出两个日期的天数差
  var days = Math.abs(minusDays);//取绝对值
  return days;
}


function calLeap()
{
	var yrs=document.getElementById("yrs").value;
	var yrArray=yrs.split(",");
	var year="";
	var wrStr="属于闰年的年份为：";
	var count=0;
	for(var i=0;i<yrArray.length;i++)
	{
		year=yrArray[i];
		var date1=year+"-01-01";
	    var date2=year+"-12-31";
	    var days=getDays(date1,date2)+1;
		if(days==366)
		{
			wrStr+=year;
		    wrStr+=" ";
			count+=1;
		}
	}
	if(count==0)
		document.getElementById("LeapYears").value="没有年份属于闰年！";
	else
	    document.getElementById("LeapYears").value=wrStr;
}

  //document.getElementById("over").innerHTML='生成脚本文件结束，请复制到*.bat文件中并放在wget<a href="../tools/wget.zip" style="color:red">(点我下载)</a>文件夹下直接运行即可!';