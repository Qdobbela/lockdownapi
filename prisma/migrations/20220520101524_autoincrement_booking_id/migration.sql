-- AlterTable
CREATE SEQUENCE "booking_id_seq";
ALTER TABLE "Booking" ALTER COLUMN "id" SET DEFAULT nextval('booking_id_seq');
ALTER SEQUENCE "booking_id_seq" OWNED BY "Booking"."id";
