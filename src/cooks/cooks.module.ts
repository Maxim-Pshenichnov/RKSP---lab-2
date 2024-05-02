import { Module } from '@nestjs/common';
import { CooksService } from './cooks.service';
import { CooksController } from './cooks.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';

@Module ({
    controllers: [CooksController],
    providers: [CooksService],
    imports: [DatasourceModule],
})
export class CooksModule {}