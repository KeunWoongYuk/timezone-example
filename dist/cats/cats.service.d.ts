import { CreateCatDto } from "./dto/create-cat.dto";
import { UpdateCatDto } from "./dto/update-cat.dto";
import { Cat } from "./entities/cat.entity";
export declare class CatsService {
    create(createCatDto: CreateCatDto): Promise<import("typeorm").InsertResult>;
    findAll(): Promise<Cat[]>;
    findOne(id: number): string;
    update(id: number, updateCatDto: UpdateCatDto): string;
    remove(id: number): string;
}
