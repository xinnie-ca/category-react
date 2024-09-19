import "./App.css";

function SearchBar() {
  return (
    <>
      <form>
        <input type="text" placeholder="Search..." />
        <div>
          <input type="checkbox" /> Only show products in stock
        </div>
      </form>
    </>
  );
}

function ProductRow({ product }) {
  // This is a function called name, need pass product as parameter.
  const name = (product) => {
    if (product.stocked) {
      return product.name;
    } else {
      return <span style={{ color: "red" }}>{product.name}</span>;
    }
  };
  return (
    <tr>
      <td>{name(product)}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <>
      <tr col>
        <th>{category}</th>
      </tr>
    </>
  );
}

function ProductTable({ products }) {
  // rows contains JSX
  const rows = [];
  let lastCategory = null;
  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name}></ProductRow>);
    lastCategory = product.category;
  });

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>{rows}</tbody>
      </table>
    </>
  );
}

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function FilterableProductTable() {
  return (
    <>
      <div>
        <SearchBar></SearchBar>
        <ProductTable products={PRODUCTS} />
      </div>
    </>
  );
}
export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
