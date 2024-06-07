console.log("script working k12")
let main = document.getElementById("main")
let data = [ {image : "abc", heading: "Assessments", para: "lorem ipsum dolar sit "}, {image : "abc", heading: "Assessments", para: "lorem ipsum dolar sit "}, {image : "abc", heading: "Assessments", para: "lorem ipsum dolar sit "}]

let text = ""
let i = 0
for(let dataitem of data){
  text = text + `<div class="card rounded-0" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${dataitem.heading}</h5>
    <p class="card-text">${dataitem.para}</p>
   
  </div>
</div>`
  
}

main.innerHTML = text;