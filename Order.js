let Orid;
let Cuid;
let Cuname;
let qty;
let search;
let FOrder;
let Order = [];
let temporder;
let oneresult;
let Price
let Itname;
let Itid;
let total;
let index = 1;

generate();
load();

if (document.getElementById("oneresult") != null) {
    let Total =0;
    let NetTotal =0;
    let tblCustomer = document.getElementById("oneresult");
    let tblBody = `<thead class="thead-dark table-dark">
                        <tr>
                            <th>Item ID</th>
                            <th>Item name</th>
                            <th>Price Rs.</th>
                            <th>Qty</th>
                            <th>Total Price</th>
                            <th>Total Net Price</th>
                        </tr>
                    </thead>`;
    let Temp = JSON.parse(localStorage.getItem("viweorder"));
    Temp.forEach(element => {
        Total += Number(element.Totalprice);
        NetTotal += Number(element.Netprice); 
        tblBody += `<tbody class="table" id="customertablebody">
                                    <tr>
                                        <td>${element.Itid}</td>
                                        <td>${element.Itname}</td>
                                        <td>${element.price}</td>
                                        <td>${element.qty}</td>
                                        <td>${element.Netprice}</td>
                                        <td>${element.Totalprice}</td>
                                    </tr>`;
    });
    tblBody += `    <tr>
                        <td colspan="4">Total</td>
                        <td>${NetTotal}</td>
                        <td>${Total}</td>
                    </tr>
                </tbody>`;
    tblCustomer.innerHTML = tblBody;
}

function load() {
    if (document.getElementById("orderresult") != null) {
        let tblCustomer = document.getElementById("orderresult");
        let tblBody = `<thead class="thead-dark table-dark">
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Order ID</th>
                            <th>Customer ID</th>
                            <th>Order Date</th>
                            <th>Total Price Rs.</th>
                        </tr>
                    </thead>`;
        let Temp = JSON.parse(localStorage.getItem("Order")) || [];
        Temp.forEach(element => {
            tblBody += `<tbody class="table" id="customertablebody">
                        <tr>
                            <td><input type="Checkbox" id="${element.Orid}"></td>
                            <td><button class="btn btn-danger" onclick="itemview(this.value)" value="${element.Orid}">View More</button></td>
                            <td>${element.Orid}</td>
                            <td>${element.Cuid}</td>
                            <td>${element.date}</td>
                            <td>${element.Price}</td>
                        </tr>
                    </tbody>`;
        });
        tblCustomer.innerHTML = tblBody;
    }
}

function itemview(order) {
    let Temp = JSON.parse(localStorage.getItem("Order"));
    for (let i = 0; i < Temp.length; i++) {
        const element = Temp[i];
        if (order == element.Orid) {
            localStorage.setItem("viweorder", JSON.stringify(element.Order));
            break;
        }
    }
    window.location.href = "UserSearchOrder.html";
}

function ILoad(search) {
    temp = JSON.parse(localStorage.getItem("Item"));
    for (let i = 0; i < temp.length; i++) {
        if (temp[i].Itname == search || temp[i].Itid == search || temp[i].Itcategory == search) {
            if (document.getElementById("result") != null) {
                if (temp[i].Itcategory != search) {
                    let tblCustomer = document.getElementById("result");
                    let tblBody = `<thead class="thead-dark table-dark">
                                <tr>
                                    <th>Item ID</th>
                                    <th>Item Name</th>
                                    <th>Quantity</th>
                                    <th>Price(Rs.)</th>
                                    <th>Discount</th>
                                    <th>Expire Date</th>
                                </tr>
                            </thead>`;

                    tblBody += `<tbody class="table" id="customertablebody">
                            <tr>
                                    <td> ${temp[i].Itid}</td>
                                    <td> ${temp[i].Itname}</td>
                                    <td> ${temp[i].Itqty}</td>
                                    <td> ${temp[i].Itprice}</td>
                                    <td> ${discount(temp[i].Itdiscount)}</td>
                                    <td style="${isexpired(temp[i].Itbday)}
                                </tr>
                            </tbody>`;
                    tblCustomer.innerHTML = tblBody;
                    oneresult = true;
                }
                else {
                    oneresult = false;
                    let tblCustomer = document.getElementById("result");
                    let tblBody = `<thead class="thead-dark table-dark">
                                        <tr>
                                            <th></th>
                                            <th>Item ID</th>
                                            <th>Item Name</th>
                                            <th>Quantity</th>
                                            <th>Price(Rs.)</th>
                                            <th>Discount</th>
                                            <th>Expire Date</th>
                                        </tr>
                                    </thead>`;
                    let Temp = JSON.parse(localStorage.getItem("Item"));
                    for (let i = 0; i < Temp.length; i++) {
                        if (Temp[i].Itcategory == search) {
                            tblBody += `<tbody class="table" id="customertablebody">
                                            <tr>
                                                <td><input type="Checkbox" id="${Temp[i].Itid}"></td>
                                                <td> ${Temp[i].Itid}</td>
                                                <td> ${Temp[i].Itname}</td>
                                                <td> ${Temp[i].Itqty}</td>
                                                <td> ${Temp[i].Itprice}</td>
                                                <td> ${discount(Temp[i].Itdiscount)}</td>
                                                <td style="${isexpired(Temp[i].Itbday)}
                                            </tr>
                                        </tbody>`;
                        }
                    };
                    tblCustomer.innerHTML = tblBody;
                }
            }
        }
        document.getElementById("Username").value = "";
    }
    if (document.getElementById("result").innerHTML == null) {
        window.alert("No item Found with that name or ID or category");
    }
}

