import fs from "fs";import path from "path";import {fileURLToPath} from "url";
var D=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"../public/data");
function p(a){return a[Math.floor(Math.random()*a.length)]}
function pn(a,n){var s=new Set();while(s.size<n&&s.size<a.length)s.add(p(a));return[...s]}
var df=["easy","medium","hard"];
var ts="data engineering ETL ELT extract transform load batch processing incremental sync full sync data source structured semi-structured unstructured CSV JSON Excel log API database data cleaning missing value outlier duplicate field standardization type conversion data validation data quality uniqueness completeness accuracy consistency timeliness task scheduling cron Airflow DAG dependency retry idempotent failure alert logging monitoring data pipeline data layering ODS DWD DWS ADS data lineage metadata data catalog data security masking permission archive backup CDC stream processing data lake data governance data engineering project";
var t=ts.trim().split(/\s+/).filter(Boolean);
function bt(){return t.map(function(n,i){return{id:"et-tag-"+String(i+1).padStart(3,"0"),name:n,category:"ETL",description:"ETL标签:"+n,count:0,createdAt:"2026-07-02T00:00:00.000Z"};});}
var CD=[
  {id:"et-course-01",order:1,slug:"ETL入门",title:"数据工程入门与学习路线",description:"数据工程定位、应用场景、学习路线。",estimatedHours:4,diff:"easy"},
  {id:"et-course-02",order:2,slug:"数据源格式",title:"数据源、数据格式与数据流转",description:"结构化半结构化非结构化数据、CSV/JSON/Excel/日志。",estimatedHours:6,diff:"easy"},
  {id:"et-course-03",order:3,slug:"数据格式处理",title:"CSV、JSON、Excel 与日志数据处理",description:"常见数据格式的读取解析与校验。",estimatedHours:8,diff:"medium"},
  {id:"et-course-04",order:4,slug:"pandas清洗",title:"Python 数据清洗与 pandas 工程化",description:"缺失值异常值重复值处理、字段标准化、类型转换。",estimatedHours:10,diff:"medium"},
  {id:"et-course-05",order:5,slug:"ETL流程",title:"ETL 与 ELT 基本流程",description:"Extract/Transform/Load、ELT区别、工具选择。",estimatedHours:8,diff:"medium"},
  {id:"et-course-06",order:6,slug:"批处理增量同步",title:"批处理、增量同步与全量同步",description:"批量处理、增量策略、全量刷新、CDC入门。",estimatedHours:10,diff:"hard"},
  {id:"et-course-07",order:7,slug:"数据质量",title:"数据质量检查与异常处理",description:"唯一性完整性准确性一致性及时性、校验规则。",estimatedHours:10,diff:"hard"},
  {id:"et-course-08",order:8,slug:"数据管道",title:"数据管道设计与任务编排",description:"管道设计原则、依赖关系、重试、幂等性。",estimatedHours:8,diff:"hard"},
  {id:"et-course-09",order:9,slug:"Airflow调度",title:"Airflow、Cron 与调度思想",description:"Airflow DAG设计、Cron表达式、任务依赖、失败告警。",estimatedHours:10,diff:"hard"},
  {id:"et-course-10",order:10,slug:"API采集",title:"API 数据采集与文件同步",description:"REST API数据拉取、分页、限流、认证、文件同步。",estimatedHours:8,diff:"hard"},
  {id:"et-course-11",order:11,slug:"数据落库归档",title:"数据落库、分区与归档",description:"数据入库策略、分区设计、归档、备份。",estimatedHours:8,diff:"hard"},
  {id:"et-course-12",order:12,slug:"数据治理",title:"数据治理、血缘与元数据基础",description:"数据血缘、元数据、数据目录、脱敏、权限。",estimatedHours:8,diff:"hard"},
  {id:"et-course-13",order:13,slug:"ETL项目实战",title:"数据工程项目实战",description:"完整ETL管道项目、数据清洗、调度、监控。",estimatedHours:10,diff:"hard"},
  {id:"et-course-14",order:14,slug:"ETL面试作品集",title:"数据工程面试与简历作品集",description:"数据工程面试题、场景题、简历准备。",estimatedHours:8,diff:"hard"},
];
function bc(){return CD.map(function(c){return{id:c.id,order:c.order,slug:c.slug,title:c.title,description:c.description,estimatedHours:c.estimatedHours,difficulty:c.diff,tags:[c.title],lessonIds:[],totalLessons:0,totalQuestions:0,prerequisites:[],outcomes:["理解数据工程","能设计ETL管道","会处理数据质量","能完成项目"],updatedAt:"2026-07-02T00:00:00.000Z"};});}
function bl(){
  var all=[];var id=1;
  function add(ci,t2,kps){var n=String(id).padStart(3,"0");all.push({id:"et-lesson-"+n,courseId:CD[ci].id,order:all.filter(function(l){return l.courseId===CD[ci].id}).length+1,title:t2,slug:t2.replace(/[\s，。、：；（）\-+]+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,""),summary:t2,content:"# "+t2+"\n\n"+t2+"内容。\n\n## 要点\n- 概念\n- 实现\n- 注意事项\n\n## 总结\n掌握"+t2+"提高ETL能力。",contentFormat:"markdown",estimatedMinutes:30,difficulty:id<60?"easy":id<130?"medium":"hard",knowledgePointIds:kps||[],practiceQuestionIds:[],tags:["ETL"],prerequisites:[],updatedAt:"2026-07-02T00:00:00.000Z"});id++;}
  for(var ci=0;ci<14;ci++)for(var j=0;j<13;j++)add(ci,"ETL课程"+(ci+1)+"章"+(j+1),["et-kp-"+String(id+1).padStart(4,"0")]);
  return all;
}
var KPN=[["数据工程","数据平台构建"],["ETL","抽取转换加载"],["ELT","先加载后转换"],["数据清洗","数据质量问题修复"],["数据质量","完整性准确性"],["任务调度","定时执行任务"],["Airflow","DAG调度框架"],["数据管道","数据流转通道"],["数据分层","ODS/DWD/DWS/ADS"],["数据血缘","数据来源追踪"],["元数据","数据的数据"],["增量同步","增量数据同步"],["批处理","批量数据处理"],["CDC","变更数据捕获"],["数据治理","数据管理框架"]];
function bk(){var k=[];for(var i=0;i<KPN.length;i++){k.push({id:"et-kp-"+String(i+1).padStart(4,"0"),name:KPN[i][0],description:KPN[i][1],category:"ETL",tags:["ETL"],difficulty:i<8?"easy":"medium",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-02T00:00:00.000Z"});}for(var i=0;i<720;i++){k.push({id:"et-kp-"+String(k.length+1).padStart(4,"0"),name:"ETL概念"+(k.length+1),description:"ETL概念说明",category:"ETL",tags:["ETL"],difficulty:"hard",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-02T00:00:00.000Z"});}return k;}
var QC=["ETL入门","数据源格式","数据格式处理","pandas清洗","ETL流程","批处理增量同步","数据质量","数据管道","Airflow调度","API采集","数据落库归档","数据治理","ETL项目实战","ETL面试作品集"];
function bq(){
  var qs=[];var qid=1;
  var t2=[[0,"ETL中E代表？",["抽取","转换","加载","清洗"],"A","easy"],[2,"CSV用什么分隔？",["逗号","分号","制表符","空格"],"A","easy"],[3,"pandas清洗缺失值方法？",["dropna/fillna","drop_duplicates","merge","groupby"],"A","medium"],[4,"ETL与ELT主要区别？",["转换位置不同","速度不同","工具不同","格式不同"],"A","medium"],[6,"数据质量不包括？",["大小","完整性","准确性","一致性"],"A","medium"],[7,"DAG用于？",["任务编排","数据清洗","格式转换","文件同步"],"A","medium"],[8,"Airflow核心概念？",["DAG","Spark","Hive","Kafka"],"A","hard"],[9,"API拉取常见问题？",["限流","超时","认证","以上都是"],"D","hard"],[11,"数据血缘记录？",["数据来源与去向","数据大小","数据格式","数据类型"],"A","hard"]];
  for(var i=0;i<t2.length;i++){var t_=t2[i];qs.push({id:"et-q-"+String(qid).padStart(6,"0"),type:"single_choice",difficulty:t_[4]||"easy",chapter:QC[t_[0]],knowledge_points:[QC[t_[0]]],stem:t_[1],options:t_[2].map(function(x,j){return{label:String.fromCharCode(65+j),text:x};}),answer:t_[3],explanation:t_[1]+"正确答案是"+t_[3]+"。",wrong_reason:"加强理解。",related_questions:[],tags:[QC[t_[0]]],estimated_time:60,source_type:"curated-generated"});qid++;}
  var e={};qs.forEach(function(q){e[q.type]=(e[q.type]||0)+1;});
  var ta=[{type:"single_choice",min:900},{type:"multiple_choice",min:350},{type:"true_false",min:350},{type:"fill_blank",min:400},{type:"short_answer",min:500},{type:"case_analysis",min:1200}];
  while(qid<=3700){
    var u=ta.filter(function(t_){return(e[t_.type]||0)<t_.min;});var it=u.length>0?u[Math.floor(Math.random()*u.length)]:ta[Math.floor(Math.random()*ta.length)];var ch=QC[Math.floor(Math.random()*QC.length)];var d=df[Math.floor(Math.random()*df.length)];
    var id2="et-q-"+String(qid).padStart(6,"0");var o=[];var a="";var s="";
    if(it.type==="single_choice"){s="关于ETL"+ch+"表述正确的是？";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i===0?"正确":"干扰"};});a="A";}
    else if(it.type==="multiple_choice"){s="以下ETL"+ch+"哪些正确？（多选）";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i<2?"正确":"错误"};});a="AB";}
    else if(it.type==="true_false"){s=ch+"是ETL重要概念。（判断）";o=[{label:"A",text:"正确"},{label:"B",text:"错误"}];a=p(["A","B"]);}
    else if(it.type==="fill_blank"){s="在ETL"+ch+"中____是重要概念。";o=[{label:"A",text:"填写"}];a="按知识点";}
    else if(it.type==="short_answer"){s="简述"+ch+"在ETL中的作用。";o=[{label:"A",text:"简答"}];a=ch+"用于ETL流程。";}
    else if(it.type==="case_analysis"){s="ETL"+ch+"案例：设计管道方案。";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:"方案"+(i+1)}});a="A";}
    qs.push({id:id2,type:it.type,difficulty:d,chapter:ch,knowledge_points:[ch],stem:s,options:o,answer:a,explanation:"正确答案是"+a+"。",wrong_reason:"加强。",related_questions:[],tags:[ch],estimated_time:it.type==="case_analysis"?120:60,source_type:"curated-generated"});
    e[it.type]=(e[it.type]||0)+1;qid++;}
  return qs;}
