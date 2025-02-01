const List = ({ style, items }) => {
    if (style === "ordered") {
        return (
            <ol className="list-inside list-decimal space-y-3">
                {items.map((item, index) => (
                    <li
                        key={`${item}-${index}`}
                        dangerouslySetInnerHTML={{ __html: item }}
                    />
                ))}
            </ol>
        );
    }

    return (
        <ul className="list-inside list-disc space-y-3">
            {items.map((item, index) => (
                <li
                    key={`${item}-${index}`}
                    dangerouslySetInnerHTML={{ __html: item }}
                />
            ))}
        </ul>
    );
};

export { List };