  const products = [];
    const form = document.getElementById('productForm');
    const productList = document.getElementById('productList');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

       
        const name = document.getElementById('name').value.trim();
        const description = document.getElementById('description').value;
        const price = parseFloat(document.getElementById('price').value);
        const imageUrl = document.getElementById('imageUrl').value;

               document.getElementById('nameError').style.display = 'none';
        document.getElementById('priceError').style.display = 'none';

        let hasError = false;
        
        if (price <= 0) {
            document.getElementById('priceError').style.display = 'block';
            hasError = true;
        }

            const productExists = products.find(p => p.name.toLowerCase() === name.toLowerCase());
        if (productExists) {
            document.getElementById('nameError').style.display = 'block';
            hasError = true;
        }

        if (hasError) return;

                const newProduct = { name, description, price, imageUrl };
        products.push(newProduct);

       
        renderProducts();
        form.reset();
    });

    function renderProducts() {
        productList.innerHTML = '';
        products.forEach(product => {
            const cardHtml = `
                <div class="col">
                    <div class="card h-100 shadow-sm">
                        <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}" style="height: 200px; object-fit: cover;">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text text-muted">${product.description}</p>
                            <p class="fw-bold text-success">R$ ${product.price.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            `;
            productList.innerHTML += cardHtml;
        });
    }


    