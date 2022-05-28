import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
export declare class CatsController {
    private readonly catsService;
    constructor(catsService: CatsService);
    create(createCatDto: CreateCatDto): Promise<import("typeorm").InsertResult>;
    findAll(): Promise<import("./entities/cat.entity").Cat[]>;
    findOne(id: string): string;
    update(id: string, updateCatDto: UpdateCatDto): string;
    remove(id: string): string;
}
