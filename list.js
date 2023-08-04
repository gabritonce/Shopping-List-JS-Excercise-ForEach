
let input_list = document.querySelector('#inputList');
let add_button = document.querySelector('#add');
let delete_button = document.querySelector('#delete');
let list = document.querySelector('#list');

let list_prodotti = [];

function display_list() {
    list.innerHTML = "";
    list_prodotti.forEach(item => {
        let li = document.createElement("li")
        li.innerHTML = item;
        list.appendChild(li);
    })
}

function updateList() {
    list_prodotti.push(input_list.value);
};

add_button.addEventListener("click", function () {
    updateList();
    display_list();
});

function deleteProduct() {
    list_prodotti.pop();
};

delete_button.addEventListener("click", function () {
    deleteProduct();
    display_list();
});

console.log(list_prodotti);
