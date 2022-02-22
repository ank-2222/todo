showtask();

document.getElementById("addshow").addEventListener("click",addshow);


 
function addshow(e){
e.preventDefault();
  const inputvalue= document.getElementById("input-content").value;

   

 //creating div 
 if(inputvalue!=""){
    let webtask= localStorage.getItem("localtask");
    if(webtask==null) taskobj=[];
    else taskobj=JSON.parse(webtask);
    
    taskobj.push(inputvalue);
    localStorage.setItem("localtask",JSON.stringify(taskobj));
    showtask();
    document.getElementById("input-content").focus();

    document.getElementById("input-content").value='';
    
    
//  document.getElementById("show-area").classList.add("p-4","rounded");
// const section= document.createElement("div");
// section.classList.add("section","d-flex","justify-content-between","bg-info","rounded","my-3");
// const part1=document.createElement("div");
// part1.classList.add("input-div");
// const part2=document.createElement("div");
// part2.classList.add("d-flex","justify-content-around")
// const textarea= document.createElement("input");
// textarea.classList.add("m-2","text");
// textarea.type="text";
// textarea.setAttribute('readonly','readonly');
// part1.appendChild(textarea);

// const del= document.createElement("button");

// del.classList.add("m-2","delete");

// del.innerHTML="Delete";
// del.setAttribute('onclick','return this.parentNode.parentNode.remove()');
// part2.appendChild(del);

// section.appendChild(part1);
// section.appendChild(part2);

// textarea.value=inputvalue;


// document.getElementById("show-area").appendChild(section);


// textarea.addEventListener("click",()=>{
  
//     textarea.removeAttribute("readonly");
//       textarea.focus();
// })


}}


function showtask(){

     
    let webtask= localStorage.getItem("localtask");
    if(webtask==null) taskobj=[];
    else taskobj=JSON.parse(webtask);
    let html='';
    taskobj.forEach((data , index) => {
        
        html+=
        `
        <div class="section d-flex justify-content-between bg-warning my-3 rounded" >
      
        <p class=" m-2 text " >${data}</p>
      
    
        <button class="m-2 del bg-dark rounded " type="button" onclick="deletetask(${index})" >Delete</button>
      
    </div>
        `
        // <div class="d-flex justify-content-around"> 
    });
    document.getElementById("show-area").innerHTML=html;

}

function deletetask(index){
    let webtask=localStorage.getItem("localtask");
    let taskobj=JSON.parse(webtask);
    taskobj.splice(index,1);
    localStorage.setItem("localtask",JSON.stringify(taskobj));
    showtask();
}

// let searchbox=document.getElementById("searchbox");
// searchbox.addEventListener("input",()=>{
//     // console.log("in")
//     let boxlist=document.querySelectorAll(".section");
//     // console.log(Array.from(boxlist));
//    Array.from(boxlist).forEach(data=>{
//         // console.log(data);
//         let searchedtext= data.getElementsByTagName("p")[0].innerHTML;
//         // console.log(searchedtext);
//         let searchboxval=searchbox.value;
//         // console.log(searchboxval);
//         let reg = new RegExp(searchboxval,'gi');
//         if(searchedtext.match(reg))
//       {
//         data.classList.add("d-table-row");
//         console.log("here");
      
//       } 
    
//         else 
//         data.classList.add("d-none");

   
//     })
  
// })
