var func_load_trigger = function( ev )
{
	//alert($("#page-wrapper").data-url);
	ev.preventDefault();
	//alert(ev.target.href);
	var uri = ev.target.href ;
	if (uri.indexOf('?') == -1){
		uri =  uri + '?t=' + $.now(); 
	}else{
		uri =  uri + '&t=' + $.now(); 
	}
	
	document.getElementById("page-wrapper").setAttribute("data-url", uri);
	$('#page-wrapper').load(uri, null);
}

var func_load_complete = function( data )
{
	$("#new-report").click(func_load_trigger);  	
	$("#history-report").click(func_load_trigger);  	
	$("#userinfo").click(func_load_trigger);  	
	$("#change-psw").click(func_load_trigger);  	
	$("#message-conf").click(func_load_trigger);  	
	$("#relative").click(func_load_trigger);  	
	$("#add-user").click(func_load_trigger);  	
	$("#review").click(func_load_trigger);  	
	$("#reviewed").click(func_load_trigger);  	
	$("#draft").click(func_load_trigger);  	
}    
