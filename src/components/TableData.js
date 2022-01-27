

const TableData = (props) =>{
    return(
        <table className="table-main">
            <tr>
                <td>{props.items.id}</td>
                <td>{props.items.firstName}</td>
                <td>{props.items.lastName}</td>
                <td>{props.items.dateOfBirth}</td>
                <td>{props.items.creditScore}</td>
            </tr>
        </table>
    );
    
}
export default TableData;