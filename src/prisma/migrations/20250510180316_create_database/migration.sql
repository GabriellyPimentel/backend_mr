-- CreateTable
CREATE TABLE "usuario" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "documento_identificacao" TEXT NOT NULL,
    "telefone" TEXT,
    "email" TEXT
);

-- CreateTable
CREATE TABLE "mae_solo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "data_nascimento" DATETIME NOT NULL,
    "escolaridade" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "renda_mensal" INTEGER NOT NULL,
    "situacao_trabalho" BOOLEAN NOT NULL,
    CONSTRAINT "mae_solo_id_fkey" FOREIGN KEY ("id") REFERENCES "usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "filho" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "data_nascimento" DATETIME NOT NULL,
    "id_mae" TEXT NOT NULL,
    CONSTRAINT "filho_id_mae_fkey" FOREIGN KEY ("id_mae") REFERENCES "mae_solo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "doador" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "tipo_doador" TEXT NOT NULL,
    CONSTRAINT "doador_id_fkey" FOREIGN KEY ("id") REFERENCES "usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "profissional_apoio" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "area_atuacao" TEXT NOT NULL,
    CONSTRAINT "profissional_apoio_id_fkey" FOREIGN KEY ("id") REFERENCES "usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "disponibilidade" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_profissional" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "horario" TEXT NOT NULL,
    CONSTRAINT "disponibilidade_id_profissional_fkey" FOREIGN KEY ("id_profissional") REFERENCES "profissional_apoio" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "encaminhamento" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_mae" TEXT NOT NULL,
    "id_profissional" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "tipo_servico" TEXT NOT NULL,
    CONSTRAINT "encaminhamento_id_mae_fkey" FOREIGN KEY ("id_mae") REFERENCES "mae_solo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "encaminhamento_id_profissional_fkey" FOREIGN KEY ("id_profissional") REFERENCES "profissional_apoio" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "atendimento" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_encaminhamento" TEXT NOT NULL,
    "observacoes" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    CONSTRAINT "atendimento_id_encaminhamento_fkey" FOREIGN KEY ("id_encaminhamento") REFERENCES "encaminhamento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_documento_identificacao_key" ON "usuario"("documento_identificacao");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");
