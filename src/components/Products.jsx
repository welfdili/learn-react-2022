
function Products() {

    let title = "Learn how to create apps with react 2022";
    let showList = true;
    let products = [
        {
            id: 1,
            label: "Iphone 13",
            price: 1250
        },
        {
            id: 2,
            label: "Sumsung",
            price: 1250
        }
    ];
    return (
        <>
            <h1>{ title }</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit ratione et iusto qui suscipit in saepe autem ipsam omnis fugiat dolorum quos mollitia, eos quas corporis doloribus beatae eligendi excepturi.</p>
            
            {showList && (
                <ul>
                    {products.map((product, index) => (
                        <li key={index}>{product.label}</li>
                    ))}
                </ul>
            )}
            
        </>
    )
}

export default Products