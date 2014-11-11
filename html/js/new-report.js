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

function func_set_editable()
{
	var args = func_get_url_args();
	var type = args["op"];
	//alert(type);
	if(type == "edit"){
		document.getElementById("report_body").setAttribute("contentEditable",true);
	}else if(type == "readonly"){
		//默认只读
		document.getElementById("btn_save_to_draft").style.display="none" ;
		document.getElementById("btn_save").style.display="none" ;
		document.getElementById("btn_add_row").style.display="none" ;
		
		var controls=document.getElementsByName("td_opr");
		for(var i=0;i<controls.length;i++)//这里是length还是count记不清了
		{
			    controls[i].style.display="none";
		}

	}else if(type == "review"){
		document.getElementById("review_body").setAttribute("contentEditable",true);
		document.getElementById("btn_save_to_draft").style.display="none" ;
		document.getElementById("btn_add_row").style.display="none" ;
		
		var controls=document.getElementsByName("td_opr");
		for(var i=0;i<controls.length;i++)//这里是length还是count记不清了
		{
			    controls[i].style.display="none";
		}

	}

}
function addRow(tbodyID)  
{  
	var bodyObj=document.getElementById(tbodyID);  
	if(bodyObj==null)   
	{  
		alert("Body of Table not Exist!");  
		return;  
	}  
	var rowCount = bodyObj.rows.length;  
	//var cellCount = bodyObj.rows[0].cells.length;  
	var newRow = bodyObj.insertRow(rowCount++);    
	 newRow.innerHTML = "<tr>  <td contentEditable=\"false\">1</td>  <td></td>    <td></td>  <td></td>  <td></td>  <td name=\"i_opr\" contentEditable=\"false\" onClick=\"func_rm_row(this)\"><i class=\"fa fa-minus-circle fa-fw\"></i></td></tr>";
	/*for(var i=0;i<cellCount;i++)  
	{  
		var cellHTML = bodyObj.rows[0].cells[i].innerHTML;  
		if(cellHTML.indexOf("none")>=0)  
		{  
			cellHTML = cellHTML.replace("none","");  
		}  
		//newRow.insertCell(i);//.innerHTML=cellHTML;  
	}*/
}  
function removeRow(tdObj)  
{  
	if(tdObj==null) return;  
	var parentTR = tdObj.parentNode;  
	var parentTBODY = parentTR.parentNode;  
	parentTBODY.removeChild(parentTR);  
} 
function func_rm_row(tdObj)
{
	removeRow(tdObj);  
	func_reflesh_rowid();
}
function func_add_row()
{
	addRow('report_body');  
	func_reflesh_rowid();
}
function func_reflesh_rowid()
{
	var oTable = document.getElementById("report_body"); 
	for(var i=0;i<oTable.rows.length;i++){ 
		oTable.rows[i].cells[0].innerHTML = (i+1); 
	} 
}
