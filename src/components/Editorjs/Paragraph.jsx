
const Paragraph = ({ text }) => {
    return <p dangerouslySetInnerHTML={{ __html: `<span> ${text} </span>` }} />;
};

export { Paragraph };