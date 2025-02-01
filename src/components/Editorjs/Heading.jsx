
const Heading = ({ text, level }) => {
    const fontSize = {
        1: "text-4xl",
        2: "text-3xl",
        3: "text-2xl",
        4: "text-xl",
        5: "text-lg",
        6: "text-sm",
    };

    if (level == 1) {
        return (
            <h1
                className={`${fontSize[level]} font-[500] text-primary`}
                dangerouslySetInnerHTML={{ __html: `<span> ${text} </span>` }}
            />
        );
    } else if (level == 2) {
        return (
            <h2
                className={`${fontSize[level]} font-[500] text-primary`}
                dangerouslySetInnerHTML={{ __html: `<span> ${text} </span>` }}
            />
        );
    } else if (level == 3) {
        return (
            <h3
                className={`${fontSize[level]} font-[500]`}
                dangerouslySetInnerHTML={{ __html: `<span> ${text} </span>` }}
            />
        );
    } else if (level == 4) {
        return (
            <h4
                className={`${fontSize[level]} font-[500]`}
                dangerouslySetInnerHTML={{ __html: `<span> ${text} </span>` }}
            />
        );
    } else if (level == 5) {
        return (
            <h5
                className={`${fontSize[level]} font-[500]`}
                dangerouslySetInnerHTML={{ __html: `<span> ${text} </span>` }}
            />
        );
    } else if (level == 6) {
        return (
            <h6
                className={`${fontSize[level]} font-[500]`}
                dangerouslySetInnerHTML={{ __html: `<span> ${text} </span>` }}
            />
        );
    }
};

export { Heading };