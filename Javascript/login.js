
username=document.getElementById("userid").value;
password=document.getElementById("password").value;
log=document.getElementById("log");

function Validate(){
    if(username=="Prince" && password==1234)
       log.innerHtml=`Login Success`;
    else
        log.innerHtml=`Login Failed`;
    }

