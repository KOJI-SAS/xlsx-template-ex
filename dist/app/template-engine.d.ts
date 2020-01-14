import { Pipe } from './template-expression';
import { WorkSheetHelper } from './worksheet-helper';
import { Cell } from "exceljs";
export declare class TemplateEngine {
    private wsh;
    private data;
    private static pipes;
    static registerPipe(pipe: Pipe): void;
    private readonly regExpBlocks;
    private readonly regExpValues;
    constructor(wsh: WorkSheetHelper, data: any);
    execute(): void;
    private processBlocks;
    private processValues;
    private processValuePipes;
    private processBlockPipes;
    private valuePipeNumber;
    private valuePipeDate;
    private valuePipeTime;
    private valuePipeDateTime;
    private valuePipeImage;
    /** Find object in array by value of a property */
    private valuePipeFind;
    private valuePipeGet;
    private blockPipeFilter;
    /** @return {number} count of inserted rows */
    blockPipeRepeatRows(cell: Cell, dataArray: any[], countRows?: number | string): number;
    /** @return {number} count of inserted rows */
    private blockPipeTile;
}
