/// <reference types="react" />
import { ItemSchema, UiItem } from '../schema';
import { Edit } from './edit';
export declare abstract class ItemEdit {
    protected edit: Edit;
    protected name: string;
    protected _itemSchema: ItemSchema;
    get itemSchema(): ItemSchema;
    protected _uiItem: UiItem;
    get uiItem(): UiItem;
    value: any;
    label: string | JSX.Element;
    get editInRow(): boolean;
    protected newValue: any;
    error: string;
    isChanged: boolean;
    constructor(edit: Edit, itemSchema: ItemSchema, uiItem: UiItem, label: string | JSX.Element, value: any);
    init(): void;
    start(): Promise<any>;
    protected abstract internalStart(): Promise<any>;
    end(): Promise<any>;
    renderContent(): any;
    protected internalEnd(): Promise<void>;
    protected verifyValue(): void;
}
