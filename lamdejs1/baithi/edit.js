const get_Product = async () => {
    //laays id
    const params = new URLSearchParams(location.search);
    const pid = params.get('id');
    const res =await fetch(`http://localhost:3000/products/${pid}`);
    const product = await res.json();
     document.querySelector('input[name="name"]').value = product.name;
     document.querySelector('input[name="image"]').value = product.image;
     document.querySelector('select[name="cat_id"]').value = product.cat_id; // Sửa lỗi chính tả ở đây
     document.querySelector('input[name="price"]').value = product.price;
}
const updateProduct = async()=>{
    const params = new URLSearchParams(location.search);
    const pid = params.get('id');
    const name = document.querySelector('input[name="name"]').value;
    const image = document.querySelector('input[name="image"]').value;
    const cat_id = document.querySelector('select[name="cat_id"]').value; // Sửa lỗi chính tả ở đây
    const price = document.querySelector('input[name="price"]').value;
    fetch(`http://localhost:3000/products/${pid}`,{method:'PUT',body:JSON.stringify({
        name,image,cat_id,price
    })});
}
get_Product();