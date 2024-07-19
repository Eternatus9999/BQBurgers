let Cuname;
let Cuid;
let Cubday;
let Cuemail;
let Cuaddress;
let Cuphone;
let search;
let index = 1;
let Customer;

generate();
load();

function load(){
    if(document.getElementById("result")!=null){
        let tblCustomer = document.getElementById("result");
        let tblBody =`<thead class="thead-dark table-dark">
                            <tr>
                                <th></th>
                                <th>Customer ID</th>
                                <th>Customer Name</th>
                                <th>Customer Phone</th>
                            </tr>
                        </thead>`;
        let Temp = JSON.parse(localStorage.getItem("Customer")) ||[];
        Temp.forEach(element =>{
            tblBody+=`<tbody class="table" id="customertablebody">
                            <tr>
                                <td><input type="Checkbox" id="${element.Cuid}"></td>
                                <td> ${element.Cuid}</td>
                                <td> ${element.Cuname}</td>
                                <td> ${element.Cuphone}</td>
                            </tr>
                        </tbody>`;
        });
        tblCustomer.innerHTML = tblBody;
    }
}

function generate(){
    if(document.getElementById("Cuid")!= null){
        Customer = JSON.parse(localStorage.getItem("Customer"))|| [];
        let i;
        if(Customer.length != 0){
            i=Customer[Customer.length-1].index+1;
        }
        else{
            i=1;
        }
        showid(i);
        index = i;
    }
}

function showid(i){
    let txt ="Cu";
    if(i<10){
        txt+=("000"+i);
    }
    else if(i<100){
        txt+=("00"+i);
    }
    else if(i<1000){
        txt+=("0"+i);
    }
    else{
        txt+=i;
    }
    document.getElementById("Cuid").value = txt;
}

function Add(){
    Customer = JSON.parse(localStorage.getItem("Customer"))||[];
    Cuname = document.getElementById("Cuname").value;
    Cuid = document.getElementById("Cuid").value;
    Cubday = document.getElementById("Cubday").value;
    Cuemail = document.getElementById("Cuemail").value;
    Cuaddress = document.getElementById("Cuaddress").value;
    Cuphone = document.getElementById("Cuphone").value;
    if(isvalid(Cuname,Cuphone,Cuemail,Cuaddress,Cubday,search)){
        Customer.push({index,Cuid,Cuname,Cuphone,Cubday,Cuemail,Cuaddress});
        localStorage.setItem("Customer",JSON.stringify(Customer));
        clearInput();
        window.alert("Added Successfully");
    } 
    generate();
}

function Delete() {
    temp = JSON.parse(localStorage.getItem("Customer")) || [];
    for (let i = 0; i < temp.length; i++){
        if(document.getElementById(temp[i].Cuid).checked){
            temp.splice(i,1);
            i--;
        }
    }
    localStorage.setItem("Customer",JSON.stringify(temp));
    load();
    window.alert("Delete Successfull");
}

function Search(){
    search = document.getElementById("Username").value;
    temp = JSON.parse(localStorage.getItem("Customer")) || [];
    for (let i = 0; i < temp.length; i++) {
        if(temp[i].Cuname == search || temp[i].Cuid == search){
            document.getElementById("Cuname").value = temp[i].Cuname;
            document.getElementById("Cubday").value = temp[i].Cubday;
            document.getElementById("Cuemail").value = temp[i].Cuemail;
            document.getElementById("Cuaddress").value = temp[i].Cuaddress;
            document.getElementById("Cuphone").value = temp[i].Cuphone;
            document.getElementById("Username").value = "";
            break;
        }
        else if(i+1 == temp.length){
            window.alert("No Customer Found with that name or ID");
        }
    }
}

function Update(){
    temp = JSON.parse(localStorage.getItem("Customer"));
    Cuname =document.getElementById("Cuname").value;
    Cubday = document.getElementById("Cubday").value;
    Cuemail = document.getElementById("Cuemail").value;
    Cuaddress = document.getElementById("Cuaddress").value;
    Cuphone = document.getElementById("Cuphone").value;
    for (let i = 0; i < temp.length; i++){
        if(temp[i].Cuname == search || temp[i].Cuid == search){
            if(isvalid(Cuname,Cuphone,Cuemail,Cuaddress,Cubday,search)){
                temp[i].Cuname=Cuname;
                temp[i].Cubday=Cubday;
                temp[i].Cuemail=Cuemail;
                temp[i].Cuaddress= Cuaddress;
                temp[i].Cuphone=Cuphone;
                localStorage.setItem("Customer",JSON.stringify(temp));
                clearInput();
                window.alert("Update Successfull");
            }
            break;
        }
    }
}

function isvalid(Cuname,Cuphone,Cuemail,Cuaddress,Cubday,sname){
    if(Cuname == ""||Cuaddress == ""||Cuphone == ""||Cuemail == ""|| Cubday==""){
        window.alert("Fill all the details");
        return false;
    }
    else if(Cuphone.length != 10){
        window.alert("Invalid Phone number");
        return false;
    }
    else if(!Validbirthday(Cubday)){
        window.alert("Invalid Birthday");
        return false;
    }
    else if(isPhone(sname,Cuphone)){
        window.alert("Phone Number already exists");
        return false;
    }
    else{return true;}
}

function clearInput(){
    document.getElementById("Cuname").value ="";
    document.getElementById("Cubday").value ="";
    document.getElementById("Cuemail").value ="";
    document.getElementById("Cuaddress").value ="";
    document.getElementById("Cuphone").value ="";
}

