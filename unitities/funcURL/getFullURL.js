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

function addDate(date, days) {
            var date = new Date(date);
            date.setDate(date.getDate() + days);
            var month = date.getMonth() + 1;
            var day = date.getDate();
            return date.getFullYear() + '-' + getFormatDate(month) + '-' + getFormatDate(day);
        }

function getFormatDate(arg) {
            if (arg == undefined || arg == '') {
                return '';
            }

            var re = arg + '';
            if (re.length < 2) {
                re = '0' + re;
            }

            return re;
        }
fURLs=[];

function getFullURL()
{
  var comsite=document.getElementById("site").value;
  var begDate=document.getElementById("BegTime").value;
  var endDate=document.getElementById("EndTime").value;
  var account=document.getElementById("Account").value;
  var password=document.getElementById("pwd").value;
  //var batPath=document.getElementById("batScript").value;
  var hv=document.getElementById("hv").value;
  var pp=document.getElementById("ppstr").value;
  var dayScale=parseInt(document.getElementById("dayScale").value);
  var fURL="";
  var Month="";
  var test="";
  var Day="";
  //var file=document.getElementById("batScript").value;
  var hvs=hv.split(",");
  //var wTool=new ActiveXObject('wscript.shell');
  var info = ["wget --http-user="," --http-password="," --load-cookies mycookies.txt --save-cookies mycookies.txt --keep-session-cookies -c -r --accept ", " --no-check-certificate --auth-no-challenge -np -e robots=off "];
  var Tdays=getDays(begDate,endDate)+1;
  var ymd=begDate.split("-");
  var yPre=parseInt(ymd[0]);
  var yCur="";
  //var ws = new   ActiveXObject("wscript.shell");  
  
  /*function dataToTxt(batPath,exportdata)
{
            var fso = new ActiveXObject("Scripting.FileSystemObject");
            var s = fso.CreateTextFile(batPath, false);
            s.WriteLine(exportdata);
            s.Close();			
}*/

  var hvStr='"*'+pp+"*."+hvs[0]+'.*.hdf"';
  for(var j=1;j<hvs.length;j++)
  {
     hvStr=hvStr+","+'"*'+pp+"*."+hvs[j]+'.*.hdf"'
  }
      test="正在生成下载链接，请稍后... <br>" 
      document.getElementById("res").innerHTML=test;

  for(var i=0;i<Tdays;)
  {
     //fURL="";
     var curDate=new Date(parseInt(ymd[0].replace(/(^\s*)|(\s*$)/g, "")),parseInt(ymd[1].replace(/(^\s*)|(\s*$)/g, ""))-1,parseInt(ymd[2].replace(/(^\s*)|(\s*$)/g, "")));
     curDateSTR=addDate(curDate,i);
     yCur=curDateSTR.split('-');
     if(dayScale ==8 && parseInt(yCur[0]) !=yPre)
         {
             curDateSTR=yCur[0]+'-'+'01'+'-'+'01';
			 i=i-getDays(curDateSTR,addDate(curDate,i))
             yPre=parseInt(yCur[0]);
         }
     var reg=new RegExp('-',"g");
     curDateSTR=curDateSTR.replace(reg,".");
      fURL+=info[0]+account+info[1]+password+info[2]+hvStr+info[3]+comsite+"/"+curDateSTR+"/ \n";
      
      i=i+dayScale;
      //ws.run("C:/Users/MRLiu/Desktop/downloadscript/funcURL/wget.exe" +fURL);
      
    }
    //alert(fURL);
    //var x=dataToTxt(batPath,fURL)
  document.getElementById("over").innerHTML='生成脚本文件结束，请复制到*.bat文件中并放在wget<a href="../tools/wget.zip" style="color:red">(点我下载)</a>文件夹下直接运行即可!';
  document.getElementById("allRes").value=fURL;
  //ws=null;
}