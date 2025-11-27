// get product

export const getProduct = (req, res) => {
  res.json();
};

//  create product
export const createProduct = (req, res) => {
  const { name, price, category, description } = req.body;
};

const newProduct = {
  id: Date.now(),
  name,
  price,
  category,
  description,
};

// delete producte

export const deleteProduct = (req, res) => {
  const { id } = req.params;
};

for (let i = 0; i < products.length; i++) {
  if (products[i].id == id) {
    products.splice(i, 1);
    break;
  }
}
res.json({ success: true });
