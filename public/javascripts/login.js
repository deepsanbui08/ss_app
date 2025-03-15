
const btn=document.querySelector("#submit")
btn.addEventListener("click",()=>{
    const aadhar=document.querySelector("#Aadhar_No").value;
    const password=document.querySelector("#pw").value;
    
    const actAadhar=/^[0-9]{12}$/;
    const actpw=/^[\w \W]{6,12}$/;

    //Aadhar Number validation
    if(actAadhar.test(aadhar))
    {
        const msg=document.querySelector("#msgaadhar");
        msg.textContent=`Checked!`;
        msg.parentElement.className="success";
    }
    else
    {
        const msg=document.querySelector("#msgaadhar");
        if(aadhar.length<12 && aadhar.length>0)
            msg.textContent=`Aadhar Number should be of 12 digits.`;
        else if(aadhar=="")
            msg.textContent=`Aadhar Number is empty!!Please enter the Aadhar Number.`;
        else
            msg.textContent=`Invalid Aadhar Number`;
        msg.parentElement.className="error";
    }
    //Password Validation
    if(actpw.test(password))
    {
        const msg=document.querySelector("#msgpw");
        msg.textContent=`Checked!`;
        msg.parentElement.className="success";
    }
    else
    {
        const msg=document.querySelector("#msgpw");
        if((password.length>0 && password.length<6 )|| password.length>12)
            msg.textContent=`Password should be within the range from 6 to 12 characters`;
        else if(password=="")
            msg.textContent=`Password is empty!!Please enter the password`;
        msg.parentElement.className="error";
    }
    
});
    