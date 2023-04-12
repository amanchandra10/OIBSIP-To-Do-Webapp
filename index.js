// console.log("✔")
const table = document.getElementsByTagName("tbody")[0];
const form = document.getElementsByClassName("form")[0];
form.addEventListener('submit', adddatatotable);

function adddatatotable(e){
  // console.log("submited");
  e.preventDefault();
  getdata();
  form.reset();
   
 }

 
 function getdata() {
  const title1=document.getElementById("input1").value;
  const discription=document.getElementById("Discription").value;
 
    const data = {
      title1,
      discription
    }
    // console.log(data);  
    adddata(data)
 }


 function adddata(add){
table.innerHTML +=
      `
      <tr>
        <th><input id="checkbox" type="checkbox" name="checked"></th>
        <th>${add.title1}</th>
        <th><div><p>${add.discription}</p></div></th>
        <th><button style="Color:red" onclick="deleterow(this)">Delete</button></th>
      </tr>
      `
}

// const done = document.getElementById("checkbox");
// console.log(done);

function deleterow(d) {
  //  console.log(d.parentNode.parentNode.rowIndex);
   var i = d.parentNode.parentNode.rowIndex;
   table.deleteRow(i-1);

}


// Dark mode

let btn = document.getElementById('btndark');
btn.addEventListener('click',(btn1)=>{
    const cssfile=document.getElementById("cssfile");
    const btn12=document.getElementById("btndark")
    if (btn12.innerHTML == 'Dark mode') {
        cssfile.setAttribute('href','./dark_mode.css');
        btn12.innerHTML="Light mode";
    }
     else {
        cssfile.setAttribute('href','./light_mode.css');
        btn12.innerHTML="Dark mode";
    }  
  })


