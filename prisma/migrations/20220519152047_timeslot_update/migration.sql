/*
  Warnings:

  - Changed the type of `timeSlot` on the `Booking` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "timeSlot",
ADD COLUMN     "timeSlot" TIMESTAMP(3) NOT NULL;
