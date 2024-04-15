import { Repository } from "typeorm";
import datasource from "../db";
import Continent, { CreateContinentInput } from "../entities/continent.entity";

export default class ContinentService {
  db: Repository<Continent>;
  constructor() {
    this.db = datasource.getRepository(Continent);
  }

  async listContinents() {
    console.log("find Continents");
    return this.db.find();
  }

  async createContinent (data: CreateContinentInput) {
    const newContinent = this.db.create({ ...data });
    return await this.db.save(newContinent);
  }

  async deleteContinent(id: number ) {
    return await this.db.delete(id);
  }
}