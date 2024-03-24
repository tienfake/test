const get_Product = async () => {
    const params = new URLSearchParams(location.search);
    const pid = params.get('id');
    const res = await fetch(`http://localhost:3000/products/${pid}`);
    const product = await res.json();
    document.querySelector('input[name="name"]').value = product.name;
    document.querySelector('input[name="image"]').value = product.image;
    document.querySelector('input[name="price"]').value = product.price;
    document.querySelector('input[name="quantity"]').value = product.quantity;
}
const updateProduct =()=>{
    const params = new URLSearchParams(location.search);
    const pid = params.get('id');
    const name = document.querySelector('input[name="name"]').value;
    const image = document.querySelector('input[name="image"]').value;
    const price = document.querySelector('input[name="price"]').value;
    const quantity = document.querySelector('input[name="quantity"]').value;
    fetch(`http://localhost:3000/products/${pid}`,{method:'PUT',body:JSON.stringify({
        name,image,price,quantity
        
    })});
    
}
get_Product();
