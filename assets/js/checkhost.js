"use strict";var CheckHost=(function(){function API(args){if(args===undefined)
args={}
this.api_uri=args["apiUri"]||"https://thingproxy.freeboard.io/fetch/https://check-host.net";this.resultInterval=2000;this.resultWaitTime=60;}
API.prototype.check=function(args){if(args["host"]==null)
throw("Missing host");if(args["type"]==null)
throw("Missing type");var host=args["host"];var type=args["type"];var checkArgs=args["options"];if(checkArgs==null)
checkArgs={}
checkArgs["host"]=host;var that=this;var requestResultCallback=args["resultFull"];var partialResultCallback=args["resultPartial"];var initCallback=args["init"];var errorCallback=args["error"];if(args["resultDisplayer"]){var resultDisplayer=args["resultDisplayer"];if(!(partialResultCallback||requestResultCallback)){partialResultCallback=function(results){for(var node in results){resultDisplayer.display(node,results[node]);}};};if(!initCallback){initCallback=function(nodes){resultDisplayer.createResultTable(nodes);}};if(!errorCallback){errorCallback=function(error){resultDisplayer.displayFatalError(error)}};}
if(!requestResultCallback)requestResultCallback=function(){};if(!partialResultCallback)partialResultCallback=function(){};if(!initCallback)initCallback=function(){};if(!errorCallback)errorCallback=function(){};this._apiRequest("check-"+type,checkArgs,function(result){var request_id=result.request_id;var nodes=result.nodes;initCallback(nodes);var check_result=new CheckResultPing(result.nodes);var resultCollecting=function(){if(check_result.unfinishedNodes().length>0){window.setTimeout(function(){that._apiRequest("check-result/"+request_id,null,function(result){var partialResults=check_result.storeResults(result);partialResultCallback(partialResults);resultCollecting();},errorCallback);},that.resultInterval);return;}
requestResultCallback(check_result.results);};resultCollecting();},errorCallback);};API.prototype._apiRequest=function(request,args,success,error){error=error||console.error;var uri=this.api_uri+'/'+request+'?'+this._buildQueryString(args);var request=new XMLHttpRequest();request.open("GET",uri);request.setRequestHeader('Accept','application/json');request.onload=function(){var response=JSON.parse(this.responseText);if(response.error!==undefined)
return error(response.error);success(response);}
request.onerror=function(e){error("An error occurred while requesting "+uri);}
request.send(null);}
API.prototype._buildQueryString=function(args){var items=new Array;for(var key in args){var value=args[key];items.push(encodeURIComponent(key)+'='+encodeURIComponent(value));}
return items.join('&')}
var lang=new Object();function _(lexem){return lang[lexem]||lexem;}
function CheckResult(nodes){this.nodes=nodes;this.results=new Object;};CheckResult.prototype.storeResults=function(results){var new_results=new Object;for(var node_name in results){var r=results[node_name];if(r==null)
continue;if(this.nodes[node_name]===undefined)
continue;this.results[node_name]=r;new_results[node_name]=r;}
return new_results;}
CheckResult.prototype.unfinishedNodes=function(){var nodes=new Array();for(var node_name in this.nodes){if(this.results[node_name]===undefined)
nodes.push(node_name)}
return nodes;}
CheckResult.prototype.removeUnfinishedNodes=function(){var nodes=this.unfinishedNodes();for(var i in nodes){delete this.nodes[nodes[i]];}}
function CheckResultPing(nodes){CheckResult.call(this,nodes);}
CheckResultPing.prototype=Object.create(CheckResult.prototype);function CheckResultDisplayer(args){if(args===undefined)
args={};this.api_uri=args["apiUri"]||'//check-host.net';this.container=args["container"]||document.getElementById("check-host_container")
if(this.container==null)
throw new Error("Unable to find container element, please specify \"container\" attribute");this.idPrefix=args["idPrefix"]||'';}
CheckResultDisplayer.prototype.displayFatalError=function(error){var errorContainer=document.createElement("div");errorContainer.className="check-host_error";errorContainer.innerText=error;this.container.innerHTML='';this.container.appendChild(errorContainer);}
CheckResultDisplayer.prototype.displayMessage=function(node,type,message,row){var id=this.idPrefix+"check-host_result_";if(typeof row!=="undefined"){id+=row+"_"+node;}else{id+=node;}
if(type)
type='check-host_'+type;var el=document.getElementById(id);el.innerHTML='<div class="'+type+'"></div>';el.childNodes[0].innerHTML=message;}
CheckResultDisplayer.prototype.displayInternalError=function(node,message){document.getElementById(this.idPrefix+"check-host_result_"+node).parentNode.className+=" check-host_result_internal_error";this.displayMessage(node,"error",message);}
CheckResultDisplayer.prototype.display=function(node,result){if(result==null||(result!=null&&typeof(result)=="object"&&result[0]==null))
{this.displayInternalError(node,_("Check server is down"));return true;}
return false;}
CheckResultDisplayer.prototype.generateLocationTag=function(nodeLocation){return '<td class="check-host_location">'+
'<div class="check-host_node_info">'+
'<div class="check-host_flag check-host_flag_'+nodeLocation[0]+'"></div>'+
'<span>'+[nodeLocation[1],nodeLocation[2]].join(', ')+'</span>'+
'</td>';}
CheckResultDisplayer.prototype.generatePreloader=function(){return '<div class="check-host_preloader" title="in progress..." ></div>';}
function PingCheckResultDisplayer(args){CheckResultDisplayer.call(this,args);}
PingCheckResultDisplayer.prototype=Object.create(CheckResultDisplayer.prototype);PingCheckResultDisplayer.prototype.createResultTable=function(nodes){this.container.innerHTML='<table class="check-host_ping check-host_result-table">'+
'<thead>'+
'<tr>'+
'<th>Location</th>'+
'<th>Result</th>'+
'<th>RTT <span class="check-host_legend">min/avg/max</span></th>'+
'</tr>'+
'</thead>'+
'<tbody>'+
'</tbody>'+
'</table>';this.createResultTableRows(this.container.childNodes[0],nodes);}
PingCheckResultDisplayer.prototype.createResultTableRows=function(tableEl,nodes){var tbody=tableEl.getElementsByTagName("tbody")[0];var nodesArray=Object.keys(nodes);nodesArray.sort();for(var nodeIndex in nodesArray){var node=nodesArray[nodeIndex];var nodeLocation=nodes[node];var row=document.createElement("tr");row.innerHTML=this.generateLocationTag(nodeLocation)+
'<td class="check-host_result" id="'+this.idPrefix+'check-host_result_'+node+'">'+this.generatePreloader()+'</td>'+
'<td class="check-host_result-rtt" id="'+this.idPrefix+'check-host_result_rtt_'+node+'"><div></div></td>';tbody.appendChild(row);}}
PingCheckResultDisplayer.prototype.display=function(node,result){if(CheckResultDisplayer.prototype.display.call(this,node,result))
return true;if(typeof(result)=="object"){if(result[0][0]==null){this.displayMessage(node,"error",_("Unknown host"));return true;};var total=0;var received=0;var time_total=0;var time_min=0;var time_max=0;var first=1;for(var i in result[0]){total++;var status=result[0][i][0];var time=result[0][i][1];if(status=="ERROR"){this.displayInternalError(node,_("Server error"));return true;}else if(status=="OK"){received++;time_total+=time;if(first){first=0;time_max=time;time_min=time;}else{if(time>time_max){time_max=time;};if(time<time_min){time_min=time;}};}}
var status_result=received+" / "+total;var msg_type='';if(received<total)
msg_type="error";this.displayMessage(node,msg_type,status_result);if(received>0){time_min*=1000;time_max*=1000;var time_avg=1000*(time_total/received);this.displayMessage(node,null,[time_min.toFixed(1),time_avg.toFixed(1),time_max.toFixed(1)].join("/")+" "+_('<span class="check-host_legend">ms</span>'),"rtt");}
return true;}
return false;}
function HTTPCheckResultDisplayer(args){CheckResultDisplayer.call(this,args);}
HTTPCheckResultDisplayer.prototype=Object.create(CheckResultDisplayer.prototype);HTTPCheckResultDisplayer.prototype.createResultTable=function(nodes){this.container.innerHTML='<table class="check-host_http check-host_result-table">'+
'<thead>'+
'<tr>'+
'<th>Location</th>'+
'<th>Result</th>'+
'<th>Time</th>'+
'<th>Response</th>'+
'</tr>'+
'</thead>'+
'<tbody>'+
'</tbody>'+
'</table>';this.createResultTableRows(this.container.childNodes[0],nodes);}
HTTPCheckResultDisplayer.prototype.createResultTableRows=function(tableEl,nodes){var tbody=tableEl.getElementsByTagName("tbody")[0];var nodesArray=Object.keys(nodes);nodesArray.sort();for(var nodeIndex in nodesArray){var node=nodesArray[nodeIndex];var nodeLocation=nodes[node];var row=document.createElement("tr");row.innerHTML=this.generateLocationTag(nodeLocation)+
'<td class="check-host_result" id="'+this.idPrefix+'check-host_result_'+node+'">'+this.generatePreloader()+'</td>'+
'<td class="check-host_result-time" id="'+this.idPrefix+'check-host_result_time_'+node+'"><div></div></td>'+
'<td class="check-host_result-code" id="'+this.idPrefix+'check-host_result_code_'+node+'"><div></div></td>';tbody.appendChild(row);}}
HTTPCheckResultDisplayer.prototype.display=function(node,result){if(CheckResultDisplayer.prototype.display.call(this,node,result))
return true;if(result instanceof Array){result=result[0];if(result[0]){this.displayMessage(node,null,"OK");var code=result[3];if(result[2]){code+=" ("+result[2]+")";}
this.displayMessage(node,null,code,"code");this.displayMessage(node,null,result[1].toFixed(3)+" "+_("seconds"),"time");}else{var result_msg=result[2];var server_error_code=result[3];if(server_error_code!=null){result_msg="Server error";if(result[2]){server_error_code+=" ("+result[2]+")";}
this.displayMessage(node,"error",server_error_code,"code");this.displayMessage(node,null,result[1].toFixed(3)+" "+_("seconds"),"time");}
this.displayMessage(node,"error",_(result_msg));}
return true;}
return false;};function TCPCheckResultDisplayer(args){CheckResultDisplayer.call(this,args);}
TCPCheckResultDisplayer.prototype=Object.create(CheckResultDisplayer.prototype);TCPCheckResultDisplayer.prototype.createResultTable=function(nodes){this.container.innerHTML='<table class="check-host_tcp check-host_result-table">'+
'<thead>'+
'<tr>'+
'<th>Location</th>'+
'<th>Result</th>'+
'<th>Time</th>'+
'</tr>'+
'</thead>'+
'<tbody>'+
'</tbody>'+
'</table>';this.createResultTableRows(this.container.childNodes[0],nodes);}
TCPCheckResultDisplayer.prototype.createResultTableRows=function(tableEl,nodes){var tbody=tableEl.getElementsByTagName("tbody")[0];var nodesArray=Object.keys(nodes);nodesArray.sort();for(var nodeIndex in nodesArray){var node=nodesArray[nodeIndex];var nodeLocation=nodes[node];var row=document.createElement("tr");row.innerHTML=this.generateLocationTag(nodeLocation)+
'<td class="check-host_result" id="'+this.idPrefix+'check-host_result_'+node+'">'+this.generatePreloader()+'</td>'+
'<td class="check-host_result-time" id="'+this.idPrefix+'check-host_result_time_'+node+'"><div></div></td>';tbody.appendChild(row);}}
TCPCheckResultDisplayer.prototype.display=function(node,result){if(CheckResultDisplayer.prototype.display.call(this,node,result))
return true;if(result instanceof Array){result=result[0];if(!result.error){this.displayMessage(node,null,_("Connected"));this.displayMessage(node,null,result.time.toFixed(3)+" "+_("seconds"),"time");}else{this.displayMessage(node,"error",_(result.error));}
return true;}
return false;};return{API:API,ResultDisplayer:{"ping":PingCheckResultDisplayer,"http":HTTPCheckResultDisplayer,"tcp":TCPCheckResultDisplayer}};}());
