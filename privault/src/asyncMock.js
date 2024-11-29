const products = [
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
    name: "Ipad 8va generacion",
    price: 1200,
    category: "tablet",
    img: "../../src/img/ipad.jpg",
    stock: 0,
    description: "Descripcion de Ipad",
  },
  {
    id: "4",
    name: "Galaxies Tab",
    price: 1200,
    category: "tablet",
    img: "../../src/img/tabletSam.jpg",
    stock: 0,
    description: "Descripcion de Ipad",
  },
  {
    id: "5",
    name: "notebook",
    price: 1200,
    category: "computer",
    img: "../../src/img/lenovo.jpg",
    stock: 0,
    description: "Descripcion de Ipad",
  },
  {
    id: "6",
    name: "notebook",
    price: 1200,
    category: "computer",
    img: "../../src/img/hp.jpg",
    stock: 0,
    description: "Descripcion de computer",
  },
];


export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 1000)
  })
}

export const getProductsByCategory = (categoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((product) => product.category == categoria))
    }, 2500);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((product) => product.id == id));
    }, 2500);
  });
};