let index = 1;
let Itid;
let Itname;
let Itcategory;
let Itprice;
let Itdiscount;
let Itqty;
let Itbday;
let Item;
let search;

generate();


if(document.getElementById("result")!=null){
    let tblCustomer = document.getElementById("result");
    let tblBody = `<thead class="thead-dark table-dark">
                    <tr>
                        <th>Item ID</th>
                        <th>Item Category</th>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Price(Rs.)</th>
                        <th>Discount</th>
                        <th>Expire Date</th>
                    </tr>
                </thead>`;  
    let Temp = JSON.parse(localStorage.getItem("Item"));
    Temp.forEach(element =>{
        tblBody+=`<tbody class="table" id="customertablebody">
                    <tr>
                        <td> ${element.Itid}</td>
                        <td> ${element.Itcategory}</td>
                        <td> ${element.Itname}</td>
                        <td> ${element.Itqty}</td>
                        <td> ${element.Itprice}</td>
                        <td> ${discount(element.Itdiscount)}</td>
                        <td style="${isexpired(element.Itbday)}
                    </tr>
                </tbody>`;
    });
    tblCustomer.innerHTML = tblBody;
}

function isexpired(date){
    if(Validdate(date)){
        return `background:lime;"> ${date}</td>`
    }
    else{
        return `background:red;">Expired</td>`
    }
}

function discount(i){
    if(i==0){
        return "-";
    }
    else{
        return i+"%";
    }
}

function AddItem(){
    Item = JSON.parse(localStorage.getItem("Item"));
    Itid = document.getElementById("Itid").value;
    Itname = document.getElementById("Itname").value;
    Itcategory = document.getElementById("Itcategory").value;
    Itprice =Number (document.getElementById("Itprice").value);
    Itdiscount =Number(document.getElementById("Itdiscount").value);
    Itqty =Number (document.getElementById("Itqty").value);
    Itbday =document.getElementById("Itbday").value;
    if(isvalid(Itname,Itcategory,Itqty,Itprice,Itbday)){
        Item.push({index,Itid,Itname,Itcategory,Itprice,Itdiscount,Itqty,Itbday});
        localStorage.setItem("Item",JSON.stringify(Item));
        clearInput();
        window.alert("Added Successfully");
    }
    generate();
}

function Delete() {
    temp = JSON.parse(localStorage.getItem("Item"));
    for (let i = 0; i < temp.length; i++) {
        if(temp[i].Itname == search || temp[i].Itid == search){
            temp.splice(i,1);
            break;
        }
    }
    localStorage.setItem("Item",JSON.stringify(temp));
    clearInput();
    window.alert("Delete Successfull");
}

function Search(){
    search = document.getElementById("Username").value;
    temp = JSON.parse(localStorage.getItem("Item"));
    for (let i = 0; i < temp.length; i++) {
        if(temp[i].Itname == search || temp[i].Itid == search){
            document.getElementById("Itname").value = temp[i].Itname;
            document.getElementById("Itcategory").value = temp[i].Itcategory;
            document.getElementById("Itprice").value = temp[i].Itprice;
            document.getElementById("Itdiscount").value = temp[i].Itdiscount;
            document.getElementById("Itqty").value = temp[i].Itqty;
            document.getElementById("Itbday").value = temp[i].Itbday;
            document.getElementById("Username").value = "";
            break;
        }
        else if(i+1 == temp.length){
            window.alert("No item Found with that name or ID");
        }
    }
}

