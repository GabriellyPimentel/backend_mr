import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

async function main() {
    const senhaHash = await bcrypt.hash('senha123', 10);

    await prisma.usuario.create({
        data: {
            nome: 'Teste',
            documentoIdentificacao: '12345678901',
            telefone: '21999999999',
            email: 'teste@email.com',
            senha: senhaHash,
        },
    });

    console.log('✅ Usuário criado com sucesso.');
}

main()
    .catch(e => {
        console.error('❌ Erro no seed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
