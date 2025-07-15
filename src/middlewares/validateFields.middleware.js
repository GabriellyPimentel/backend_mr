export default function validateFields(fields) {
    return (req, res, next) => {
        const errors = [];

        fields.forEach((field) => {
            if (!req.body[field]) {
                errors.push(`Campo '${field}' é obrigatório.`);
            }
        });

        if (errors.length > 0) {
            return res.status(400).json({ erros: errors });
        }

        next();
    };
}
