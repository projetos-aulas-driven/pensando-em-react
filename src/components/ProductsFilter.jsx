import { useState } from "react";
import ProductsTable from "./ProductsTable";
import SearchBar from "./SearchBar";

export default function ProductsFilter(props) {
    const [filteredText, setFilteredText] = useState("");
    const [inStockOnly, setInStockOnly] = useState(false);

    return (
        <>
            <SearchBar
                filteredText={filteredText}
                inStockOnly={inStockOnly}
                setFilteredText={setFilteredText}
                setInStockOnly={setInStockOnly}
            />
            <ProductsTable
                products={props.products}
                filteredText={filteredText}
                inStockOnly={inStockOnly}
            />
        </>
    )
}