function Place() {
    const currentdate = new Date();
    const currentYear = currentdate.getFullYear();
    const currentMonthValue = currentdate.getMonth() + 1;
    const currentMonthDate = currentdate.getDate();
    if (Order.length > 0) {
        FOrder = JSON.parse(localStorage.getItem("Order")) || [];
        showTotal(Order);
        Price = total;
        date = (currentYear + "-" + currentMonthValue + "-" + currentMonthDate);
        FOrder.push({ index, Cuid, Orid, Order, date, Price });
        localStorage.setItem("Order", JSON.stringify(FOrder));
        Iupdate(Order);
        generate();
        clearInput();
        Order = [];
    }
}

function Add() {
    let Totalprice;
    if (oneresult != null && document.getElementById("Cuid").value != "") {
        Cuid = document.getElementById("Cuid").value;
        Cuname = document.getElementById("Cuname").value;
        qty = Number(document.getElementById("qty").value);
        Orid = document.getElementById("Orid").value;
        if (checkCustomer(Cuid, Cuname)) {
            if (oneresult) {
                for (let i = 0; i < temp.length; i++) {
                    if (temp[i].Itname == search || temp[i].Itid == search) {
                        Itid = temp[i].Itid;
                        Itname = temp[i].Itname;
                        price = temp[i].Itprice;
                        Totalprice = calculate([{ Itid, qty }]);
                        Netprice = Number((qty * price) - Totalprice);
                        temporder = { Itid, Itname, qty, price, Netprice, Totalprice };
                        Order.push(temporder);
                        break;
                    }
                }
            }
            else {
                for (let i = 0; i < temp.length; i++) {
                    if (temp[i].Itcategory == search) {
                        if (document.getElementById(temp[i].Itid).checked) {
                            Itid = temp[i].Itid;
                            Itname = temp[i].Itname;
                            price = temp[i].Itprice;
                            Totalprice = calculate([{ Itid, qty }]);
                            Netprice = Number((qty * price));
                            temporder = { Itid, Itname, qty, price, Netprice, Totalprice };
                            Order.push(temporder);
                        }
                    }
                }
            }
            document.getElementById("qty").value = "";
        }
        else {
            window.alert("Customer doesn't exists");
        }
    }
}

function Delete() {
    temp = JSON.parse(localStorage.getItem("Order")) || [];
    for (let i = 0; i < temp.length; i++) {
        if (document.getElementById(temp[i].Orid).checked) {
            temp.splice(i, 1);
            i--;
        }
    }
    localStorage.setItem("Order", JSON.stringify(temp));
    load();
    window.alert("Delete Successfull");
}

function Search() {
    search = document.getElementById("Username").value;
    ILoad(search);

}

function calculate(order) {
    let totalprice;
    order.forEach(element => {
        temp = JSON.parse(localStorage.getItem("Item"));
        for (let i = 0; i < temp.length; i++) {
            if (temp[i].Itid == element.Itid) {
                totalprice = (temp[i].Itprice * ((100 - temp[i].Itdiscount) / 100)) * element.qty;
            }
        }
    });
    return totalprice;
}

function Iupdate(order) {
    order.forEach(element => {
        temp = JSON.parse(localStorage.getItem("Item"));
        for (let i = 0; i < temp.length; i++) {
            if (temp[i].Itid == element.Itid) {
                temp[i].Itqty -= element.qty;
            }
        }
    });
    localStorage.setItem("Item", JSON.stringify(temp));
}

