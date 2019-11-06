
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ticketSchema = new Schema({
   name: String,
   ticketNo: String,
   message: String
})

const ticketModel = mongoose.model('ticket', ticketSchema, 'ticket');
export default ticketModel;
