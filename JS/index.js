const url= "https://api.npoint.io/38aebdb16c6ba20c7efb/films/"
let info = document.getElementById("append")
let leftList = document.getElementById("list")

fetch(`${url}`).then((response) => response.json())
.then(json=>{json.map(data=>
   
    {console.log(data)
        info.append(flatMovies(data))
    
    })})
    
// funtion to print movies on dom
 
function flatMovies({title,runtime, showtime, description,poster,tickets_sold}) {
    let details =document.createElement("container")
   details.innerHTML =`
   
   <div class="row d-flex gy-3 my-3">
   <div class=" col-3 ">
     <div id="append" class=" card" <div id="append" class=" card d-flex flex-row" style="width: 18rem;">

              <div id="append" class=" card">
      
                <img id="movies"  src="${poster}" alt="">
                <div class="card-body">
                  <h5 class="card-title font-weight-bold">${title}</h5>
                  <p><em>${description}</em></p>
                  <p class="card-text">run time:  ${runtime}</p>
                  <p class="card-text">show Time:  ${showtime}</p>
                  <p id="tickets" class="span"><u>Remaining ticket: ${tickets_sold}</u></p>
                  
                  <button  type="button" class="btn btn-danger">Get ticket</button>
                </div>
              
                </div>
                </div>
                
    `;
    details.querySelector('#tickets').addEventListener('click', () =>{
        tickets_sold -=1
    details.querySelector('span').textContent = tickets_sold

    })
    return details
}
// function for list

fetch(`${url}`).then((response) => response.json())
.then(json=>{json.map(data=>
   
    {console.log(data)
    list.append(flatList(data))
    
    })})
function flatList({title}) {
    let list =document.createElement("ol")
   list.innerHTML =`
 
   <ul class="list-group">
                <li class="list-group-item mt-2">${title}</li>
                
              </ul>
        
        
    `;
    return list
}
flatList()

// function vote({tickets_sold}){
//     let count =parseInt(tickets_sold)
//     count.innerHTML = tickets_sold -1
// if(count <=0){
//     alert("ticket  diplited")
// }
// return count
// }
// vote()