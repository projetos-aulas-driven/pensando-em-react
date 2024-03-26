import ProductsCategory from "./ProductsCategory";
import ProductsRow from "./ProductsRow";

export default function ProductsTable({ filteredText, inStockOnly, products }) {
    let lastCategory;
    const layout = [];

    products.forEach(prod => {
        // Se a checkbox de produto disponível estiver marcada
        // E o produto não estiver disponível, não quero mostrar nada
        if (inStockOnly && !prod.stocked){
            return;
        }

        // Se tiver texto de busca e o produto não contiver o termo, não quero mostrar nada
        if (!prod.name.toLowerCase().includes(filteredText.toLowerCase())) {
            return;
        }

        // Precisa renderizar uma nova categoria?
        if (prod.category !== lastCategory) {
            layout.push(<ProductsCategory key={prod.category} category={prod.category} />);
            lastCategory = prod.category;
        }

        // Renderizar o item em si
        layout.push(<ProductsRow key={prod.name} product={prod}/>);
    })

    return (
        <div>
            {layout}
        </div>
    )

}