import { Request, Response, NextFunction } from "express";
import { testController } from '../controller/testController';


export class Routes {
    private test: testController = new testController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/test/:id').delete(this.test.Delete);
app.route('/test').put(this.test.Update);
app.route('/test/:id').get(this.test.GetEntityById);
app.route('/test').get(this.test.GetAllValues);
app.route('/test').post(this.test.Create);
app.route('/test/userid/created_by').get(this.test.GetNounCreatedBy);
     }

}