function generate() {
    if (document.getElementById("Orid") != null) {
        Item = JSON.parse(localStorage.getItem("Order")) || [];
        let i;
        if (Item.length != 0) {
            i = Item[Item.length - 1].index + 1;
        }
        else {
            i = 1;
        };
        showid(i);
        index = i;
    }
}

function clearInput() {
    document.getElementById("Cuid").value = "";
    document.getElementById("Cuname").value = "";
    document.getElementById("result").innerHTML = "";
}

function showid(i) {
    let txt = "OR1";
    if (i < 10) {
        txt += ("00" + i);
    }
    else if (i < 100) {
        txt += ("0" + i);
    }
    else {
        txt += i;
    }
    document.getElementById("Orid").value = txt;
}

function isexpired(date) {
    if (Validdate(date)) {
        return `background:lime;"> ${date}</td>`
    }
    else {
        return `background:red;">Expired</td>`
    }
}

function discount(i) {
    if (i == 0) {
        return "-";
    }
    else {
        return i + "%";
    }
}

function validday(year, month, day) {	//--> VALIDATE DAY METHOD.
    const currentdate = new Date();			//--> GET THE LOCAL DATE
    const currentYear = currentdate.getFullYear();    				//--> EXTRACTING THE YEAR VALUE FROM THE currentdate VARIABELE
    const currentMonthValue = currentdate.getMonth() + 1;	//--> EXTRACTING THE MONTH VALUE FROM THE currentdate VARIABELE
    const currentMonthDate = currentdate.getDate();		//--> EXTRACTING THE DAY VALUE FROM THE currentdate VARIABELE

    let leap = true;
    if (year % 400 == 0) {
        leap = true;
    } else if (year % 4 == 0) {
        if (year % 100 == 0) {
            leap = false;
        } else {
            leap = true;
        }
    } else {
        leap = false;
    }

    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        if (day >= 1 && day <= 31) {
            if (year == currentYear) {
                if (month == currentMonthValue) {
                    if (day > currentMonthDate) {
                        return true;
                    }
                } else {
                    return true;
                }
            } else if (year > currentYear) {
                return true;
            }
        }
        return false;
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
        if (day >= 1 && day <= 30) {
            if (year == currentYear) {
                if (month == currentMonthValue) {
                    if (day > currentMonthDate) {
                        return true;
                    }
                } else {
                    return true;
                }
            } else if (year > currentYear) {
                return true;
            }
        }
        return false;
    } else if (month == 2) {
        if (!leap) {
            if (day >= 1 && day <= 28) {
                if (year == currentYear) {
                    if (month == currentMonthValue) {
                        if (day > currentMonthDate) {
                            return true;
                        }
                    } else {
                        return true;
                    }
                } else if (year > currentYear) {
                    return true;
                }
            }
            return false;
        } else {
            if (day >= 1 && day <= 29) {
                if (year == currentYear) {
                    if (month == currentMonthValue) {
                        if (day > currentMonthDate) {
                            return true;
                        }
                    } else {
                        return true;
                    }
                } else if (year > currentYear) {
                    return true;
                }
            }
            return false;
        }

    }
    return false;
}

function validmonth(year, month) {		//--> VALIDATE MONTH METHOD.
    const currentdate = new Date();			//--> GET THE LOCAL DATE
    const currentYear = currentdate.getFullYear();    				//--> EXTRACTING THE YEAR VALUE FROM THE currentdate VARIABELE
    const currentMonthValue = currentdate.getMonth() + 1;	//--> EXTRACTING THE MONTH VALUE FROM THE currentdate VARIABELE
    const currentMonthDate = currentdate.getDate();		//--> EXTRACTING THE DAY VALUE FROM THE currentdate VARIABELE

    if (month >= 1 && month <= 12) {	//--> CHECK WETHER THE USER INPUTER MONTH IS BETWEEN 1 AND 12
        if (year == currentYear) {	//--> IF THE USER INPUTED YEAR IS CURRENT YEAR WE SHOULD CHECK WEATHER THE USER INPUTED MONTH LESS THAN OR EQUAL CURRENT MONTH
            if (month >= currentMonthValue) {
                return true;
            }
        } else if (year > currentYear) {
            return true;
        }
    }
    return false;
}

