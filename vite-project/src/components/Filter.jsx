const Filter = (props) => {
    let filterdata = props.filteredData;
    let category = props.category;
    let setCategory = props.setCategory;

    return (
        <div>
            <h1>Hello</h1>
            {filterdata.map((data, index) => (
                <button key={index} onClick={() => setCategory(data.title)}> 
                    {data.title} 
                </button>
            ))}
        </div>
    );
};

export default Filter;
