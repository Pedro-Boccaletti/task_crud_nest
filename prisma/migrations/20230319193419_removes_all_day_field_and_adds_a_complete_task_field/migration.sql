/*
  Warnings:

  - You are about to drop the column `allDay` on the `Task` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "allDay",
ADD COLUMN     "complete" BOOLEAN NOT NULL DEFAULT false;
