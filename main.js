menu_list_array = ["Veg Margherita Pizza",
"Cheese Pizza", 
"Anchovies Pizza",
"Veg Supreme"
                    ];

function getmenu(){
        var htmldata;
        menu_last_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+ '<li>'  + menu_list_array[i] + '<li>'
        }      



function add_item(){
 var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section class= 'cards'>"
for(var i=o;<menu_list_array.length;i++){

htmldata=htmldata+'<div class="card">
}=<img src="images/pizzaImg.png"/>"
+menu_list_array[i] + '</section>'
}
htmldata=htmldata+"</ol>;
document.getElementById("display_addedmenu").innerHTML = htmldata;




function add_top(){

}