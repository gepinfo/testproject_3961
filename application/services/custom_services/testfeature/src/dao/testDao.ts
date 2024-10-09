import * as mongoose from 'mongoose';
import testModel from '../models/daomodels/test';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'




export class testDao {
    private test = testModel;

    

    constructor() { }
    
    public async Delete(testId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into testDao.ts: Delete');

    

    
    
    
    this.test.findByIdAndRemove(testId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from testDao.ts: Delete');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Update(testData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into testDao.ts: Update');

    

    
    
    
    this.test.findOneAndUpdate({ _id: testData._id }, testData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from testDao.ts: Update');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetEntityById(testId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into testDao.ts: GetEntityById');

    

    
    
    
    this.test.findById(testId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from testDao.ts: GetEntityById');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into testDao.ts: GetAllValues');

    

    
    
    
    this.test.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from testDao.ts: GetAllValues');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Create(testData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into testDao.ts: Create');

    let temp = new testModel(testData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from testDao.ts: Create');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetNounCreatedBy(testData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into testDao.ts: GetNounCreatedBy');

    

    
    
    
    this.test.aggregate(([
                        { $match: { $and: [{ created_by: testData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from testDao.ts: GetNounCreatedBy');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}


}