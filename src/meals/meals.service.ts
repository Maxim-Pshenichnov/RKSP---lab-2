import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Meal } from "src/meals/meal.entity";

@Injectable()
export class MealsService {
    constructor(private readonly datasourceService: DatasourceService){}
    
    create(meal: Meal) {
        this.datasourceService.getMeals().push(meal);
        return meal;
    }

    findOne(id: number) {
        return this.datasourceService
        .getMeals()
        .find((meal) => meal.id === id);
    }

    findAll(): Meal[] {
        return this.datasourceService.getMeals();
    }

    update(id: number, updatedMeal: Meal) {
        const index = this.datasourceService
        .getMeals()
        .findIndex((meal) => meal.id === id);
        this.datasourceService.getMeals()[index] = updatedMeal;
        return this.datasourceService.getMeals()[index];
    }

    remove(id: number) {
        const index = this.datasourceService
        .getMeals()
        .findIndex((meal) => meal.id === id);
        this.datasourceService.getMeals().splice(index, 1);
        return HttpStatus.OK;
    }
}