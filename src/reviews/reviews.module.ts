import { Module } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';

@Module ({
    controllers: [ReviewsController],
    providers: [ReviewsService],
    imports: [DatasourceModule],
})
export class ReviewsModule {}