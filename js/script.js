const products = [];

function makeEmpty(){
    document.getElementById("user__product__id").value="";
    document.getElementById("user__product__name").value="";
    document.getElementById("user__product__price").value="";
}

function addUserItem(){
    const product__id = document.getElementById("user__product__id").value;
    const product__name = document.getElementById("user__product__name").value;
    const product__price = document.getElementById("user__product__price").value;

    makeEmpty();


    products.push({product__id, product__name, product__price});


    const row = document.createElement("tr");
    const single__item1 = document.createElement("td");
    const single__item2 = document.createElement("td");
    const single__item3 = document.createElement("td");
    single__item1.innerText = product__id;
    single__item2.innerText = product__name;
    single__item3.innerText = product__price;

    row.append(single__item1,single__item2,single__item3);
    const table = document.getElementById("product__table");
    table.append(row);
}