
const Table = ({ withHeadings, content }) => {

    return (
        <table>
            {withHeadings && (
                <thead>
                    <tr>
                        {content[0]?.map((head) => (
                            <th key={head}>{head}</th>
                        ))}
                    </tr>
                </thead>
            )}
            <tbody>
                {withHeadings
                    ? content.slice(1).map((row, i) => (
                        <tr key={i} className={`${trStyles}`}>
                            {row.map((column, i) => (
                                <td key={column + i}>{column}</td>
                            ))}
                        </tr>
                    ))
                    : content.map((row, i) => (
                        <tr key={i}>
                            {row.map((column) => (
                                <td key={column + i}>{column}</td>
                            ))}
                        </tr>
                    ))}
            </tbody>
        </table>
    );
};

export { Table };