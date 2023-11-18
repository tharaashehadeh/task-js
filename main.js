var httpRequest = new XMLHttpRequest();
var result = [];
function getNews(pizzaa){
httpRequest.open("GET",`https://forkify-api.herokuapp.com/api/search?q=${pizzaa}`);
httpRequest.send();
httpRequest.onreadystatechange = function(){
    if(httpRequest.readyState==4){
        result = JSON.parse(httpRequest.response).recipes;
        displayData();
    }
}
}
function displayData(){
    var data = "";
    for(var i=0;i<result.length;i++){

        data +=`
       <div class="col-lg-3">
        <div class="recipe bg-info">
        <img src="${result[i].image_url}" class="img-fluid "/>
        <h2>${result[i].title}</h2>
        <a href="final.html?rId=${result[i].recipe_id}">read more</a>
        </div>
        </div>
        `

        ;
    }

    document.getElementById("postSection").innerHTML=data;
}

var allLinks= document.querySelectorAll(".nav-link");
for(var i=0;i<allLinks.length;i++){
    allLinks[i].addEventListener('click',function(e){
        getNews(e.target.innerHTML)

    })
}
getNews("pizza");