import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TestDocument = HydratedDocument<Products>;

class Images {
  id: number;
  image: string;
}

class SubText {
  id: number;
  animatedId: number;
  text: string;
}

class Texts {
  id: number;
  animatedId: number;
  text: string | null;
  subText: string | null | SubText[];
  other: string | null;
}

class Selector {
  id: number;
  type: string;
  routeTitle: string;
  content: {
    images: Images[];
    texts: Texts[];
  }
}

// @Schema({ collection: 'products' })
@Schema()
export class Products {
  _id: string;
  id: number;
  name: string;
  selector: Selector[];
}

export const ProductsSchema = SchemaFactory.createForClass(Products);