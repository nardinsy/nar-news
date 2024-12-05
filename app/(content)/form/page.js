const updateCart = async (productId) => {
  console.log(productId);
};

function AddToCart() {
  const productId = "1";
  async function addToCart(productId, formData) {
    "use server";
    console.log(productId);
    console.log(formData);
    await updateCart(productId);
  }

  const addProductToCart = addToCart.bind(null, productId);

  return (
    <form action={addProductToCart}>
      <button type="submit">Add to Cart</button>
    </form>
  );
}

export default AddToCart;
