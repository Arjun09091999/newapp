
const join_input=document.getElementById('join-input');
const join_btn=document.getElementById('join-btn');
const cont=document.getElementById('cont');
const message_input=document.getElementById('message-input');
const message_btn=document.getElementById("'message-btn");

let username='';

join_btn.addEventListener('click',(event)=>{
    event.preventDefault();
    username=join_input.value;
  
        document.querySelector("#main-div").style.display="block";
        document.querySelector("#form").style.display="none";
    
})

message_btn.addEventListener('click',(e) => {
    e.preventDefault();
     const data={
        username:username,
        message:message_input.value
     }


   addmessagsend(data)

})


function addmessagsend(data){
    const mgdiv=document.createElement("div");
    mgdiv.innerText=`${data.username}:${data.message}`
    mgdiv.setAttribute('class','send')
    cont.appendChild(mgdiv);
    document.getElementById('message-input').value='';


}
function addmessagre(data){
    const mgdiv=document.createElement("div");
    mgdiv.innerText=`${data.username}:${data.message}`
    mgdiv.setAttribute('class','send')
    cont.appendChild(mgdiv);
    document.getElementById('message-input').value='';


}