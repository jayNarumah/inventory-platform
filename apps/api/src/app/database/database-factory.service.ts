import { Injectable } from '@nestjs/common';
import { AbstractSeeder } from './seeders/seeder';
import { UserSeeder } from './seeders/user.seeder';

@Injectable()
export class DatabaseFactoryService {
  private seeders: AbstractSeeder[] = [];

  constructor(
    private readonly userSeeder: UserSeeder,
  ) {
    this._registerSeeders();
  }

  private _registerSeeders() {
    const seeders = [this.userSeeder];
    this.seeders.push(...seeders);
  }

  async runSeeders() {
    this.seeders.map(async (seeder) => {
      await seeder.run();
    });
  }
}
