const Filter = (props) => {
    let filterdata = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;

    function handleClick(category)
    {
        setCategory(category);
    }
    return (
        <div>
            {filterdata.map((data) => (
                <button onClick={() => handleClick(data.title)}> 
                    {data.title} 
                </button>
            ))}
        </div>
    );
};

export default Filter;
