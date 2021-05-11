/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "tasks" (
    "id" SERIAL NOT NULL,
    "taskList" TEXT[],

    PRIMARY KEY ("id")
);
