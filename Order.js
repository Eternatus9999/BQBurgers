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

const currentdate = new Date();
const currentYear = currentdate.getFullYear();
const currentMonthValue = currentdate.getMonth() + 1;
let month = "";

generate();
load();

if (document.getElementById("oneresult") != null) {
    let Total = 0;
    let NetTotal = 0;
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
                                        <td>${element.Totalprice}</td>
                                        <td>${element.Netprice}</td>
                                    </tr>`;
    });
    tblBody += `    <tr>
                        <td colspan="4">Total</td>
                        <td>${Total}</td>
                        <td>${NetTotal}</td>
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
    document.getElementById("result").innerHTML = "";
    temp = JSON.parse(localStorage.getItem("Item"));
    for (let i = 0; i < temp.length; i++) {
        if (temp[i].Itname == search || temp[i].Itid == search || temp[i].Itcategory == search || search == "all") {
            if (document.getElementById("result") != null) {
                if (temp[i].Itcategory != search && search != "all") {
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
                        if (Temp[i].Itcategory == search || search == "all") {
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
        Generate({ index, Cuid, Orid, Order, date, Price });
        Iupdate(Order);
        generate();
        clearInput();

        document.getElementById("result").innerHTML = "";
        Order = [];
    }
    else {
        window.alert("Cart is empty");
    }
}

function Add() {
    let Totalprice;
    True = true;
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
                        let price = temp[i].Itprice;
                        Netprice = calculate([{ Itid, qty }]);
                        Totalprice = Number((qty * price) - Netprice);
                        temporder = { Itid, Itname, qty, price, Netprice, Totalprice };
                        if (temp[i].Itqty < qty) {
                            window.alert("Dosn't have that much in the stock");
                            True = false;
                        }
                        else {
                            Order.push(temporder);
                            True = true;
                            break;
                        }
                    }
                }
            }
            else {
                for (let i = 0; i < temp.length; i++) {
                    if (temp[i].Itcategory == search || search == "all") {
                        if (document.getElementById(temp[i].Itid).checked) {
                            Itid = temp[i].Itid;
                            Itname = temp[i].Itname;
                            let price = temp[i].Itprice;
                            Netprice = calculate([{ Itid, qty }]);
                            Totalprice = Number((qty * price));
                            temporder = { Itid, Itname, qty, price, Netprice, Totalprice };
                            if (temp[i].Itqty < qty) {
                                window.alert("Dosn't have that much in the stock");
                                True = false;
                            }
                            else if(Validdate(temp[i].Itbday)){
                                window.alert("Item is Expired!");
                                True = false;
                            }
                            else {
                                Order.push(temporder);
                                True = true;
                            }
                        }
                    }
                }
            }
            if (True) {
                document.getElementById("qty").value = "";
                document.getElementById("result").innerHTML = "";
                window.alert("Item added successfully");
            }
        }
        else {
            window.alert("Customer doesn't exists");
        }
    }
    else {
        window.alert("No item selected");
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
    temp = JSON.parse(localStorage.getItem("Item"));
    order.forEach(element => {
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
                txt += temp[i].Itname + "\tRs." + temp[i].Itprice + " " + element.qty + " Rs." + element.Netprice + "\n";
                total += Number(element.Netprice);
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

function UpdateSearch() {
    search = document.getElementById("Username").value;
    temp = JSON.parse(localStorage.getItem("Order")) || [];
    temp.forEach(element => {
        if (search == element.Orid) {
            document.getElementById("Cuid").innerHTML = element.Cuid;
            document.getElementById("Orid").innerHTML = element.Orid;
            let tblCustomer = document.getElementById("result");
            let tblBody = `<thead class="thead-dark table-dark">
                        <tr>
                            <th></th>
                            <th>Item ID</th>
                            <th>Item name</th>
                            <th>Price Rs.</th>
                            <th>Qty</th>
                        </tr>
                    </thead>`;

            let Temp = element.Order;
            Temp.forEach(element => {
                tblBody += `<tbody class="table" id="customertablebody">
                                    <tr>
                                        <td><input type="Checkbox" id="${element.Itname}"></td>
                                        <td>${element.Itid}</td>
                                        <td>${element.Itname}</td>
                                        <td>${element.price}</td>
                                        <td><input class="qty" type="number" id="${element.Itid}" value="${element.qty}"></td>
                                    </tr>`;
            });
            tblCustomer.innerHTML = tblBody;
        }
    });
}

function Update() {
    search = document.getElementById("Username").value;
    temporder = JSON.parse(localStorage.getItem("Order")) || [];
    temporder.forEach(element => {
        if (search == element.Orid) {
            let Temp = element.Order;
            for (let i = 0; i < Temp.length; i++) {
                const element = Temp[i];
                price = Number(element.Totalprice / element.qty);
                netprice = Number(element.Netprice / element.qty);
                console.log(element.Itid);
                element.qty = document.getElementById(element.Itid).value;
                console.log(document.getElementById(element.Itid));
                qty = document.getElementById(element.Itid).value;
                element.Totalprice = price * qty;
                element.Netprice = netprice * qty;

            }
            element.Order = Temp;
            for (let i = 0; i < Temp.length; i++) {
                const element = Temp[i];
                if (document.getElementById(element.Itname).checked) {
                    Temp.splice(i, 1);
                    i--;
                }
            }
            let total = 0;
            for (let i = 0; i < Temp.length; i++) {
                const element = Temp[i];
                total += element.Netprice
            }
            element.Price = total;
            element.Order = Temp;
            document.getElementById("Cuid").innerHTML = "";
            document.getElementById("Orid").innerHTML = "";
            document.getElementById("Username").value = "";
            document.getElementById("result").innerHTML = `<thead class="thead-dark table-dark">
                                                                <tr>
                                                                    <th></th>
                                                                    <th>Item ID</th>
                                                                    <th>Item name</th>
                                                                    <th>Price Rs.</th>
                                                                    <th>Qty</th>
                                                                </tr>
                                                            </thead>`;
            window.alert("Update Successfull");
        }
    });
    for (let i = 0; i < temporder; i++) {
        if (temporder[i].Order == []) {
            temporder.splice(i, 1);
            i--;
        }
    };
    localStorage.setItem("Order", JSON.stringify(temporder));
}

function Generate(order){
    temp = order.Order;
    temp.push({Itid:"",Itname:"Total",qty:"",Netprice:Number(order.Price),Totalprice:""})
    console.log(temp);
    var prop = {
        outputType: jsPDFInvoiceTemplate.Save, //Allows for additional configuration prior to writing among others, adds support for different languages and symbols
        returnJsPDFDocObject: true,
        fileName: "Bill",
        orientationLandscape: false,
        compress: true,
        logo: {
            src: "Untitled-4.png",
            type: 'PNG', //optional, when src= data:uri (nodejs case)
            width: 40, //aspect ratio = width/height
            height: 30,
            margin: {
                top: 0, //negative or positive num, from the current position
                left: 0 //negative or positive num, from the current position
            }
        },
        stamp: {
            inAllPages: true, //by default = false, just in the last page
            src: "https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/qr_code.jpg",
            type: 'JPG', //optional, when src= data:uri (nodejs case)
            width: 20, //aspect ratio = width/height
            height: 20,
            margin: {
                top: 0, //negative or positive num, from the current position
                left: 0 //negative or positive num, from the current position
            }
        },
        business: {
            name: "BQ Burgers",
            address: "Icet Panadura.",
            phone: "(+94) 76 488 7732",
            email: "BQBurgers@gmail.com",
            website: "www.BQBurgers.com",
        },
        contact: {
            label: "Bill for: "+order.Cuid+"\nOrder Id: "+order.Orid,
        },
        invoice: {
            invDate: currentdate+"",
            headerBorder: false,
            tableBodyBorder: false,
            header: [
                {
                    title: "Item ID",
                    style: {
                        width: 50
                    }
                },
                {
                    title: "Item name",
                    style: {
                        width: 80
                    }
                },
                { title: "qty" },
                { title: "Total Price" },
                { title: "Net Price" }
            ],
            table: Array.from(Array(temp.length), (item, index) => ([
                temp[index].Itid,
                temp[index].Itname,
                temp[index].qty,
                temp[index].Totalprice,
                String(temp[index].Netprice)
            ])),
            additionalRows: [{
                col1: 'Total:',
                col2: '145,250.50',
                col3: 'ALL',
                style: {
                    fontSize: 14 //optional, default 12
                }
            },
            {
                col1: 'VAT:',
                col2: '20',
                col3: '%',
                style: {
                    fontSize: 10 //optional, default 12
                }
            },
            {
                col1: 'SubTotal:',
                col2: '116,199.90',
                col3: 'ALL',
                style: {
                    fontSize: 10 //optional, default 12
                }
            }],
        },
        footer: {
            text: "The report is created on a computer and is valid without the signature and stamp.",
        },
        pageEnable: true,
        pageLabel: "Page ",
    };
    var pdfObject = jsPDFInvoiceTemplate.default(prop);
}