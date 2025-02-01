
const Img = ({ file: { url }, caption }) => {
    return (
        <img src={url} className="w-full" alt={caption} />
    )
}

export { Img };