menu_list_array=["Veggie Pizaa", "Cheese burst pizza","Las vegas Pizza", "Mac and cheese pizza","Peppy paneer pizza"]
function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    for(var i=0; i<menu_list_array.length;i++){
        htmldata=htmldata+'<li>'+menu_list_array[i]+ '</li>'
    }
    htmldata=htmldata+"</ol>"
    document.getElementById("menu").innerHTML= htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
menu_list_array.sort();
htmldata="<section class='cards'>"
for(var i=0; i<menu_list_array.length;i++ ){
    htmldata=htmldata+'<div class="cards">'+'<img style="width:50px; height:50px;" src="images/pizzaImg copy.png">'+menu_list_array[i]+'</div>'
}
htmldata=htmldata+"</section>"
document.getElementById("display_addmenu").innerHTML=htmldata;
}