function Update(){
    temp = JSON.parse(localStorage.getItem("Item"));
    Itname = document.getElementById("Itname").value;
    Itcategory = document.getElementById("Itcategory").value;
    Itprice =Number (document.getElementById("Itprice").value);
    Itdiscount =Number(document.getElementById("Itdiscount").value);
    Itqty =Number (document.getElementById("Itqty").value);
    Itbday =document.getElementById("Itbday").value;
    for (let i = 0; i < temp.length; i++){
        if(temp[i].Itname == search || temp[i].Itid == search){
            if(isvalid(Itname,Itcategory,Itqty,Itprice,Itbday)){
                temp[i].Itname=Itname;
                temp[i].Itcategory=Itcategory;
                temp[i].Itbday=Itbday;
                temp[i].Itqty=Itqty;
                temp[i].Itprice= Itprice;
                temp[i].Itdiscount=Itdiscount;
                localStorage.setItem("Item",JSON.stringify(temp));
                clearInput();
                window.alert("Update Successfull");
            }
            break;
        }
    }
    
}

function isvalid(Itname,Itcategory,Itqty,Itprice,Itbday){
    if(Itname == ""|| Itcategory == "" ||Itqty == 0 || Itbday == ""){
        window.alert("Fill all the details");
        return false;
    }
    else if(Itprice<=0){
        window.alert("Invalid Price");
        return false;
    }
    else if(Itqty <= 0){
        window.alert("Invalid Stock value");
        return false;
    }
    else if(!Validdate(Itbday)){
        window.alert("Item is expired");
        return false;
    }
    else{return true;}
}

function clearInput(){
    document.getElementById("Itname").value ="";
    document.getElementById("Itcategory").value ="";
    document.getElementById("Itbday").value ="";
    document.getElementById("Itqty").value ="";
    document.getElementById("Itprice").value ="";
    document.getElementById("Itdiscount").value ="";
}

function generate(){
    if(document.getElementById("Itid")!= null){
        Item = JSON.parse(localStorage.getItem("Item"))|| tempitem;
        let i;
        if(Item.length != 0) {
            i=Item[Item.length-1].index +1;
        } 
        else{
            i=1;
        };
        showid(i);
        index = i;
    }
}

function showid(i){
    let txt ="IT1";
    if(i<10){
        txt+=("00"+i);
    }
    else if(i<100){
        txt+=("0"+i);
    }
    else{
        txt+=i;
    }
    document.getElementById("Itid").value = txt;
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
                    if(day>currentMonthDate){
                        return true;
                    }
                }else{
                    return true;
                }
            }else if(year>currentYear){
                return true;
            }
        }
        return false;
    }else if(month==4 || month==6 || month==9 || month==11){
        if(day>=1 && day<=30){
            if(year==currentYear){
                if(month==currentMonthValue){
                    if(day>currentMonthDate){
                        return true;
                    }
                }else{
                    return true;
                }
            }else if(year>currentYear){
                return true;
            }
        }
        return false;
    }else if(month==2){
        if(!leap){
            if(day>=1 && day<=28){
                if(year==currentYear){
                    if(month==currentMonthValue){
                        if(day>currentMonthDate){
                            return true;
                        }
                    }else{
                        return true;
                    }
                }else if(year>currentYear){
                    return true;
                }
            }
            return false;
        }else{
            if(day>=1 && day<=29){
                if(year==currentYear){
                    if(month==currentMonthValue){
                        if(day>currentMonthDate){
                            return true;
                        }
                    }else{
                        return true;
                    }
                }else if(year>currentYear){
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
            if(month>=currentMonthValue){
                return true;
            }
        }else if(year>currentYear){
            return true;
        }
    }
    return false;
}

function validyear(year){					//--> VALIDATE YEAR METHOD.
	const currentdate=new Date();			//--> GET THE LOCAL DATE
    const currentYear=currentdate.getFullYear();    				//--> EXTRACTING THE YEAR VALUE FROM THE currentdate VARIABELE
    const currentMonthValue = currentdate.getMonth()+1;	//--> EXTRACTING THE MONTH VALUE FROM THE currentdate VARIABELE
    const currentMonthDate=currentdate.getDate();		//--> EXTRACTING THE DAY VALUE FROM THE currentdate VARIABELE

    if(year>=currentYear){
        return true;
    }
    return false;
}

function Validdate(bday){			//--> VALIDATE DATE OF BIRTH METHOD.
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
