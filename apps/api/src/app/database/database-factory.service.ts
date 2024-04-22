import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseFactoryService {
  private seeders: AbstractSeeder[] = [];

  constructor(
    // private readonly currencySeeder: CurrencySeeder,
  ) {
    this._registerSeeders();
    this._runSeeders();
  }

  private _registerSeeders() {
    const seeders: AbstractSeeder[] = [
      // this.currencySeeder,
    ];
    this.seeders.push(...seeders);
  }

  private async _runSeeders() {
    this.seeders.map(async (seeder) => {
      await seeder.run();
    });
  }
}
