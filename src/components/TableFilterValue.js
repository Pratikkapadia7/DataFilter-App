const TableFilterValue =(props)=>{
    let item1 ="";
    let item2 ="";
    props.items.forEach(element => {
        if(props.atrValue === element.id){
            item1=element.filterValue[0];
            item2=element.filterValue[1];
        }
    });
    const filterChangeHandler=(event)=>{
        props.onFilterChange(event.target.value);
    };
    const inputChangeHandler = (event)=>{
        props.onInputChange(event.target.value);

    }
    return(
        <div>
            <label>Filter by Data</label>
            <select onChange = {filterChangeHandler}>
                <option value={item1}>{item1}</option>
                <option value={item2}>{item2}</option>
            </select>
            <input onChange={inputChangeHandler} />
        </div>
    );
}
export default TableFilterValue;