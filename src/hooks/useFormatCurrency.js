
const useFormatCurrency = () => {
    const formatCurrency = (amount) => {
        let currency = new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
        }).format(amount);
        return currency;
    };

    return { formatCurrency };
};

export { useFormatCurrency };