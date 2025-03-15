
const btn=document.querySelector("#submit")
btn.addEventListener("click",()=>{
    const username=document.querySelector("#name").value;
    const DOB=document.querySelector("#Date_Of_Birth").value;
    const phone=document.querySelector("#Phone_No").value;
    const aadhar=document.querySelector("#Aadhar_No").value;
    const password=document.querySelector("#pw").value;
    

    const actUn=/^[a-z A-Z \s]{4,}$/;
    const actPhone=/^[0-9]{10}$/;
    const actAadhar=/^[0-9]{12}$/;
    const actpw=/^[\w \W]{6,12}$/;
    //Username validation
    if(actUn.test(username))
    {
        const msg=document.querySelector("#msgun");
        msg.textContent=`Checked!`;
        msg.parentElement.className="success";
    }
    else
    {
        const msg=document.querySelector("#msgun");
        if(username.length<4 && username.length>0)
            msg.textContent=`Username should be atleast of 4 character`;
        else if(username=="")
             msg.textContent=`Username is empty!!Please enter the username.`;
        else
            msg.textContent=`Invalid Username`;
        msg.parentElement.className="error";
    }
    //Date of Birth
    if(DOB!=="")
    {
        const msg=document.querySelector("#msgdob");
        msg.textContent=`Checked!`;
        msg.parentElement.className="success";
    }
    else if(DOB=="")
    {
        const msg=document.querySelector("#msgdob");
        msg.textContent=`Date Of Birth is empty!!Please enter the Date of Birth`;
        msg.parentElement.className="error";
    }
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
        else if(phone=="")
             msg.textContent=`Aadhar Number is empty!!Please enter the Aadhar Number.`;
        else
            msg.textContent=`Invalid Aadhar Number`;
        msg.parentElement.className="error";
    }
    //Phone Number validation
    if(actPhone.test(phone))
        {
            const msg=document.querySelector("#msgphone");
            msg.textContent=`Checked!`;
            msg.parentElement.className="success";
        
        }
        else
        {
            const msg=document.querySelector("#msgphone");
            if(phone.length<10 && phone.length>0)
                msg.textContent=`Phone Number should be of 10 digits.`;
            else if(phone=="")
                 msg.textContent=`Phone Number is empty!!Please enter the Phone Number.`;
            else
                msg.textContent=`Invalid Phone Number`;
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
    
