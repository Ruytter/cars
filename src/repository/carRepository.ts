import {cars} from '@prisma/client';
import prisma from "../config/database.js";

async function getCars() {
  return prisma.cars.findMany();
}

async function getCar(id: number) {
  return prisma.cars.findUnique({
    where: {
      id
    }
  })
}

async function getCarWithLicensePlate(licensePlate: string) {
  return prisma.cars.findUniqueOrThrow({
    where: {
      licensePlate
    }
  })
}

async function createCar(model: string, licensePlate: string, year: string, color: string) {
  prisma.cars.create({
    data: {
      color: color,
      model:model, 
      licensePlate: licensePlate, 
      year: String(year), 
    }
  })

  // await prisma.cars.create({
  //   data: {
  //     color: color,
  //     model:model, 
  //     licensePlate: licensePlate, 
  //     year: String(year), 
  //   }
  // })
  // await db.query(
  //   `INSERT INTO cars (model, "licensePlate", year, color)
  //    VALUES ($1, $2, $3, $4)`,
  //   [model, licensePlate, year, color]
  // );
}

async function deleteCar(id: number) {
  prisma.cars.delete({
    where:{
      id
    }
  })
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar
}

export default carRepository;