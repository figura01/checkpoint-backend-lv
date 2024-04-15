import { Repository } from "typeorm";
import datasource from "../db";
import Country, { CreateCountryInput } from "../entities/country.entity";

export default class CountryService {
  db: Repository<Country>;
  constructor() {
    this.db = datasource.getRepository(Country);
  }

  async listCountries() {
    console.log("find Countries");
    return this.db.find();
  }

  async findCountryByCode (code: string) {
    return await this.db.findOneBy({ code });
  }

  async createCountry (data: CreateCountryInput) {
    const newCountry = this.db.create({ ...data });
    return await this.db.save(newCountry);
  }

  async findCountryByContinentId(id: number) {
    const countries = await this.db.find({
      where: { continent: { id } },
      relations: { continent: true },
    });
    return countries
  }
}