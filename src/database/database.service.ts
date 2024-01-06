import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

//   async enableShutdownHooks(app) {
//     this.$on('beforeExit', async () => {
//       await app.close();
//     });
//   }

//   async disconnect() {
//     await this.$disconnect();
//   }

//   async cleanDatabase() {
//     if (process.env.NODE_ENV === 'production') return;

//     const deletePromises = [];
//     for (const model of Object.values(this.$_config.models)) {
//       deletePromises.push(this[model.name].deleteMany());
//     }
//     await Promise.all(deletePromises);
//   }

//   async seedDatabase() {
//     if (process.env.NODE_ENV === 'production') return;

//     const seedPromises = [];
//     for (const model of Object.values(this.$_config.models)) {
//       seedPromises.push(this[model.name].createMany({ data: model.seed }));
//     }
//     await Promise.all(seedPromises);
//   }

//     async resetDatabase() {
//         await this.cleanDatabase();
//     }
}
