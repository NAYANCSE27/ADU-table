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


function makeInitail(){
    document.getElementById("product__id__error").innerHTML = "";
    document.getElementById("product__name__error").innerHTML = "";
    document.getElementById("product__price__error").innerHTML = "";

    
    document.getElementById("user__product__id").style.backgroundColor = 'white';
    document.getElementById("user__product__name").style.backgroundColor = 'white';
    document.getElementById("user__product__price").style.backgroundColor = 'white';
}


//getting button id and taking action according to the id

function deleteItem(){
    let id = this.id;
    id = id.slice(6);
    
    // getting the specific user id for delete it from the product list 
    
    let product__idd = document.getElementById("product__table").rows[id].cells[0].innerHTML;
    //window.alert(product__idd);

    for(let i=0; i<products.length; i++) {
        if(products[i].product__id === product__idd){
            products.splice(i,1);
            break;
        }
    }

    document.getElementsByTagName("tr")[id].remove();
}


function addUserItem(){
    const product__id = document.getElementById("user__product__id").value;
    let product__name = document.getElementById("user__product__name").value;
    const product__price = document.getElementById("user__product__price").value;

    // Unique ID checking
    if(isUniqueID(product__id)){
        //window.alert(`${product__id} is used for another product ID`);
        document.getElementById("user__product__id").style.backgroundColor = 'red';
        document.getElementById("product__id__error").innerHTML = "This ID is used for another product";
        return;
    }

    // Removing extra spaces from the product name 
    product__name = product__name.trim();

    // length of product name checking
    if(product__name.length > 60){
        //window.alert(`${product__name} is too large to use for as product name`);
        document.getElementById("user__product__name").style.backgroundColor = 'red';
        document.getElementById("product__name__error").innerHTML = "Product name should less then 60 cherecters";
        return;
    }

    // product price checking
    if(product__price < 0) {
        //window.alert(`Negative value of any product is impossible`);
        document.getElementById("user__product__price").style.backgroundColor = 'red';
        document.getElementById("product__price__error").innerHTML = "Negative price is not possible";
        return;
    }
    if(product__price > 100000){
        //window.alert(`${product__price} is huge amount for any product`);
        document.getElementById("user__product__price").style.backgroundColor = 'red';
        document.getElementById("product__price__error").innerHTML = "Too large amount for single product";
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


    // Delete Elements 

    delete__button.setAttribute("onclick", deleteItem);
    delete__button.onclick = deleteItem;

    single__item1.innerText = product__id;
    single__item2.innerText = product__name;
    single__item3.innerText = product__price;
    single__item4.append(edit__button);
    single__item5.append(delete__button);

    
    makeEmpty();

    row.append(single__item1,single__item2,single__item3,single__item4,single__item5);
    const table = document.getElementById("product__table");
    table.append(row);

    makeInitail();
}



// resources:
// 1. https://stackoverflow.com/questions/6956258/adding-onclick-event-to-dynamically-added-button#comment116479771_6956368
// 2. https://stackoverflow.com/questions/10291017/how-to-get-id-of-button-user-just-clicked
// 3. https://dirask.com/posts/JavaScript-remove-first-3-characters-from-string-xpzxd1
// 4. https://www.geeksforgeeks.org/how-to-remove-the-table-row-in-a-table-using-javascript/
// 5. https://www.w3schools.com/jsref/coll_table_cells.asp
// 6. https://stackoverflow.com/questions/10024866/remove-object-from-array-using-javascript
