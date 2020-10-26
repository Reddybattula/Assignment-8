/*eslint-env browser*/

var employee_list;
    
employee_list = [["Sally Smith", "Quality Assurance", 3423],
                    ["Mark Martin", "VP Sales", 3346],
                    ["John Johnson", "Marketing", 3232],
                    ["John Vickey", "Software", 3032],
                    ["Cole Britt", "Site Manager", 3144]
                    ];
var $ = function (id) {
    "use strict";
    return document.getElementById(id);
};
function showTable() {
    "use strict";
    var html;
    var i;
    html = "<tr><th>Name</th><th>Title</th><th>Extension</th><th></th></tr>";
    for(i=0; i<employee_list.length; i++) {
      
            
            html = html + "<tr><td>"+employee_list[i][0]+"</td><td>"+employee_list[i][1]+"</td><td>"+employee_list[i][2]+"</td><td> <input type=\"button\" id=\"delete\" value=\"delete\" class=\"delbtn\" onclick=\"deleteRow(this)\"></td></tr>";
        
    }
    $("emp_table").innerHTML = html;
}
function deleteRow(btn) {
    "use strict";
    var i;
   var row = btn.parentNode.parentNode;
   var rowIn = btn.parentNode.parentNode.rowIndex;
    
   row.parentNode.removeChild(row);
    
     for (i=1; i<=employee_list.length; i++) {
        if (i === rowIn){
        var employee = employee_list.splice(i - 1, 1);
        window.console.log(employee + ' was deleted.');
           
        }
         
         
     }
    
    $("count").innerHTML= "showing "+employee_list.length+" employees";
    
}

var funadd = function () {
     "use strict";
    var ename, title, ext, namerequired, titlerequired, extrequired;
    
    ename = $("emp_name").value;
    title = $("title").value;
    ext = $("extension").value;
    
    //validation
    
    if (ename.length > 1) {
        $("namemsg").innerHTML = "";
    }
    else {
        $("namemsg").innerHTML = "* required";
    }
    if (title.length > 1) { 
    $("titlemsg").innerHTML = "";
    }
    else {
        $("titlemsg").innerHTML = "* required";
    }
    if (ext.length > 1) { 
        $("extmsg").innerHTML = "";
        if (isNaN(ext)) {
            $("extmsg").innerHTML = "provide valid number";
        }
        else {
            $("extmsg").innerHTML = "";
        }
    }
    else {
        $("extmsg").innerHTML = "* required";
        
    }
    
    
    if (ename.length > 1 && title.length > 1 && ext.length > 1 && !isNaN(ext)) {
         employee_list.push([ename,title,ext]);
       
    $("count").innerHTML= "showing "+employee_list.length+" employees";
    showTable();
    
    //clear input boxes
    $("emp_name").value = " ";
    $("title").value = " ";
    $("extension").value = " ";
    $("namemsg").innerHTML = " ";
    $("titlemsg").innerHTML = " ";
    $("extmsg").innerHTML = " ";
        
    }
    
     
    
};

window.addEventListener("load", function () {
    "use strict";
    
    showTable();
     
    $("count").innerHTML= "showing "+employee_list.length+" employees";
    
    $("add").addEventListener("click", funadd);
    
    
});