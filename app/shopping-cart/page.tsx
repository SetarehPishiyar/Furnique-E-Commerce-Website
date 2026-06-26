import CartItems from "@/components/CartItems";
import PageTitle from "@/components/PageTitle";

const ShoppingCart = () => {
  return (
    <div>
      <PageTitle title="Shopping cart" description="View your shopping cart." />
      <CartItems />
    </div>
  );
};

export default ShoppingCart;
