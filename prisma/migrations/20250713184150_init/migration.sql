-- CreateEnum
CREATE TYPE "Escolaridade" AS ENUM ('medioIncompleto', 'medioCompleto', 'superiorIncompleto', 'superiorCompleto');

-- CreateEnum
CREATE TYPE "StatusEncaminhamento" AS ENUM ('emAndamento', 'finalizado', 'marcado');

-- CreateTable
CREATE TABLE "usuario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "documento_identificacao" TEXT NOT NULL,
    "telefone" TEXT,
    "email" TEXT,
    "senha" TEXT NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mae_solo" (
    "id" TEXT NOT NULL,
    "data_nascimento" TIMESTAMP(3) NOT NULL,
    "escolaridade" "Escolaridade" NOT NULL,
    "endereco" TEXT NOT NULL,
    "renda_mensal" INTEGER NOT NULL,
    "situacao_trabalho" BOOLEAN NOT NULL,

    CONSTRAINT "mae_solo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "filho" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "data_nascimento" TIMESTAMP(3) NOT NULL,
    "id_mae" TEXT NOT NULL,

    CONSTRAINT "filho_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "doador" (
    "id" TEXT NOT NULL,
    "tipo_doador" TEXT NOT NULL,

    CONSTRAINT "doador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profissional_apoio" (
    "id" TEXT NOT NULL,
    "area_atuacao" TEXT NOT NULL,

    CONSTRAINT "profissional_apoio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "disponibilidade" (
    "id" TEXT NOT NULL,
    "id_profissional" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "horario" TEXT NOT NULL,

    CONSTRAINT "disponibilidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "encaminhamento" (
    "id" TEXT NOT NULL,
    "id_mae" TEXT NOT NULL,
    "id_profissional" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "status" "StatusEncaminhamento" NOT NULL,
    "tipo_servico" TEXT NOT NULL,

    CONSTRAINT "encaminhamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "atendimento" (
    "id" TEXT NOT NULL,
    "id_encaminhamento" TEXT NOT NULL,
    "observacoes" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "atendimento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "playing_with_neon" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "value" REAL,

    CONSTRAINT "playing_with_neon_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_documento_identificacao_key" ON "usuario"("documento_identificacao");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- AddForeignKey
ALTER TABLE "mae_solo" ADD CONSTRAINT "mae_solo_id_fkey" FOREIGN KEY ("id") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "filho" ADD CONSTRAINT "filho_id_mae_fkey" FOREIGN KEY ("id_mae") REFERENCES "mae_solo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "doador" ADD CONSTRAINT "doador_id_fkey" FOREIGN KEY ("id") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profissional_apoio" ADD CONSTRAINT "profissional_apoio_id_fkey" FOREIGN KEY ("id") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "disponibilidade" ADD CONSTRAINT "disponibilidade_id_profissional_fkey" FOREIGN KEY ("id_profissional") REFERENCES "profissional_apoio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "encaminhamento" ADD CONSTRAINT "encaminhamento_id_mae_fkey" FOREIGN KEY ("id_mae") REFERENCES "mae_solo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "encaminhamento" ADD CONSTRAINT "encaminhamento_id_profissional_fkey" FOREIGN KEY ("id_profissional") REFERENCES "profissional_apoio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atendimento" ADD CONSTRAINT "atendimento_id_encaminhamento_fkey" FOREIGN KEY ("id_encaminhamento") REFERENCES "encaminhamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
