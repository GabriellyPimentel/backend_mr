export function requireRole(role) {
    return (req, res, next) => {
        const { usuario } = req;

        if (!usuario || usuario.tipo !== role) {
            return res.status(403).json({ mensagem: "Acesso não autorizado" });
        }

        next();
    };
}