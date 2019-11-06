
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const categoriesSchema = new Schema({
   id: String,
   name: String,
   parent_id: String
})

const categoriesModel = mongoose.model('categories', categoriesSchema, 'categories');
export default categoriesModel;
