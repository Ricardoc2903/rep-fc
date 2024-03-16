-- CreateTable
CREATE TABLE "Form" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "msg" TEXT NOT NULL,

    CONSTRAINT "Form_pkey" PRIMARY KEY ("id")
);
