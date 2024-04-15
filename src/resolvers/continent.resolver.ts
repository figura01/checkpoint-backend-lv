import { Query, Resolver, Mutation, Arg } from "type-graphql";
import Continent, { CreateContinentInput } from "../entities/continent.entity";
import ContinentService from "../services/continent.services";


@Resolver()
export default class ContinentResolver {
  @Query(() => [Continent])
  async continents() {
    return await new ContinentService().listContinents();
  }

  @Mutation(() => Continent)
  async createContient(@Arg('data') data: CreateContinentInput) {
    return await new ContinentService().createContinent(data)
  }
}