window.addEventListener("load",()=>{

    document.querySelector('#button').addEventListener("click",()=> callApi())
})


const callApi = ()=>{
console.log("api");



let url = "https://jsonplaceholder.typicode.com/posts";

const xhttp = new XMLHttpRequest();

xhttp.onload = function(){
if(this.readyState==4 && this.status==200){
    let response =JSON.parse(this.responseText);
    let renderView = "";
    
    response.map((value,key)=>{
        renderView += `
        <tr>
        <th>`+value.id+`</th>
        <th>`+value.userID+`</th>
        <th>`+value.tittle+`</th>
        <th>`+value.body+`</th>
        </tr>
        `
    })
    document.querySelector("#jstable").innerHTML =renderView;
}
}



xhttp.open("GET",url);
xhttp.send();

}



