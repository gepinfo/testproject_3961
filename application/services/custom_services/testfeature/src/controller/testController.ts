import { Request, Response } from 'express';
import { testService } from '../service/testService';
import { CustomLogger } from '../config/Logger'
let test = new testService();

export class testController {
    
    constructor() { }
    
    public Delete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    test.Delete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testController.ts: Delete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testController.ts: Delete');
    })}
public Update(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    test.Update(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testController.ts: Update');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testController.ts: Update');
    })}
public GetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    test.GetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testController.ts: GetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testController.ts: GetEntityById');
    })}
public GetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    test.GetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testController.ts: GetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testController.ts: GetAllValues');
    })}
public Create(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    test.Create(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testController.ts: Create');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testController.ts: Create');
    })}
public GetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    test.GetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testController.ts: GetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testController.ts: GetNounCreatedBy');
    })}


}