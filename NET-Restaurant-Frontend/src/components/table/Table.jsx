import "./Table.css";

const Table = ({columns, rows}) => {
    // console.log(columns);
    // console.log(rows);
    return (
        <table className="Table">
            <thead>
                <tr>
                    {columns ? columns.map((column) => <th key={column.key}>{column.name}</th>) : undefined}
                </tr>
            </thead>
            <tbody>
                {rows ? rows.map(row =>
                    (
                        <tr key={row.id}>
                            {
                                row.data.map(value => 
                                    <td key={value.id}>{value.data === null ? "null" : value.data}</td>
                                )
                            }
                        </tr>
                    )
                ) : undefined}
            </tbody>
        </table>
    )
};

export default Table;