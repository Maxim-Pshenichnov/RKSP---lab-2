import { Module } from '@nestjs/common';
import { MealsModule } from './meals/meals.module';
import { CooksModule } from './cooks/cooks.module';
import { DatasourceModule } from './datasource/datasource.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  imports: [MealsModule, CooksModule, ReviewsModule, DatasourceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
