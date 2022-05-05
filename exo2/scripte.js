window.addEventListener("load", () => {
  callApiForUser();


  document.querySelector('#options').addEventListener("change",(e)=> callApiForPost(e));
  
  // const myTimeout = setTimeout(callApiForUser, 5000);

});

const callApiForUser = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((Response) => Response.json())
    .then((json) => {
        let renderView = "";
        console.log(json);

        json.map((value,key)=>{
            renderView+=`
            <option value="`+value.id+`">`+value.name+`</option>
            
            `
        })
        
        
        document.getElementById("options").innerHTML = renderView
    })
};

const callApiForPost =(e) =>{
    console.log(e.currentTarget.value)
    fetch("https://jsonplaceholder.typicode.com/posts?userId=" + e.currentTarget.value)
    .then((Response) => Response.json())
    .then((json) => {
        let renderView = "";
        console.log(json);

        json.map((value,key)=>{
            renderView+=`
            <tr>
            <th>`+value.id+`</th>
            <th>`+value.userID+`</th>
            <th>`+value.tittle+`</th>
            <th>`+value.body+`</th>
            </tr>
            `
        })
        
        document.getElementById("table").innerHTML = renderView
    })
};