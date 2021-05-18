/*
  Warnings:

  - You are about to drop the `tasks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_table` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Likelihood" AS ENUM ('LIKELY', 'POSSIBLE', 'REACH');

-- CreateEnum
CREATE TYPE "UniversityStatus" AS ENUM ('WAITING', 'ACCEPTED', 'REJECTED');

-- CreateEnum
CREATE TYPE "TaskStatus" AS ENUM ('NOTSTARTED', 'INPROGRESS', 'COMPLETE');

-- CreateEnum
CREATE TYPE "TaskType" AS ENUM ('FORM', 'ESSAY');

-- CreateEnum
CREATE TYPE "MaterialType" AS ENUM ('CIRRICULUM', 'RESOURCE');

-- DropTable
DROP TABLE "tasks";

-- DropTable
DROP TABLE "user_table";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "fname" TEXT NOT NULL,
    "lname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "universityCode" INTEGER NOT NULL,
    "profileImage" BYTEA,
    "joinDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EducationConsultant" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "ecId" INTEGER NOT NULL,
    "preferredLanguage" TEXT NOT NULL,
    "major" TEXT NOT NULL,
    "interests" TEXT[],

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UniversityOption" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "universityId" INTEGER NOT NULL,
    "likelihood" "Likelihood" NOT NULL,
    "status" "UniversityStatus" NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "University" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "assignedDate" TIMESTAMP(3) NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "status" "TaskStatus",
    "school" TEXT,
    "description" TEXT,
    "moduleNumber" INTEGER NOT NULL,
    "type" "TaskType" NOT NULL,
    "docId" INTEGER NOT NULL,
    "superTaskId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Material" (
    "id" SERIAL NOT NULL,
    "docId" INTEGER NOT NULL,
    "type" "MaterialType" NOT NULL,
    "description" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Document" (
    "id" SERIAL NOT NULL,
    "creatorId" INTEGER NOT NULL,
    "creationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EducationConsultantToTask" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_StudentToTask" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "EducationConsultant_userId_unique" ON "EducationConsultant"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Student_userId_unique" ON "Student"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "_EducationConsultantToTask_AB_unique" ON "_EducationConsultantToTask"("A", "B");

-- CreateIndex
CREATE INDEX "_EducationConsultantToTask_B_index" ON "_EducationConsultantToTask"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_StudentToTask_AB_unique" ON "_StudentToTask"("A", "B");

-- CreateIndex
CREATE INDEX "_StudentToTask_B_index" ON "_StudentToTask"("B");

-- AddForeignKey
ALTER TABLE "EducationConsultant" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD FOREIGN KEY ("ecId") REFERENCES "EducationConsultant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UniversityOption" ADD FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UniversityOption" ADD FOREIGN KEY ("universityId") REFERENCES "University"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD FOREIGN KEY ("docId") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD FOREIGN KEY ("superTaskId") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Material" ADD FOREIGN KEY ("docId") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD FOREIGN KEY ("creatorId") REFERENCES "EducationConsultant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EducationConsultantToTask" ADD FOREIGN KEY ("A") REFERENCES "EducationConsultant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EducationConsultantToTask" ADD FOREIGN KEY ("B") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StudentToTask" ADD FOREIGN KEY ("A") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StudentToTask" ADD FOREIGN KEY ("B") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;
