export const retrieveProductsApi =
    () => fetch('https://fakestoreapi.com/products/categories')
            .then(resp => resp.json());

export const retrieveProductsByCategoryApi =
    (category) => fetch(`https://fakestoreapi.com/products/category/${category}`)
                    .then(resp => resp.json());

/*
usage eg: retrieveProductsByCategoryApi(`https://fakestoreapi.com/products/category/${category}`)
              .then(data => setProducts(data));
*/