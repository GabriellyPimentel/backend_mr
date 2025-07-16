export default function validateFields(fields, location = "body") {
    return (req, res, next) => {
        const errors = [];
        const data = req[location];

        fields.forEach((field) => {
            if (!data || data[field] === undefined || data[field] === null || data[field] === "") {
                errors.push(`Campo '${field}' é obrigatório em ${location}.`);
            }
        });

        if (errors.length > 0) {
            return res.status(400).json({ erros: errors });
        }

        next();
    };
}