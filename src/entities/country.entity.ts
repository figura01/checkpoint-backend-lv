import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Field, InputType, ObjectType } from "type-graphql";
import Continent, { PartialContientInput } from './continent.entity'

@ObjectType()
@Entity()
export default class Country {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ nullable: true })
  @Column()
  code: string;

  @Field({ nullable: true})
  @Column()
  name: string;

  @Field({ nullable: true})
  @Column()
  emojy: string;

  @Field(() => Continent)
  @ManyToOne(() => Continent, (c) => c.country, {
    cascade: true,
  })
  continent: Continent
}


@InputType()
export class CreateCountryInput {
  @Field({ nullable: false })
  name: string;

  @Field({ nullable: false })
  code: string;

  @Field({ nullable: false })
  emojy: string;

  @Field({ nullable: false })
  contient: PartialContientInput;
}

@ObjectType()
export class findedCountryByCode {
  @Field({ nullable: false })
  name: string;

  @Field({ nullable: false })
  id: number;

  @Field({ nullable: false })
  emojy: string;

  @Field({ nullable: false })
  continent: PartialContientInput;
}
