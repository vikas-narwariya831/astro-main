const TextDecorate = ({ children, className }) => {
    return (
        <span className={`bent-underline ${className}`}>
            {children}
        </span>
    )
}

export { TextDecorate };