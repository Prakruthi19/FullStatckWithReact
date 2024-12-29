const Filter = (props) => {
    let filterdata = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;

    function handleClick(category)
    {
        setCategory(category);
    }
    return (
        <div className = "w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
            {filterdata.map((data) => (
                <button 
                className={`text-xl px-2 py-1 rounded-md text-white bg-black hover:bg-opacity-30
                 border-0 transition-all duration-300
                ${category==data.title ?  "bg-opacity-60 border-white": "bg-opacity-50 border-transparent"}`}
                onClick={() => handleClick(data.title)}> 
                    {data.title} 
                </button>
            ))}
        </div>
    );
};

export default Filter;
