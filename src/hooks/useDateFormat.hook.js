const useDateFormat = () => {
    const formatDate = (raw) => {
        if (!raw) return null;

        const options = { day: "numeric", month: "long", year: "numeric" };
        const formattedDate = new Date(raw).toLocaleDateString("en-US", options);
        return formattedDate;
    };

    return { formatDate };
};

export { useDateFormat };