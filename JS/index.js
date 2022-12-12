const url= "https://api.npoint.io/38aebdb16c6ba20c7efb/films/"
let info = document.getElementById("append")
let leftList = document.getElementById("list")
const searchBtn1 = document.getElementById("searchBtn")
const input =document.getElementById("search").value

searchBtn1.addEventListener('click', flatMovies)


fetch(`${url}${input}`).then((response) => response.json())
.then(json=>{json.map(data=>
   
    {console.log(data)
        info.append(flatMovies(data))
    
    })})
    
// funtion to print movies on dom
 
function flatMovies({title,runtime, showtime, description,poster,tickets_sold,id}) {
  
    let details =document.createElement("container")
   details.innerHTML =`
                        <div id="append" class="movie-result">
                        
                                <div class="movie-item ">
                                <div class="movie-img">
                                    <img src="${poster}" alt="poster">
                                </div>
                                <div class="movie-name">
                                    <h5>${title}</h5>
                                    <p><em>${description}/em></p>
                                    <p class="card-text">Runtime:  ${runtime}</p>
                                    <p class="card-text">Show Time:  ${showtime}</p>
                                    <p>Remaining tickets<p>
                                    <p id="span"><u>${tickets_sold}</u></p>
                                    <button onclick="totalClick(-1)" id="tickets${id}" type="button" class="btn btn-danger">Get ticket</button>
                                </div>
                                </div>
                                  
                         </div>
    `;
 


    return details
}
// function for list

fetch(`${url}`).then((response) => response.json())
.then(json=>{json.map(data=>
   
    {console.log(data)
    list.append(flatList(data))
    
    })})
function flatList({title}) {
    let list = document.createElement("ol")
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

function totalClick(clicks){
    const totalClicks= document.getElementById("span")
    const sumvalue = parseInt(totalClicks.innerText) + clicks
    totalClicks.innerText = sumvalue
    
    if(sumvalue < 0){
        totalClicks.innerText = 0
        alert("sorry tickets diplited")
    }
    return totalClicks
     }
    totalClick()