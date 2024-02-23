import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Products } from "./schemas/products.shemas";
import { Model } from "mongoose";

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Products.name) private ProductsModel: Model<Products>
  ) {}

  async findOne(type: string) {
    const result = await this.ProductsModel.aggregate([
      { $match: { 'selector.type': type } },
      { $unwind: '$selector' },
      { $match: { 'selector.type': type } },
      { $replaceRoot: { newRoot: "$selector" } } 
    ]);
  
    if (result && result.length > 0) {
      return result[0];
    } else {
      throw new NotFoundException("Страница не найдена");
    }
  }
}
