const {PrismaClient} = require('@prisma/client')

var express = require('express');
var router = express.Router();
var prisma = new PrismaClient();



/* GET all free bookings for ROOM7 */
router.get('/Room7free', async function(req, res, next) {
  const bookings = await prisma.booking.findMany({
    where: {free: true, room: "ROOM7"},
    select: {timeSlot: true},
    orderBy: {timeSlot: 'asc'}
    
  })
  res.send(bookings)
});

/* GET all bookings for ROOM7 */
router.get('/Room7', async function(req, res, next) {
  const bookings = await prisma.booking.findMany({
    where: {room: "ROOM7"},
    select: {id:true, timeSlot: true, free: true},
    orderBy: {timeSlot: 'asc'}
  })
  res.send(bookings)
});

router.get('/RedAlertfree', async function(req, res, next) {
  const bookings = await prisma.booking.findMany({
    where: {free: true, room: "REDALERT"},
    select: {timeSlot: true, free: true},
    orderBy: {timeSlot: 'asc'}
    
  })
  res.send(bookings)
});

router.get('/RedAlert', async function(req, res, next) {
  const bookings = await prisma.booking.findMany({
    where: {room: "REDALERT"},
    select: {id:true, timeSlot: true, free: true},
    orderBy: {timeSlot: 'asc'}
  })
  res.send(bookings)
});

router.get('/SectorZfree', async function(req, res, next) {
  const bookings = await prisma.booking.findMany({
    where: {free: true, room: "SECTORZ"},
    select: {timeSlot: true, free: true},
    orderBy: {timeSlot: 'asc'}
    
  })
  res.send(bookings)
});

router.get('/SectorZ', async function(req, res, next) {
  const bookings = await prisma.booking.findMany({
    where: {room: "SECTORZ"},
    select: {id:true, timeSlot: true, free: true},
    orderBy: {timeSlot: 'asc'}
  })
  res.send(bookings)
});

router.get('/Graveyardfree', async function(req, res, next) {
  const bookings = await prisma.booking.findMany({
    where: {free: true, room: "GRAVEYARD"},
    select: {timeSlot: true, free: true},
    orderBy: {timeSlot: 'asc'}
    
  })
  res.send(bookings)
});

router.get('/Graveyard', async function(req, res, next) {
  const bookings = await prisma.booking.findMany({
    where: {room: "GRAVEYARD"},
    select: {id:true, timeSlot: true, free: true},
    orderBy: {timeSlot: 'asc'}
  })
  res.send(bookings)
});

//update if the booking with given id is free
router.put('/', async function(req,res){
  const post = await prisma.booking.update({
    where: {id: req.body.id},
    data: {free: req.body.free}
  })
  res.json(post)
})

//reset
router.put('/', async function(req,res){
  const post = await prisma.booking.updateMany({
    where: {free: true},
    data: {free: false}
  })
  res.json(post)
})


module.exports = router;
