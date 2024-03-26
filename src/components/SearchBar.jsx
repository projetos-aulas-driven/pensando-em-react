export default function SearchBar({ filteredText, inStockOnly, setFilteredText, setInStockOnly }) {
    return (
        <div className="search-bar">
            <input
                placeholder="Busca"
                value={filteredText}
                onChange={e => setFilteredText(e.target.value)}
            />
            <div className="select">
                <input
                    type="checkbox"
                    value={inStockOnly}
                    onChange={() => setInStockOnly(!inStockOnly)}
                />
                <span>Mostrar apenas itens disponíveis no estoque</span>
            </div>
        </div>
    )
}