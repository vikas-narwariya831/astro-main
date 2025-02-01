
const FlexColInput = ({ label, type = "text", children, required = true, className, ...props }) => {
    return (
        <div className={`space-y-3 w-full ${className}`}>
            <label className="block font-[500] text-primary">{label} {required && <span className="text-red-600">*</span>}  </label>
            {!children ? <input required={required} type={type} {...props} className="rounded-lg border w-full p-3" /> : children}
        </div >
    )
}

export { FlexColInput }