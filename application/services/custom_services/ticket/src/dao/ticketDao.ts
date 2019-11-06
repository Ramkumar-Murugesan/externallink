import * as mongoose from 'mongoose';
import ticketModel from '../models/ticket';
import { CustomLogger } from '../config/Logger'


export class ticketDao {
    private ticket = ticketModel;
    constructor() { }
    
    public GpGetNounById(ticketId, callback){
new CustomLogger().showLogger('info', 'Enter into ticketDao.ts: GpGetNounById')

this.ticket.findById(ticketId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from ticketDao.ts: GpGetNounById');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(ticketData, callback){
new CustomLogger().showLogger('info', 'Enter into ticketDao.ts: GpCreate')
let temp = new ticketModel(ticketData);
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from ticketDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}