const products =[
    {
      id: "1",
      name: "iPhone 12",
      price: 1000,
      category: "celular",
      img: "../../src/img/iphone.jpg",
      stock: 25,
      description: "Descripción de iPhone 12",
    },
    {
      id: "2",
      name: "Samsung Galaxy S21",
      price: 900,
      category: "celular",
      img: "../../src/img/samsung.jpg",
      stock: 30,
      description: "Descripción de Samsung Galaxy S21",
    },
    {
      id: "3",
      name: "Xiaomi Mi 11",
      price: 800,
      category: "celular",
      img: "../../src/img/xiaomi.jpg",
      stock: 20,
      description: "Descripción de Xiaomi Mi 11",
    },
    ,
  ];


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products)
        }, 1000)
    })
}

export const getProductsByCategory = (categoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((product) => product.category === categoria))
    }, 2500);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((product) => product.id === id));
    }, 2500);
  });
};