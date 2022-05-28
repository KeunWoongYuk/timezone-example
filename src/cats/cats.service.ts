import { Injectable } from "@nestjs/common";
import { getConnection } from "typeorm";
import { CreateCatDto } from "./dto/create-cat.dto";
import { UpdateCatDto } from "./dto/update-cat.dto";
import { Cat } from "./entities/cat.entity";

@Injectable()
export class CatsService {
  async create(createCatDto: CreateCatDto) {
    const rtn = await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Cat)
      .values(createCatDto)
      .execute();

    return rtn;
  }

  async findAll() {
    const rtn = await getConnection()
      .createQueryBuilder()
      .select("cat")
      .from(Cat, "cat")
      .getMany();
    return rtn;
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
