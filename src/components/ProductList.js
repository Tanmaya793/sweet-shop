import ProductCard from "./ProductCard";
import products from '../data/products';


function ProductList({ category }) {
  const filtered = products.filter(p => p.category === category);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {filtered.map(item => <ProductCard key={item.id} item={item} />)}
    </div>
  );
}

export default ProductList;