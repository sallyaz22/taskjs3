async function getProduct(){
   const resposnse =  await fetch("https://dummyjson.com/products");
   const data = await resposnse.json();
   const products = data.products;

   const result = products.map( function(product){
    return `
    <div class="posts">
    <h2> "${product.title}"</h2>
     <span>"${product.brand}"</span>
     <br>  
    <img src ="${product.thumbnail}"/>
    <h4><span class="span"> This is price </span>${product.price} $ </h4>
    </div>

    `;

   } ).join('')
   document.querySelector(".posts").innerHTML =result

}


getProduct()