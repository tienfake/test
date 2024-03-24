const addProduct = () => {
    event.preventDefault();
    const name = document.querySelector('input[name="name"]').value;
    const image = document.querySelector('input[name="image"]').value;
    const cat_id = document.querySelector('select[name="cat_id"]').value; // Sửa lỗi chính tả ở đây
    const price = document.querySelector('input[name="price"]').value;
    fetch('http://localhost:3000/products', {
        method: 'POST', body: JSON.stringify({
            name, image, cat_id, price
        })
    });
    alert('thêm sản phẩm thành công');
}
    
    const renderProduct =async()=>{
        const tbody = document.querySelector('tbody');
        tbody.innerHTML='';
        const res = await fetch('http://localhost:3000/products');
        const products = await res.json();
        // console.log(products);
        products.map((product,index)=>{
             const tr = document.createElement('tr');
             tr.innerHTML=`
             <td>${index+1}</td>
             <td>${product.name}</td>
             <td><img  src="${product.image}" style="width:60px;"/></td>
             <td>${product.price}</td>
             <td><button class="btn btn-danger" onclick = "delProduct('${product.id}')">Xoa</button>
             <a class="btn btn-primary" href="edit.html?id=${product.id}">sua</a>
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