/*
  Warnings:

  - You are about to drop the column `majors` on the `EducationConsultant` table. All the data in the column will be lost.
  - You are about to drop the column `preferredLanguage` on the `Student` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "EducationConsultant" DROP COLUMN "majors";

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "preferredLanguage";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "joinDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
