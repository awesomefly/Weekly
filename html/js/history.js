function func_get_url_args()
{ 
	//var url = location.href; //获取url中"?"符后的字串
	var url = document.getElementById("page-wrapper").getAttribute("data-url");
	var args = new Object();
	var idx = url.indexOf("?");
	if ( idx != -1) { 
		var str = url.substr(idx + 1);
		strs = str.split("&"); 
		for(var i = 0; i < strs.length; i ++) {
			args[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]); 
		} 
	}
	return args;
}

function func_set_title()
{
	var args = func_get_url_args();
	var type = args["type"];
	//alert(type);
	if(type == "send"){
		$("#h_title").text("已发周报");	
	}else if(type == "draft"){
		$("#h_title").text("草稿箱");	
	}else if(type == "review"){
		$("#h_title").text("待审阅");	
	}else if(type == "reviewed"){
		$("#h_title").text("已审阅");	
	}
}
function func_set_loaduri(data)
{
	var args = func_get_url_args();
	var type = args["type"];
	var uri = "new-report.html?t="+$.now()+"&id="+data;
	if(type == "send" || type == "reviewed"){
		uri = uri + "&op=readonly";
	}else if(type == "draft"){
		uri = uri + "&op=edit";
	}else if(type == "review"){
		uri = uri + "&op=review";
	}
	alert(uri);
	document.getElementById("page-wrapper").setAttribute("data-url", uri);
	$('#page-wrapper').load(uri, null);
}
function func_set_data()
{
	$('#dataTables-example').dataTable({
		"processing": true,
		"serverSide": true,
		"ajax":"objects.txt",
		"columns": [
			{ "data": "时间" },
			{ "data": "项目组" },
			{ "data": "汇报人" },
			{ "data": "主管" },
			{ "data": "评分" },
		]
	});

	$('#dataTables-example tbody').on('click', 'tr', function () {
		var name = $('td', this).eq(0).text();
		//alert( 'You clicked on '+name+'\'s row' );
		func_set_loaduri(name);
	} );
}

