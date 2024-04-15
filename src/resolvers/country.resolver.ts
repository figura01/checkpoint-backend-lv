import { Query, Resolver, Mutation, Arg } from "type-graphql";
import CountryService from '../services/country.service';
import Country, { CreateCountryInput } from "../entities/country.entity";


@Resolver()
export default class CountryResolver {
  @Query(() => [Country])
  async countries() {
    return await new CountryService().listCountries();
  }

  @Query(() => Country)
  async findByCode(@Arg("code") code: string) {
    return await new CountryService().findCountryByCode(code);
  }

  @Mutation(() => Country)
  async createCountry(@Arg('data') data: CreateCountryInput) {
    return await new CountryService().createCountry(data);
  }
}
