let title = "";
let temp = [];
let date = "";

const currentdate = new Date();
const currentYear = currentdate.getFullYear();
const currentMonthValue = currentdate.getMonth() + 1;
let month = "";

switch (currentMonthValue) {
    case 1:
        month = "January";
        break;
    case 2:
        month = "February";
        break;
    case 3:
        month = "March";
        break;
    case 4:
        month = "April";
        break;
    case 5:
        month = "May";
        break;
    case 6:
        month = "June";
        break;
    case 7:
        month = "July";
        break;
    case 8:
        month = "August";
        break;
    case 9:
        month = "September";
        break;
    case 10:
        month = "Octomber";
        break;
    case 11:
        month = "November";
        break;
    case 12:
        month = "December";
        break;
}

Ord = [
    {
        index: 1,
        Cuid: "Cu0001",
        Orid: "OR1001",
        Order: [
            {
                "Itid": "IT1005",
                "Itname": "Chicken Burger(Regular)",
                "qty": "2",
                "price": 800,
                "Netprice": 1280,
                "Totalprice": 1600
            }
        ],
        date: "2024-7-20",
        Price: 1280.5
    },
    {
        index: 2,
        Cuid: "Cu0002",
        Orid: "OR1002",
        Order: [
            {
                "Itid": "IT1031",
                "Itname": "Chicken Penne Pasta",
                "qty": 3,
                "price": 1700,
                "Netprice": 5100,
                "Totalprice": 5100
            },
            {
                "Itid": "IT1035",
                "Itname": "Tagliatelle Pasta",
                "qty": 3,
                "price": 2400,
                "Netprice": 7128,
                "Totalprice": 7200
            },
            {
                "Itid": "IT1033",
                "Itname": "Creamy Shrimp Pasta",
                "qty": 1,
                "price": 2000,
                "Netprice": 2000,
                "Totalprice": 2000
            }
        ],
        date: "2024-7-10",
        Price: 14228
    },
    {
        index: 3,
        Cuid: "Cu0003",
        Orid: "OR1003",
        Order: [
            {
                "Itid": "IT1037",
                "Itname": "Fried Chicken(Small)",
                "qty": 2,
                "price": 1200,
                "Netprice": 2400,
                "Totalprice": 2400
            }
        ],
        date: "2024-7-5",
        Price: 2400
    },
    {
        index: 4,
        Cuid: "Cu0001",
        Orid: "OR1004",
        Order: [
            {
                "Itid": "IT1003",
                "Itname": "Turkey Burger",
                "qty": 4,
                "price": 1600,
                "Netprice": 6400,
                "Totalprice": 0
            },
            {
                "Itid": "IT1002",
                "Itname": "Classic Burger(Regular)",
                "qty": 5,
                "price": 750,
                "Netprice": 3187.5,
                "Totalprice": 3750
            },
            {
                "Itid": "IT1005",
                "Itname": "Chicken Burger(Regular)",
                "qty": 5,
                "price": 800,
                "Netprice": 3200,
                "Totalprice": 4000
            },
            {
                "Itid": "IT1010",
                "Itname": "Olive Burger",
                "qty": 5,
                "price": 1800,
                "Netprice": 9000,
                "Totalprice": 9000
            },
            {
                "Itid": "IT1014",
                "Itname": "Paneer Burger",
                "qty": 5,
                "price": 900,
                "Netprice": 4500,
                "Totalprice": 4500
            }
        ],
        date: "2024-8-20",
        Price: 26287.5
    },
    {
        index: 5,
        Cuid: "Cu0003",
        Orid: "OR1005",
        Order: [
            {
                "Itid": "IT1003",
                "Itname": "Turkey Burger",
                "qty": 4,
                "price": 1600,
                "Netprice": 6400,
                "Totalprice": 0
            },
            {
                "Itid": "IT1002",
                "Itname": "Classic Burger(Regular)",
                "qty": 5,
                "price": 750,
                "Netprice": 3187.5,
                "Totalprice": 3750
            },
            {
                "Itid": "IT1005",
                "Itname": "Chicken Burger(Regular)",
                "qty": 5,
                "price": 800,
                "Netprice": 3200,
                "Totalprice": 4000
            },
            {
                "Itid": "IT1010",
                "Itname": "Olive Burger",
                "qty": 5,
                "price": 1800,
                "Netprice": 9000,
                "Totalprice": 9000
            },
            {
                "Itid": "IT1014",
                "Itname": "Paneer Burger",
                "qty": 5,
                "price": 900,
                "Netprice": 4500,
                "Totalprice": 4500
            }
        ],
        date: "2024-8-10",
        Price: 26287.5
    },
    {
        index: 5,
        Cuid: "Cu0003",
        Orid: "OR1005",
        Order: [
            {
                "Itid": "IT1003",
                "Itname": "Turkey Burger",
                "qty": 4,
                "price": 1600,
                "Netprice": 6400,
                "Totalprice": 0
            },
            {
                "Itid": "IT1002",
                "Itname": "Classic Burger(Regular)",
                "qty": 5,
                "price": 750,
                "Netprice": 3187.5,
                "Totalprice": 3750
            },
            {
                "Itid": "IT1005",
                "Itname": "Chicken Burger(Regular)",
                "qty": 5,
                "price": 800,
                "Netprice": 3200,
                "Totalprice": 4000
            },
            {
                "Itid": "IT1010",
                "Itname": "Olive Burger",
                "qty": 5,
                "price": 1800,
                "Netprice": 9000,
                "Totalprice": 9000
            },
            {
                "Itid": "IT1014",
                "Itname": "Paneer Burger",
                "qty": 5,
                "price": 900,
                "Netprice": 4500,
                "Totalprice": 4500
            }
        ],
        date: "2025-8-20",
        Price: 26287.5
    },
    {
        index: 5,
        Cuid: "Cu0003",
        Orid: "OR1005",
        Order: [
            {
                "Itid": "IT1003",
                "Itname": "Turkey Burger",
                "qty": 4,
                "price": 1600,
                "Netprice": 6400,
                "Totalprice": 0
            },
            {
                "Itid": "IT1002",
                "Itname": "Classic Burger(Regular)",
                "qty": 5,
                "price": 750,
                "Netprice": 3187.5,
                "Totalprice": 3750
            },
            {
                "Itid": "IT1005",
                "Itname": "Chicken Burger(Regular)",
                "qty": 5,
                "price": 800,
                "Netprice": 3200,
                "Totalprice": 4000
            },
            {
                "Itid": "IT1010",
                "Itname": "Olive Burger",
                "qty": 5,
                "price": 1800,
                "Netprice": 9000,
                "Totalprice": 9000
            },
            {
                "Itid": "IT1014",
                "Itname": "Paneer Burger",
                "qty": 5,
                "price": 900,
                "Netprice": 4500,
                "Totalprice": 4500
            }
        ],
        date: "2025-7-10",
        Price: 26287.5
    },
    {
        index: 6,
        Cuid: "Cu0003",
        Orid: "OR1006",
        Order: [
            {
                "Itid": "IT1003",
                "Itname": "Turkey Burger",
                "qty": 4,
                "price": 1600,
                "Netprice": 6400,
                "Totalprice": 0
            },
            {
                "Itid": "IT1002",
                "Itname": "Classic Burger(Regular)",
                "qty": 5,
                "price": 750,
                "Netprice": 3187.5,
                "Totalprice": 3750
            },
            {
                "Itid": "IT1005",
                "Itname": "Chicken Burger(Regular)",
                "qty": 5,
                "price": 800,
                "Netprice": 3200,
                "Totalprice": 4000
            },
            {
                "Itid": "IT1010",
                "Itname": "Olive Burger",
                "qty": 5,
                "price": 1800,
                "Netprice": 9000,
                "Totalprice": 9000
            },
            {
                "Itid": "IT1014",
                "Itname": "Paneer Burger",
                "qty": 5,
                "price": 900,
                "Netprice": 4500,
                "Totalprice": 4500
            }
        ],
        date: "2025-5-17",
        Price: 26287.5
    }
];

