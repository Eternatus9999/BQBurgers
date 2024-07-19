let index = 1;
let Cname;
let Cid;
let Cbday;
let Cemail;
let Caddress;
let Cphone;
let search;
let Cashier;

generate();

if(document.getElementById("result")!=null){
    let tblCustomer = document.getElementById("result");
    let tblBody = `<thead class="thead-dark table-dark">
                    <tr>
                        <th>Cashier ID</th>
                        <th>Cashier Name</th>
                        <th>Cashier Phone</th>
                        <th>Cashier Birthday</th>
                        <th>Cashier Email</th>
                        <th>Cashier Address</th>
                    </tr>
                </thead>`;
    let Temp = JSON.parse(localStorage.getItem("Cashier")) || [];
    Temp.forEach(element =>{
        tblBody+=`<tbody class="table" id="customertablebody">
                        <tr>
                            <td> ${element.Cid}</td>
                            <td> ${element.Cname}</td>
                            <td> ${element.Cphone}</td>
                            <td> ${element.Cbday}</td>
                            <td> ${element.Cemail}</td>
                            <td> ${element.Caddress}</td>
                        </tr>
                    </thead>`;
    });
    tblCustomer.innerHTML = tblBody;
}

function generate(){
    if(document.getElementById("Cid")!= null){
        Cashier = JSON.parse(localStorage.getItem("Cashier"))|| [];
        let i;
        if(Cashier.length != 0) {
            i=Cashier[Cashier.length-1].index +1;
        } 
        else{
            i=1;
        };
        showid(i);
        index = i;
    }
}

function showid(i){
    let txt ="C";
    if(i<10){
        txt+=("00"+i);
    }
    else if(i<100){
        txt+=("0"+i);
    }
    else{
        txt+=i;
    }
    document.getElementById("Cid").value = txt;
}

function Add(){
    Cashier = JSON.parse(localStorage.getItem("Cashier")) || [];
    Cname = document.getElementById("Cname").value;
    Cid = document.getElementById("Cid").value;
    Cbday = document.getElementById("Cbday").value;
    Cemail = document.getElementById("Cemail").value;
    Caddress = document.getElementById("Caddress").value;
    Cphone = document.getElementById("Cphone").value;
    if(isvalid(Cname,Cphone,Cemail,Caddress,Cbday,search)){
        Cashier.push({index,Cid,Cname,Cphone,Cbday,Cemail,Caddress});
        localStorage.setItem("Cashier",JSON.stringify(Cashier));
        clearInput();
        window.alert("Added Successfully");
    }
    generate();
}

function Delete() {
    temp = JSON.parse(localStorage.getItem("Cashier"))|| [];
    for (let i = 0; i < temp.length; i++) {
        if(temp[i].Cname == search || temp[i].Cid == search){
            temp.splice(i,1);
            break;
        }
    }
    localStorage.setItem("Cashier",JSON.stringify(temp));
    clearInput();
    window.alert("Delete Successfull");
}

function Search(){
    search = document.getElementById("Username").value;
    temp = JSON.parse(localStorage.getItem("Cashier")) || [];
    for (let i = 0; i < temp.length; i++) {
        if(temp[i].Cname == search || temp[i].Cid == search){
            document.getElementById("Cname").value = temp[i].Cname;
            document.getElementById("Cbday").value = temp[i].Cbday;
            document.getElementById("Cemail").value = temp[i].Cemail;
            document.getElementById("Caddress").value = temp[i].Caddress;
            document.getElementById("Cphone").value = temp[i].Cphone;
            document.getElementById("Username").value = "";
            break;
        }
        else if(i+1 == temp.length){
            window.alert("No Cashier Found with that name or ID");
        }
    }
}

function Update(){
    temp = JSON.parse(localStorage.getItem("Cashier")) || [];
    Cname =document.getElementById("Cname").value;
    Cbday = document.getElementById("Cbday").value;
    Cemail = document.getElementById("Cemail").value;
    Caddress = document.getElementById("Caddress").value;
    Cphone = document.getElementById("Cphone").value;
    for (let i = 0; i < temp.length; i++){
        if(temp[i].Cname == search || temp[i].Cid == search){
            if(isvalid(Cname,Cphone,Cemail,Caddress,Cbday,search)){
                temp[i].Cname=Cname;
                temp[i].Cbday=Cbday;
                temp[i].Cemail=Cemail;
                temp[i].Caddress= Caddress;
                temp[i].Cphone=Cphone;
                localStorage.setItem("Cashier",JSON.stringify(temp));
                clearInput();
                window.alert("Update Successfull");
            }
            break;
        }
    }
    
}

function isvalid(Cname,Cphone,Cemail,Caddress,Cbday,sname){
    if(Cname == ""|| Caddress == "" ||Cphone == "" || Cemail == ""|| Cbday == ""){
        window.alert("Fill all the details");
        return false;
    }
    else if(Cphone.length != 10){
        window.alert("Invalid Phone number");
        return false;
    }
    else if(!Validbirthday(Cbday)){
        window.alert("Invalid Birthday");
        return false;
    }
    else if(isPhone(sname,Cphone)){
        window.alert("Phone Number already exists");
        return false;
    }
    else{return true;}
}

function clearInput(){
    document.getElementById("Cname").value ="";
    document.getElementById("Cbday").value ="";
    document.getElementById("Cemail").value ="";
    document.getElementById("Caddress").value ="";
    document.getElementById("Cphone").value ="";
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
    Cashier = JSON.parse(localStorage.getItem("Cashier")) || [];
    for (let i = 0; i < Cashier.length; i++) {
        if(Cashier[i].Cphone == phone){
            if(Cashier[i].Cname == name || Cashier[i].Cid == name){
                return false;
            }
            return true;
            break;
        }
    }
    return false;
}