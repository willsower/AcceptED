/*
  Warnings:

  - You are about to drop the column `major` on the `Student` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "EducationConsultant" ADD COLUMN     "majors" TEXT[];

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "major";
