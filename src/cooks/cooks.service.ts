import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Cook } from "src/cooks/cook.entity";

@Injectable()
export class CooksService {
    constructor(private readonly datasourceService: DatasourceService){}
    
    create(cook: Cook) {
        this.datasourceService.getCooks().push(cook);
        return cook;
    }

    findOne(id: number) {
        return this.datasourceService
        .getCooks()
        .find((cook) => cook.id === id);
    }

    findAll(): Cook[] {
        return this.datasourceService.getCooks();
    }

    update(id: number, updatedCook: Cook) {
        const index = this.datasourceService
        .getCooks()
        .findIndex((cook) => cook.id === id);
        this.datasourceService.getCooks()[index] = updatedCook;
        return this.datasourceService.getCooks()[index];
    }

    remove(id: number) {
        const index = this.datasourceService
        .getCooks()
        .findIndex((cook) => cook.id === id);
        this.datasourceService.getCooks().splice(index, 1);
        return HttpStatus.OK;
    }
}