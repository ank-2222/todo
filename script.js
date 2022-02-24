showtask();

document.getElementById("addshow").addEventListener("click", addshow);
 


// //keyboard "enter key" functioning
// document.getElementById("input-content").addEventListener("keyup",function(event){

// if(event.keyCode===13){
//   event.preventDefault();
 
//   addshow();
  
// }

// })

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
  let inputval=document.getElementById("input-content");
  inputval.value="";

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
        <button class="m-2 edit bg-dark rounded " type="button" onclick="edittask(${index})" >Edit</button>
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

//edittask function

function edittask(index){
  document.getElementById("getindex").value=index;
  let webtask= localStorage.getItem("localtask");
  if(webtask==null) taskobj=[];
  else  taskjob= JSON.parse(webtask);
  let inputcontent= document.getElementById("input-content");
  inputcontent.value=taskjob[index];
  let savebtn=document.getElementById("saveshow");
  let addbtn= document.getElementById("addshow");
  addbtn.style.display="none";
  savebtn.style.display="flex";
  inputcontent.onfocus();
}

//savetask
let savebtn= document.getElementById("saveshow");
savebtn.addEventListener("click",savetask);

function savetask(){
  let addbtn= document.getElementById("addshow");

  let inputval=document.getElementById("input-content");
if(inputval!=''){
  let indexnum=document.getElementById("getindex").value;
  let webtask= localStorage.getItem("localtask");
  if(webtask==null) taskobj=[];
  else  taskjob= JSON.parse(webtask);
  taskjob[indexnum]=inputval.value;
 
  localStorage.setItem("localtask",JSON.stringify(taskjob));
  inputval.value="";
  showtask();
  addbtn.style.display="flex";
  savebtn.style.display="none";
}
}