function validyear(year) {					//--> VALIDATE YEAR METHOD.
    const currentdate = new Date();			//--> GET THE LOCAL DATE
    const currentYear = currentdate.getFullYear();    				//--> EXTRACTING THE YEAR VALUE FROM THE currentdate VARIABELE
    const currentMonthValue = currentdate.getMonth() + 1;	//--> EXTRACTING THE MONTH VALUE FROM THE currentdate VARIABELE
    const currentMonthDate = currentdate.getDate();		//--> EXTRACTING THE DAY VALUE FROM THE currentdate VARIABELE

    if (year >= currentYear) {
        return true;
    }
    return false;
}

function Validdate(bday) {			//--> VALIDATE DATE OF BIRTH METHOD.
    const currentdate = new Date();			//--> GET THE LOCAL DATE
    const currentYear = currentdate.getFullYear();    				//--> EXTRACTING THE YEAR VALUE FROM THE currentdate VARIABELE
    const currentMonthValue = currentdate.getMonth() + 1;	//--> EXTRACTING THE MONTH VALUE FROM THE currentdate VARIABELE
    const currentMonthDate = currentdate.getDate();		//--> EXTRACTING THE DAY VALUE FROM THE currentdate VARIABELE.

    const year = Number(bday.substring(0, 4));			//--> EXTRACTING THE YEAR VALUE FROM THE USER GIVEN INPUT.
    const month = Number(bday.substring(5, 7));		//--> EXTRACTING THE MONTH VALUE FROM THE USER GIVEN INPUT.
    const day = Number(bday.substring(8));			//--> EXTRACTING THE DAY VALUE FROM THE USER GIVEN INPUT.

    const boolyear = validyear(year);			//--> GETING TRUE/FALSE BY VALIDATING THE YEAR THROUG A METHOD.
    const boolmonth = validmonth(year, month);	//--> GETING TRUE/FALSE BY VALIDATING THE MONTH THROUG A METHOD.
    const boolday = validday(year, month, day);	//--> GETING TRUE/FALSE BY VALIDATING THE DAY THROUG A METHOD.

    if (bday.length == 10) { //--> IF THE LENGTH IS NOT EQUAL TO 10 THEN RETURN FALSE.
        if (boolyear && boolmonth && boolday) {
            return true;
        }
        return false;
    } else {
        return false;
    }
}

function checkCustomer(id, name) {
    let customer = JSON.parse(localStorage.getItem("Customer"));
    for (let i = 0; i < customer.length; i++) {
        const element = customer[i];
        if (id == element.Cuid || name == element.Cuname) {
            return true;
        }
    }
    return false;
}

function showTotal(order) {
    let txt = "";
    total = 0;
    order.forEach(element => {
        temp = JSON.parse(localStorage.getItem("Item"))
        for (let i = 0; i < temp.length; i++) {
            if (element.Itid == temp[i].Itid) {
                txt += temp[i].Itname + " Rs." + temp[i].Itprice + " " + element.qty + " Rs." + element.Totalprice + "\n";
                total += Number(element.Totalprice);
            }
        }
    });
    txt += "\n Total Price : Rs." + total;
    window.alert(txt);
}

function ViewSearch() {
    let True = false;
    let search = document.getElementById("Username").value;
    temp = JSON.parse(localStorage.getItem("Order")) || [{}];
    let tblCustomer = document.getElementById("orderresult");
    let tblBody = `<thead class="thead-dark table-dark">
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Order ID</th>
                            <th>Customer ID</th>
                            <th>Order Date</th>
                            <th>Total Price Rs.</th>
                        </tr>
                    </thead>`;
    for (let i = 0; i < temp.length; i++) {
        const element = temp[i];
        if (search == element.Orid || search == element.Cuid) {
            True = true;
            break;
        }
    }
    if (!True) {
        window.alert("No Order found");
    }
    for (let i = 0; i < temp.length; i++) {
        const element = temp[i];
        if (search == element.Orid || search == element.Cuid) {
            tblBody += `<tbody class="table" id="customertablebody">
                    <tr>
                        <td><input type="Checkbox" id="${element.Orid}"></td>
                        <td><button class="btn btn-danger" onclick="itemview(this.value)" value="${element.Orid}">View More</button></td>
                        <td>${element.Orid}</td>
                        <td>${element.Cuid}</td>
                        <td>${element.date}</td>
                        <td>${element.Price}</td>
                    </tr>
                </tbody>`;

            tblCustomer.innerHTML = tblBody;
        }
    }
}

function UpdateSearch(){
    
}