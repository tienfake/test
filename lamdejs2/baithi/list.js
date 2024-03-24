const addProduct = () => {
    event.preventDefault();
    const name = document.querySelector('input[name="name"]').value;
    const image = document.querySelector('input[name="image"]').value;
    const price = document.querySelector('input[name="price"]').value;
    const quantity = document.querySelector('input[name="quantity"]').value;
    fetch(`http://localhost:3000/products`, {
        method: 'POST', body: JSON.stringify({
            name, image, price, quantity
        })
    });
    window.location.href = "list.html";



}
const renderProduct = async () => {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    const res = await fetch('http://localhost:3000/products');
    const product = await res.json();
    product.map((product, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${product.name}</td>
        <td><img src="${product.image}" style="width:50px;" alt=""></td>
        <td>${product.price}</td>
        <td>${product.quantity}</td>
        <td>
        <button onclick="delProduct('${product.id}')" class="btn btn-ranger">Xoa</button>
        <a href="edit.html?id=${product.id}"class="btn btn-primary">update</a>
        </td>
        `;
        tbody.appendChild(tr);
    })
}
const delProduct =(pid)=>{
    if(confirm('ban muon xoa')){
        fetch(`http://localhost:3000/products/${pid}`,{method:'DELETE'});
    }
}
renderProduct();
