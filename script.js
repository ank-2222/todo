showtask();

document.getElementById("addshow").addEventListener("click", addshow);
 
//keyboard "enter key" functioning
document.getElementById("input-content").addEventListener("keyup",function(event){
if(event.keyCode===13){
  event.preventDefault();
  addshow();
  
}

})

//adding element
function addshow() {
  const inputvalue = document.getElementById("input-content").value;

  if (inputvalue != "") {
    let webtask = localStorage.getItem("localtask");
    if (webtask == null) taskobj = [];
    else taskobj = JSON.parse(webtask);

    taskobj.push(inputvalue);
    localStorage.setItem("localtask", JSON.stringify(taskobj));
    showtask();
    document.getElementById("input-content").focus();

    document.getElementById("input-content").value = "";
  }
}

//deleting function

function deletetask(index) {
  let webtask = localStorage.getItem("localtask");
  let taskobj = JSON.parse(webtask);
  taskobj.splice(index, 1);
  localStorage.setItem("localtask", JSON.stringify(taskobj));
  showtask();
}


//show task

function showtask() {
  let webtask = localStorage.getItem("localtask");
  if (webtask == null) taskobj = [];
  else taskobj = JSON.parse(webtask);
  let html = "";
  taskobj.forEach((data, index) => {
    html += `
        <div class="section  justify-content-between bg-warning my-3 rounded align-item-center" >
        <p class=" m-2 text " >${data}</p>
        <button class="m-2 del bg-dark rounded " type="button" onclick="deletetask(${index})" >Delete</button>
      
    </div>
        `;
  });
  document.getElementById("show-area").innerHTML = html;
}


//search List

let searchbox = document.getElementById("searchbox");
searchbox.addEventListener("input", function(){
  let boxlist = document.querySelectorAll(".section");
  Array.from(boxlist).forEach(function(item){
    let searchtextval=item.getElementsByTagName("p")[0].innerText;
    let searchboxval= searchbox.value;
   let nreg= new RegExp(searchboxval,'gi');
    if(searchtextval.match(nreg)){
     item.style.display="flex";
     }
    else {
     item.style.display="none";
   }

  })
});

//search box focus
searchbox.addEventListener("focusout",function(e){
  e.preventDefault();
  searchbox.value='';
  showtask();
})

