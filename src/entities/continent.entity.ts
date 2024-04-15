import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Field, InputType, ObjectType, ID } from "type-graphql";
import Country from "./country.entity";
@ObjectType()
@Entity()
export default class Continent {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ nullable: true})
  @Column()
  name: string;

  @Field(() => [Country])
  @OneToMany(() => Country, (c) => c.continent)
  country?: Country[];
}

@InputType()
export class CreateContinentInput {
  @Field({ nullable: false})
  name: string
}

@InputType()
export class PartialContientInput {
  @Field(() => ID)
  id: number;
}