localStorage.setItem("Ord",JSON.stringify(Ord)); //to check the validation set the item key name to Order in this line

function MonthlyGenerate() {
    temp = checkmonth(JSON.parse(localStorage.getItem("Order")));
    if(temp==null){
        alert("No Orders Have been Done");
    }
    else{
        var prop = {
            outputType: jsPDFInvoiceTemplate.Save, //Allows for additional configuration prior to writing among others, adds support for different languages and symbols
            returnJsPDFDocObject: true,
            fileName: "Monthly Report of " + month + "",
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
                label: "Report issued for:",
                address: "Icet Panadura.",
                phone: "(+94) 76 488 77322",
                email: "BQBurgers@gmail.com",
                otherInfo: "www.BQBurgers.com",
            },
            invoice: {
                invDate: currentMonthValue + "/" + currentYear,
                headerBorder: false,
                tableBodyBorder: false,
                header: [
                    {
                        title: "#",
                        style: {
                            width: 10
                        }
                    },
                    {
                        title: "Order ID",
                        style: {
                            width: 50
                        }
                    },
                    {
                        title: "Order Date",
                        style: {
                            width: 80
                        }
                    },
                    { title: "Total" }
                ],
                table: Array.from(Array(temp.length), (item, index) => ([
                    index + 1,
                    temp[index].Orid,
                    temp[index].date,
                    temp[index].Price
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
    

}

function AnnualGenerate() {
    temp = checkyear(JSON.parse(localStorage.getItem("Order")));
    if(temp==null){
        alert("No Orders Have been Done");
    }
    else{
        var prop = {
            outputType: jsPDFInvoiceTemplate.Save, //Allows for additional configuration prior to writing among others, adds support for different languages and symbols
            returnJsPDFDocObject: true,
            fileName: "Anual report of " + currentYear,
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
                label: "Report issued for:",
                address: "Icet Panadura.",
                phone: "(+94) 76 488 77322",
                email: "BQBurgers@gmail.com",
                otherInfo: "www.BQBurgers.com",
            },
            invoice: {
                invDate: String(currentYear),
                headerBorder: false,
                tableBodyBorder: false,
                header: [
                    {
                        title: "#",
                        style: {
                            width: 10
                        }
                    },
                    {
                        title: "Order ID",
                        style: {
                            width: 50
                        }
                    },
                    {
                        title: "Order Date",
                        style: {
                            width: 80
                        }
                    },
                    { title: "Total" }
                ],
                table: Array.from(Array(temp.length), (item, index) => ([
                    index + 1,
                    temp[index].Orid,
                    temp[index].date,
                    temp[index].Price
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
    
}

function ItemCount() {
    temp = JSON.parse(localStorage.getItem("Item"));
    var prop = {
        outputType: jsPDFInvoiceTemplate.Save, //Allows for additional configuration prior to writing among others, adds support for different languages and symbols
        returnJsPDFDocObject: true,
        fileName: "Food Item Count",
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
            label: "Report issued for:",
            address: "Icet Panadura.",
            phone: "(+94) 76 488 77322",
            email: "BQBurgers@gmail.com",
            otherInfo: "www.BQBurgers.com",
        },
        invoice: {
            invDate: String(currentYear),
            headerBorder: false,
            tableBodyBorder: false,
            header: [
                {
                    title: "#",
                    style: {
                        width: 10
                    }
                },
                {
                    title: "Item ID",
                    style: {
                        width: 50
                    }
                },
                {
                    title: "Name",
                    style: {
                        width: 80
                    }
                },
                { title: "Quantity" }
            ],
            table: Array.from(Array(temp.length), (item, index) => ([
                index + 1,
                temp[index].Itid,
                temp[index].Itname,
                temp[index].Itqty
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

function topCustomer() {
    temp = sortCustomer(JSON.parse(localStorage.getItem("Order")));
    var prop = {
        outputType: jsPDFInvoiceTemplate.Save, //Allows for additional configuration prior to writing among others, adds support for different languages and symbols
        returnJsPDFDocObject: true,
        fileName: "Best Customers",
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
            label: "Report issued for:",
            address: "Icet Panadura.",
            phone: "(+94) 76 488 77322",
            email: "BQBurgers@gmail.com",
            otherInfo: "www.BQBurgers.com",
        },
        invoice: {
            invDate: String(currentYear),
            headerBorder: false,
            tableBodyBorder: false,
            header: [
                {
                    title: "#",
                    style: {
                        width: 10
                    }
                },
                {
                    title: "Customer ID",
                    style: {
                        width: 50
                    }
                },
                {
                    title: "Name",
                    style: {
                        width: 80
                    }
                },
                { title: "Order Qty" },
                { title: "Total Price" }
            ],
            table: Array.from(Array(temp.length), (item, index) => ([
                index + 1,
                temp[index].id,
                temp[index].name,
                temp[index].qty,
                temp[index].total
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

function checkmonth(temp) {
    let index = 1;
    let Temp = [];
    temp.forEach(element => {
        const year = Number(element.date.substring(0, 4));
        const month = Number(element.date.substring(5, 7));
        const day = Number(element.date.substring(8));
        console.log(month+" "+currentMonthValue);
        if (year == currentYear && month == currentMonthValue) {
            console.log(month+" "+currentMonthValue);
            Temp.push(element);
        }
    });
    return Temp;
}

function checkyear(temp) {
    let Temp = [];
    temp.forEach(element => {
        const year = Number(element.date.substring(0, 4));
        const month = Number(element.date.substring(5, 6));
        const day = Number(element.date.substring(8));
        if (year == currentYear) {
            Temp.push(element);
        }
    });
    return Temp;
}

function sortCustomer(order){
    let total = 0;
    let ordqty = 0;
    let tempcustomer=[];
    customer = JSON.parse(localStorage.getItem("Customer"));
    customer.forEach(i => {
        order.forEach(j => {
            if(i.Cuid == j.Cuid){
                total+=Number(j.Price);
                ordqty++;
            }
        });
        tempcustomer.push({id:i.Cuid,name:i.Cuname,qty:ordqty,total:total});
        ordqty=0;
        total =0;
    });
    for (let i = 0; i < tempcustomer.length; i++) {
        for (let j = i; j < tempcustomer.length; j++) {
            if(tempcustomer[i].total<tempcustomer[j].total){
                temp = tempcustomer[i];
                tempcustomer[i] = tempcustomer[j];
                tempcustomer[j] =temp;
            }
        }
    }
    for (let i = 0; i < tempcustomer.length; i++) {
        if(tempcustomer[i].total==0){
            tempcustomer.splice(i,1);
            i--;
        }
    }
    return tempcustomer;
}

