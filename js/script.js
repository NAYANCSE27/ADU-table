let selectRow = null;
let accept = 0;
let products = [];

function onFormSubmit(){
    let formData = readFormData();
    insertNewRecord(formData);
    resetForm();
}


function readFormData(){
    let formData = {};
    
    let user__product__id = document.getElementById("product__id").value;
    formData["product__id"] = user__product__id;
    
    let user__product__name = document.getElementById("product__name").value;
    formData["product__name"] = user__product__name;

    let user__product__price = document.getElementById("product__price").value;
    formData["product__price"] = user__product__price;

    return formData;
}

function insertNewRecord(data) {
    let table = document.getElementById("product__list").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);

    // creating cell 
    cell1 = newRow.insertCell(0);
    cell2 = newRow.insertCell(1);
    cell3 = newRow.insertCell(2);

    // adding value into the define cell
    cell1.innerHTML = data.product__id;
    cell2.innerHTML = data.product__name;
    cell3.innerHTML = data.product__price;
}

function resetForm(){
    document.getElementById("product__id").value = "";
    document.getElementById("product__name").value = "";
    document.getElementById("product__price").value = "";
    selectRow = null;
}
