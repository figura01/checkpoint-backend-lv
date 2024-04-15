import { Query, Resolver, Mutation, Arg } from "type-graphql";
import Continent, {CreateContinentInput} from "../entities/continent.entity";
import ContinentService from "../services/continent.services";


@Resolver()
export default class ContinentResolver {
  @Query(() => [Continent])
  async continents() {
    return await new ContinentService().listContinents();
  }

  @Mutation(() => Continent)
  async createContinent(@Arg('data') data: CreateContinentInput) {
    return await new ContinentService().createContinent(data)
  }

  @Mutation(() => Continent)
  async deleteContinent(@Arg('id') id: number) {
    return await new ContinentService().deleteContinent(id)
  }
}