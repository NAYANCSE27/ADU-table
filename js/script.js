const products = [];

function makeEmpty(){
    document.getElementById("user__product__id").value="";
    document.getElementById("user__product__name").value="";
    document.getElementById("user__product__price").value="";
}

function isUniqueID(id){
    for(let i = 0; i < products.length; i++) {
        if(products[i].product__id === id)  return 1;
    }
    return 0;
}

function addUserItem(){
    const product__id = document.getElementById("user__product__id").value;
    let product__name = document.getElementById("user__product__name").value;
    const product__price = document.getElementById("user__product__price").value;

    // Unique ID checking
    if(isUniqueID(product__id)){
        window.alert(`${product__id} is used for another product ID`);
        document.getElementById("user__product__id").style.backgroundColor = 'red';
        return;
    }

    // Removing extra spaces from the product name 
    product__name = product__name.trim();

    // length of product name checking
    if(product__name.length > 60){
        window.alert(`${product__name} is too large to use for as product name`);
        document.getElementById("user__product__name").style.backgroundColor = 'red';
        return;
    }

    // product price checking
    if(product__price < 0) {
        window.alert(`Negative value of any product is impossible`);
        document.getElementById("user__product__price").style.backgroundColor = 'red';
        return;
    }
    if(product__price > 100000){
        window.alert(`${product__price} is huge amount for any product`);
        document.getElementById("user__product__price").style.backgroundColor = 'red';
        return;
    }


    products.push({product__id, product__name, product__price});


    const row = document.createElement("tr");
    const single__item1 = document.createElement("td");
    const single__item2 = document.createElement("td");
    const single__item3 = document.createElement("td");
    const single__item4 = document.createElement("td");
    const single__item5 = document.createElement("td");

    let item__count = products.length;

    const edit__button = document.createElement("button");
    const delete__button = document.createElement("button");
    edit__button.innerText = "Edit";
    delete__button.innerText = "Delete";
    edit__button.id = "edit"+item__count;
    delete__button.id = "delete"+item__count;

    single__item1.innerText = product__id;
    single__item2.innerText = product__name;
    single__item3.innerText = product__price;
    single__item4.append(edit__button);
    single__item5.append(delete__button);

    
    makeEmpty();

    row.append(single__item1,single__item2,single__item3,single__item4,single__item5);
    const table = document.getElementById("product__table");
    table.append(row);
}