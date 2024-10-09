import { Request, Response } from 'express';
import {testDao} from '../dao/testDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';













let test = new testDao();

export class testService {
    
    constructor() { }
    
    public  Delete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testService.ts: Delete')
     let  testId = req.params.id;
     test.Delete(testId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testService.ts: Delete')
             
             
            callback(response);

         });
    }
    
public  Update(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testService.ts: Update')
     let  testData = req.body;
     test.Update(testData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testService.ts: Update')
             
             
            callback(response);

         });
    }
    
public  GetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testService.ts: GetEntityById')
     let  testId = req.params.id;
     test.GetEntityById(testId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testService.ts: GetEntityById')
             
             
            callback(response);

         });
    }
    
public  GetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testService.ts: GetAllValues')
     
     test.GetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from testService.ts: GetAllValues')
             
             
            callback(response);

         });
    }
    
public  Create(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testService.ts: Create')
     let  testData = req.body;
     test.Create(testData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testService.ts: Create')
             
             
            callback(response);

         });
    }
    
public  GetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testService.ts: GetNounCreatedBy')
     let  testData = { created_by: req.query.createdby };
     test.GetNounCreatedBy(testData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testService.ts: GetNounCreatedBy')
             
             
            callback(response);

         });
    }
    
    
    
    
}