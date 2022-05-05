// window.addEventListener('load',()=>{

// let xhttp = new XMLHttpRequest();

// xhttp.onload =function(){
// if(this.readyState== 4 && this.status==200){
//     // let response = JSON.parse(this.responseText);
// }
// };
// xhttp.open("get,url,true");
// xhttp.send();

// },false);

// }
const btn = document.querySelector("#button");
console.log(btn);

btn.addEventListener("click", loadTableJson () );




function loadTableJson() {
const tableau = document.querySelector("tbody");
  let url = "https://jsonplaceholder.typicode.com/posts";
  const request = new XMLHttpRequest();

  request.open("get",url);
  request.onload = () => {
    try {
      const json = JSON.parse(request.responseText);
      populateRankings(json);
    } catch (e) {
      console.warn("bin jsp");
    }
  };
  request.send();

  function populateRankings(json) {
      json.forEach(element => {
          document.createElement()
      });
     console.log(json);
  }
}

