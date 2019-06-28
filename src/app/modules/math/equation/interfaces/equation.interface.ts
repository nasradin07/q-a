import { OperationsInterface } from './operations.interface';
import { FormatInterface } from './format.interface';

export interface EquationInterface extends OperationsInterface,FormatInterface {
   solveFor(variable: string): any
}