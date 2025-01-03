const Categories = ({ categories, onCategorySelect }) => {
    return (
        <>
            <h1 className="products">CATEGORIES</h1>
            <div className="cardList">
                {categories.map((category) => (
                    <div
                        key={category}
                        className="category-card"
                        onClick={() => onCategorySelect(category)}
                    >
                        <img src={`/category/${category}.png`} alt={category} id="img" />
                        <h3>{category}</h3>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Categories;