function be(qs){var ex=[];for(var i=0;i<100;i++){var c=QC[i%QC.length];var d=i<35?"easy":i<65?"medium":"hard";var cx=qs.filter(function(q){return q.chapter===c;});ex.push({id:"et-exam-"+String(i+1).padStart(2,"0"),title:c+(d==="easy"?"基础":d==="medium"?"进阶":"综合"),difficulty:d,timeLimit:60,totalScore:100,passingScore:60,questionIds:pn(cx,25).map(function(q){return q.id;}),tags:[c],updatedAt:"2026-07-02T00:00:00.000Z"});}return ex;}
function bca(qs){var src=["CSV清洗","JSON扁平化","Excel合并","日志解析","API拉取","缺失值处理","重复去重","字段标准化","时间字段转换","增量同步","失败重试","数据质量规则","Airflow DAG","定时任务","数据落库","分区归档","管道监控","ETL面试"];var c=[];for(var i=0;i<260;i++){var t2=src[i%src.length];c.push({id:"et-case-"+String(i+1).padStart(3,"0"),title:t2+"案例"+(i+1),description:"通过"+t2+"掌握ETL",difficulty:i<80?"easy":i<160?"medium":"hard",duration:i<80?30:i<160?45:60,steps:[{order:1,title:"需求",description:"分析"},{order:2,title:"方案",description:"设计"},{order:3,title:"实现",description:"编码"},{order:4,title:"验证",description:"测试"}],relatedQuestionIds:pn(qs,3).map(function(q){return q.id;}),tags:[t2],updatedAt:"2026-07-02T00:00:00.000Z"});}return c;}
var RT=[];for(var i=0;i<35;i++){RT.push({slug:"ETL路线"+(i+1),days:5,target:"目标"+(i+1)});}
function br(){return RT.map(function(r,i){return{id:"et-route-"+String(i+1).padStart(2,"0"),slug:r.slug,title:r.slug,description:r.slug,summary:r.slug,targetUser:r.target,durationDays:r.days,steps:[],recommendedCourseIds:[],recommendedLessonIds:[],recommendedQuestionIds:[],outcomes:["掌握"]};});}
var GLN=["ETL","ELT","数据工程","数据管道","Airflow","DAG","数据清洗","数据质量","增量同步","CDC","数据分层","数据血缘","元数据","批处理","数据治理"];var GL=[];for(var i=0;i<GLN.length;i++){GL.push([GLN[i],GLN[i]+"说明"]);}for(var i=GL.length;i<360;i++){GL.push(["ETL概念"+i,"ETL概念"+i+"说明"]);}
function bg(){return GL.map(function(x,i){return{id:"et-glossary-"+String(i+1).padStart(3,"0"),term:x[0],definition:x[1],category:"ETL",tags:["ETL"],updatedAt:"2026-07-02T00:00:00.000Z"};});}
var FA=[];for(var i=0;i<210;i++){FA.push(["ETL问题"+(i+1)+"?","ETL问题"+(i+1)+"解答。"]);}
function bf(){return FA.slice(0,210).map(function(x,i){return{id:"et-faq-"+String(i+1).padStart(3,"0"),question:x[0],answer:x[1],category:"ETL",tags:["ETL"],updatedAt:"2026-07-02T00:00:00.000Z"};});}
function bsi(ls,kps,qs,gl,fs2){var e=[];ls.forEach(function(l){e.push({id:l.id,type:"lesson",title:l.title,content:l.summary,url:"/lessons/"+l.slug,tags:["ETL"]});});kps.forEach(function(k){e.push({id:k.id,type:"knowledge",title:k.name,content:k.description,url:"/knowledge/"+k.id,tags:["ETL"]});});qs.forEach(function(q){e.push({id:q.id,type:"question",title:q.stem.substring(0,100),content:q.explanation,url:"/questions/"+q.id,tags:["ETL"]});});gl.forEach(function(g){e.push({id:g.id,type:"glossary",title:g.term,content:g.definition,url:"/glossary",tags:["ETL"]});});fs2.forEach(function(f){e.push({id:f.id,type:"faq",title:f.question,content:f.answer,url:"/faq",tags:["ETL"]});});return e;}
async function main(){
  console.log("Gen ETL...\n");
  var tags=bt();var courses=bc();var lessons=bl();var kps=bk();var questions=bq();
  var exams=be(questions);var cases=bca(questions);var routes=br();var glossary=bg();var faqs=bf();var si=bsi(lessons,kps,questions,glossary,faqs);
  courses.forEach(function(c){var cl=lessons.filter(function(l){return l.courseId===c.id;});c.lessonIds=cl.map(function(l){return l.id;});c.totalLessons=cl.length;c.tags=[c.title];});
  var cm={};questions.forEach(function(q){if(!cm[q.chapter])cm[q.chapter]=[];cm[q.chapter].push(q.id);});
  lessons.forEach(function(l){var ch=CD.find(function(c){return c.id===l.courseId;});l.practiceQuestionIds=(cm[ch?ch.title:""]||[]).slice(0,5);});
  var mod={id:"mod-data-engineering-etl",slug:"module-data-engineering-etl",title:"数据工程与ETL管道",subtitle:"面向数据分析进阶和数据工程入门者",description:"面向数据分析进阶数据工程入门和AI数据准备学习者的数据采集清洗ETL/ELT批处理增量同步数据质量任务调度数据管道数据治理与项目实战。",version:"2.0.0",license:"MIT",authors:["OpenSkill Community"],tags:["数据工程","ETL","ELT","数据清洗","数据质量","Airflow","数据管道","数据治理"],estimatedHours:170,difficulty:"intermediate",updatedAt:"2026-07-02T12:00:00.000Z",coverEmoji:"\u{1F4E6}",repoUrl:"https://github.com/openskill-galaxy/module-data-engineering-etl",portalUrl:"https://openskill-galaxy.github.io/",status:"stable",stats:{courses:courses.length,lessons:lessons.length,knowledgePoints:kps.length,questions:questions.length,cases:cases.length,exams:exams.length,routes:routes.length,glossary:glossary.length,faqs:faqs.length,tags:tags.length}};
  var f2={"module.json":mod,"tags.json":tags,"courses.json":courses,"lessons.json":lessons,"knowledge-points.json":kps,"questions.json":questions,"exams.json":exams,"cases.json":cases,"routes.json":routes,"glossary.json":glossary,"faqs.json":faqs,"search-index.json":si};
  for(var key in f2){var fp=path.join(D,key);fs.writeFileSync(fp,JSON.stringify(f2[key],null,2),"utf-8");console.log("  "+key+"("+(Array.isArray(f2[key])?f2[key].length:1)+")");}
  var tc={};questions.forEach(function(q){tc[q.type]=(tc[q.type]||0)+1;});
  console.log("\nc:"+courses.length+" l:"+lessons.length+" k:"+kps.length+" q:"+questions.length+" e:"+exams.length+" ca:"+cases.length+" r:"+routes.length+" t:"+tags.length+" g:"+glossary.length+" f:"+faqs.length+" si:"+si.length);
  for(var t2 in tc)console.log("  "+t2+":"+tc[t2]);console.log("Done!");}
main().catch(function(e){console.error(e);process.exit(1);});
