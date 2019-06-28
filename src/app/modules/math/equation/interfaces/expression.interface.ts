import { OperationsInterface } from './operations.interface';
import { FormatInterface } from './format.interface';

export interface ExpressionInterface extends OperationsInterface, FormatInterface {
   evalute(varObj: {variable: any, value: number})
}