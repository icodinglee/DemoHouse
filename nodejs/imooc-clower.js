var http=require("http");
var cheerio=require("cheerio");
var url="http://www.imooc.com/learn/744";

function printInfo(courseData){
  courseData.forEach((item)=>{
    var chapterTitle=item.chapterTitle;
    console.log(chapterTitle +"\n");
    item.videos.map((video)=>{
      console.log("["+video.id+"]"+video.videoTitle)
    })

  })
}

function fliterChapters(html){
  var $ = cheerio.load(html);
  var chapters=$(".chapter")

  var courseData=[];
  chapters.each(function(item){
    var chapter=$(this);
    var chapterTitle=chapter.find("strong").text();
    var videos=chapter.find(".video").children("li");
    var chapterData={
      chapterTitle:chapterTitle,
      videos:[]
    }
    videos.each((item)=>{
      var video=$(this).find(".J-media-item");
      var videoTitle=video.text();
      var id=video.attr("href").split("video/")[1];
      chapterData.videos.push({
        video,
        videoTitle,
        id
      })
    })
    courseData.push(chapterData)
  })
 return courseData
}

http.get(url,function(res){
  var html="";
  res.on("data",function(data){
    html+=data;
  })
  res.on("end",function(){
    var courseData=fliterChapters(html);
    printInfo(courseData)
  })
}).on("error",function(errr){
  console.log("获取课程数据出错")
})
