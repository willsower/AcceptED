/*
  Warnings:

  - You are about to drop the column `fName` on the `user_table` table. All the data in the column will be lost.
  - You are about to drop the column `lName` on the `user_table` table. All the data in the column will be lost.
  - Added the required column `fname` to the `user_table` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lname` to the `user_table` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user_table" DROP COLUMN "fName",
DROP COLUMN "lName",
ADD COLUMN     "fname" TEXT NOT NULL,
ADD COLUMN     "lname" TEXT NOT NULL;
