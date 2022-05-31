-- CreateTable
CREATE TABLE "Booking" (
    "id" INTEGER NOT NULL,
    "room" TEXT NOT NULL,
    "timeSlot" TIMESTAMP(3)[],
    "free" BOOLEAN NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);
