import { Module } from '@nestjs/common';
import { MealsService } from './meals.service';
import { MealsController } from './meals.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';

@Module ({
    controllers: [MealsController],
    providers: [MealsService],
    imports: [DatasourceModule],
})
export class MealsModule {}