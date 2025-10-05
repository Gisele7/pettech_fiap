import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schemas/product.schema';
import { ProductRepository } from './repositories/product.repository';
import { ProductMongooseRepositoy } from './repositories/mongoose/product.mongoose.repository';
import { StockService } from './services/stock.service';
import { StockController } from './controllers/stock.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: Product.name,
            schema: ProductSchema
        }])
    ],
    providers: [
        {
            provide: ProductRepository,
            useClass: ProductMongooseRepositoy
        },
        StockService,
    ],
    controllers: [
        StockController
    ]
})
export class StockModule {}
