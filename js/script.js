let selectRow = null;
let accept = 0;
let products = [];

function onFormSubmit(){
    let formData = readFormData();
    if(accept === 1){
        products.push(formData);
        insertNewRecord(formData);
    }
    if(selectRow){
        updateRecord(formData);
    }
    resetForm();
}


// validation start here 

function isNameValid(name) {
    return Boolean(name!==null&&name.length<=60&&name.length>=3);
}

function isPriceValid(price) {
    return Boolean(price>0&&price<100000);
}

function isIdValid(id){
    if(id === null) {
        return false;
    }
    for(let i=0; i<products.length; i++) {
        if(products[i].product__id === id){
            return false;
        }
    }
    return true;
}

function readFormData(){
    let formData = {};
    let user__product__id = document.getElementById("product__id").value;
    if(isIdValid(user__product__id)){
        formData["product__id"] = user__product__id;
        accept=1;
    }else {
        const error__name = document.getElementById("product__id__error");
        error__name.innerHTML = "Invalid id";
        error__name.style.color = "Red";
        accept=0;
        return;
    }

    let user__product__name = document.getElementById("product__name").value;
    if(isNameValid(user__product__name)){
        formData["product__name"] = user__product__name;
        accept=1;
    }else {
        const error__name = document.getElementById("product__name__error");
        error__name.innerHTML = "Invalid Name";
        error__name.style.color = "Red";
        accept = 0;
        return;
    }

    let user__product__price = document.getElementById("product__price").value;
    if(isPriceValid(user__product__price)){
        formData["product__price"] = user__product__price;
        accept = 1;
    }else {
        const error__price = document.getElementById("product__price__error");
        error__price.innerHTML = "Invalid price";
        error__price.style.color = "Red";
        accept = 0;
        return;
    }

    return formData;
}

function insertNewRecord(data) {
    let table = document.getElementById("product__list").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);

    // creating cell 
    cell1 = newRow.insertCell(0);
    cell2 = newRow.insertCell(1);
    cell3 = newRow.insertCell(2);
    cell4 = newRow.insertCell(3);

    // adding value into the define cell
    cell1.innerHTML = data.product__id;
    cell2.innerHTML = data.product__name;
    cell3.innerHTML = data.product__price;
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a> 
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm(){
    document.getElementById("product__id").value = "";
    document.getElementById("product__name").value = "";
    document.getElementById("product__price").value = "";
    selectRow = null;
}

function onEdit(td) {
    selectRow = td.parentElement.parentElement;
    document.getElementById("product__id").value = selectRow.cells[0].innerHTML;
    document.getElementById("product__name").value = selectRow.cells[1].innerHTML;
    document.getElementById("product__price").value = selectRow.cells[2].innerHTML;
}

function updateRecord(formData){
    selectRow.cells[0].innerHTML = formData.product__id;
    selectRow.cells[1].innerHTML = formData.product__name;
    selectRow.cells[2].innerHTML = formData.product__price;
}

function onDelete(td) {
    if(confirm("Are you sure to delete this record?")){
        row = td.parentElement.parentElement;
        document.getElementById("product__list").deleteRow(row.rowIndex);
        resetForm();
    }
}