function showtable() {  
    var mainTable = document.getElementById("mainTable");  
    var li = mainTable.getElementsByTagName("tr");  
    for ( var i = 1; i <= li.length; i++) {  
        li[i].style.backgroundColor = "transparent";  
        li[i].onmouseover = function() {  
            this.style.backgroundColor = "#87CEEB";  
        }  
        li[i].onmouseout = function() {  
            this.style.backgroundColor ="transparent";  
        }  
    }  
}  
showtable(); 