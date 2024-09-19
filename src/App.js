import "./App.css";

function SearchBar() {
  return (
    <>
      <form>
        <input type="text" placeholder="Search..." />
        <div>
          <input type="checkbox" />
          Only show products in stock
        </div>
      </form>
    </>
  );
}

function ProductTable() {}

function ProductCategoryRow() {}

function ProductRow() {}

export default function FilterProductTable() {
  return <SearchBar></SearchBar>;
}
