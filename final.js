
var th= new URLSearchParams(window.location.search);
var par_id= th.get("rId");
var thara= new XMLHttpRequest();
var result1= [];
function getId(recipe_id){
    thara.open("GET",`https://forkify-api.herokuapp.com/api/get?rId=${recipe_id}`);
    thara.send();
    thara.onreadystatechange=function(){
    if(thara.readyState==4){
        result1=JSON.parse(thara.response).recipes;
        displayId();
    }
}
}
function displayId(){

    data1="";
    data1=`<p>${result1.ingredients}</p>`;
    document.getElementById("finall").innerHTML=data1;
}
getId(par_id);