function validday(year,month,day){	//--> VALIDATE DAY METHOD.
	const currentdate=new Date();			//--> GET THE LOCAL DATE
    const currentYear=currentdate.getFullYear();    				//--> EXTRACTING THE YEAR VALUE FROM THE currentdate VARIABELE
    const currentMonthValue = currentdate.getMonth()+1;	//--> EXTRACTING THE MONTH VALUE FROM THE currentdate VARIABELE
    const currentMonthDate=currentdate.getDate();		//--> EXTRACTING THE DAY VALUE FROM THE currentdate VARIABELE

    let leap=true;
    if(year%400==0){
        leap=true;
    }else if(year%4==0){
        if(year%100==0){
            leap=false;
        }else{
            leap=true;
        }
    }else{
        leap=false;
    }

    if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12){
        if(day>=1 && day<=31){
            if(year==currentYear){
                if(month==currentMonthValue){
                    if(day<currentMonthDate){
                        return true;
                    }
                }else{
                    return true;
                }
            }else if(year<currentYear){
                return true;
            }
        }
        return false;
    }else if(month==4 || month==6 || month==9 || month==11){
        if(day>=1 && day<=30){
            if(year==currentYear){
                if(month==currentMonthValue){
                    if(day<currentMonthDate){
                        return true;
                    }
                }else{
                    return true;
                }
            }else if(year<currentYear){
                return true;
            }
        }
        return false;
    }else if(month==2){
        if(!leap){
            if(day>=1 && day<=28){
                if(year==currentYear){
                    if(month==currentMonthValue){
                        if(day<currentMonthDate){
                            return true;
                        }
                    }else{
                        return true;
                    }
                }else if(year<currentYear){
                    return true;
                }
            }
            return false;
        }else{
            if(day>=1 && day<=29){
                if(year==currentYear){
                    if(month==currentMonthValue){
                        if(day<currentMonthDate){
                            return true;
                        }
                    }else{
                        return true;
                    }
                }else if(year<currentYear){
                    return true;
                }
            }
            return false;
        }

    }
    return false;
}

function validmonth(year,month){		//--> VALIDATE MONTH METHOD.
    const currentdate=new Date();			//--> GET THE LOCAL DATE
    const currentYear=currentdate.getFullYear();    				//--> EXTRACTING THE YEAR VALUE FROM THE currentdate VARIABELE
    const currentMonthValue = currentdate.getMonth()+1;	//--> EXTRACTING THE MONTH VALUE FROM THE currentdate VARIABELE
    const currentMonthDate=currentdate.getDate();		//--> EXTRACTING THE DAY VALUE FROM THE currentdate VARIABELE

    if(month>=1 && month<=12){	//--> CHECK WETHER THE USER INPUTER MONTH IS BETWEEN 1 AND 12
        if(year==currentYear){	//--> IF THE USER INPUTED YEAR IS CURRENT YEAR WE SHOULD CHECK WEATHER THE USER INPUTED MONTH LESS THAN OR EQUAL CURRENT MONTH
            if(month<=currentMonthValue){
                return true;
            }
        }else if(year<currentYear){
            return true;
        }
    }
    return false;
}

function validyear( year){					//--> VALIDATE YEAR METHOD.
	const currentdate=new Date();			//--> GET THE LOCAL DATE
    const currentYear=currentdate.getFullYear();    				//--> EXTRACTING THE YEAR VALUE FROM THE currentdate VARIABELE
    const currentMonthValue = currentdate.getMonth()+1;	//--> EXTRACTING THE MONTH VALUE FROM THE currentdate VARIABELE
    const currentMonthDate=currentdate.getDate();		//--> EXTRACTING THE DAY VALUE FROM THE currentdate VARIABELE

    if(year<=currentYear){
        return true;
    }
    return false;
}

function Validbirthday(bday){			//--> VALIDATE DATE OF BIRTH METHOD.
	const currentdate=new Date();			//--> GET THE LOCAL DATE
    const currentYear=currentdate.getFullYear();    				//--> EXTRACTING THE YEAR VALUE FROM THE currentdate VARIABELE
    const currentMonthValue = currentdate.getMonth()+1;	//--> EXTRACTING THE MONTH VALUE FROM THE currentdate VARIABELE
    const currentMonthDate=currentdate.getDate();		//--> EXTRACTING THE DAY VALUE FROM THE currentdate VARIABELE.

    const year=Number(bday.substring(0,4));			//--> EXTRACTING THE YEAR VALUE FROM THE USER GIVEN INPUT.
    const month=Number(bday.substring(5,7));		//--> EXTRACTING THE MONTH VALUE FROM THE USER GIVEN INPUT.
    const day=Number(bday.substring(8));			//--> EXTRACTING THE DAY VALUE FROM THE USER GIVEN INPUT.

    const boolyear=validyear(year);			//--> GETING TRUE/FALSE BY VALIDATING THE YEAR THROUG A METHOD.
    const boolmonth=validmonth(year,month);	//--> GETING TRUE/FALSE BY VALIDATING THE MONTH THROUG A METHOD.
    const boolday=validday(year,month,day);	//--> GETING TRUE/FALSE BY VALIDATING THE DAY THROUG A METHOD.

    if(bday.length==10){ //--> IF THE LENGTH IS NOT EQUAL TO 10 THEN RETURN FALSE.
        if(boolyear && boolmonth && boolday){
            return true;
        }
        return false;
    }else{
        return false;
    }
}
function isPhone(name,phone){
    Customer = JSON.parse(localStorage.getItem("Customer")) || [];
    for (let i = 0; i < Customer.length; i++) {
        if(Customer[i].Cuphone == phone){
            if(name !="" &&Customer[i].Cuname == name||Customer[i].Cuid == name){
                return false;
            }
            return true;
            break;
        }
    }
    return false;
}