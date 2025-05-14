export async function criarUsuario(data) {
    const novoUsuario = await prisma.usuario.create({
        data: {
            id: uuid4(),
            nome: data.nome,
            documentoIdentificacao: data.documentoIdentificacao,
            telefone: data.telefone,
            email: data.email
        }
    })
    return novoUsuario;
}