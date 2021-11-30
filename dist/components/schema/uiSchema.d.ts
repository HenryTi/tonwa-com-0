/// <reference types="react" />
import { Context, ContextRule } from '../form/context';
import { ItemSchema } from './schema';
import { FieldProps } from '../form/field';
import { Widget } from '../form/widgets';
import { IValuesView } from './IValuesView';
import { FieldRule } from '../inputRules';
import { ChangedHandler, ChangingHandler, PickId } from '../../ui';
export declare type TypeWidget = new (context: Context, itemSchema: ItemSchema, fieldProps: FieldProps, children: React.ReactNode) => Widget;
export declare type UiType = 'form' | 'arr' | 'group' | 'button' | 'submit' | 'custom' | 'image' | 'id' | 'text' | 'textarea' | 'password' | 'date' | 'datetime' | 'select' | 'url' | 'email' | 'updown' | 'number' | 'color' | 'checkbox' | 'checkboxes' | 'radio' | 'range' | 'tagSingle' | 'tagMulti';
export interface UiItem {
    widget?: UiType;
    readOnly?: boolean;
    disabled?: boolean;
    visible?: boolean;
    label?: string | JSX.Element;
    labelHide?: boolean;
    className?: string;
    onChanging?: ChangingHandler;
    onChanged?: ChangedHandler;
    rules?: (ContextRule | FieldRule) | ((ContextRule | FieldRule)[]);
    Templet?: TempletType;
    discription?: (string | JSX.Element | (() => JSX.Element));
    discriptionClassName?: string;
    defaultValue?: any;
    hiden?: boolean;
}
export interface UiCustom extends UiItem {
    widget: 'custom';
    WidgetClass: TypeWidget;
}
export interface UiImageItem extends UiItem {
    widget: 'image';
    size: 'sm' | 'lg';
}
export interface UiIdItem extends UiItem {
    widget: 'id';
    placeholder?: string | JSX.Element;
    pickId?: PickId;
}
export interface UiInputItem extends UiItem {
    placeholder?: string;
    rules?: FieldRule | FieldRule[];
}
export interface UiTextItem extends UiInputItem {
    widget: 'text';
}
export interface UiTextAreaItem extends UiInputItem {
    widget: 'textarea';
    rows?: number;
}
export interface UiPasswordItem extends UiInputItem {
    widget: 'password';
}
export interface UiRange extends UiInputItem {
    widget: 'range';
    min?: number;
    max?: number;
    step?: number;
}
export interface UiNumberItem extends UiInputItem {
    widget: 'number';
    min?: number;
    max?: number;
    step?: number;
}
export interface UiCheckItem extends UiItem {
    widget: 'checkbox';
    trueValue?: any;
    falseValue?: any;
}
export interface UiSelectListItem {
    value: any;
    title: string;
}
export interface UiSelectBase extends UiItem {
    rules?: FieldRule | FieldRule[];
    list: UiSelectListItem[];
}
export interface UiSelect extends UiSelectBase {
    widget: 'select';
}
export interface UiRadio extends UiSelectBase {
    widget: 'radio';
}
export interface UiTag extends UiItem {
    widget: 'tagSingle' | 'tagMulti';
    valuesView: IValuesView;
    wrapClassName?: string;
}
export interface UiTagSingle extends UiTag {
    widget: 'tagSingle';
}
export interface UiTagMulti extends UiTag {
    widget: 'tagMulti';
}
export interface UiItemCollection {
    [field: string]: UiItem;
}
export declare type TempletType = ((item?: any) => JSX.Element) | JSX.Element;
export interface UiSchema {
    items?: UiItemCollection;
    Templet?: TempletType;
    readonly?: boolean;
    disabled?: boolean;
    className?: string;
    selectable?: boolean;
    deletable?: boolean;
    restorable?: boolean;
    rules?: ContextRule | ContextRule[];
}
export interface UiArr extends UiSchema, UiItem {
    widget: 'arr';
    rules?: ContextRule | ContextRule[];
    ArrContainer?: (label: any, content: JSX.Element) => JSX.Element;
    RowContainer?: (content: JSX.Element) => JSX.Element;
    RowSeperator?: JSX.Element;
    onDeleted?: (row: any) => void;
    onRestored?: (row: any) => void;
}
export interface UiGroup extends UiItem {
    widget: 'group';
    with: string[];
}
export interface UiButton extends UiItem {
    widget: 'button';
}
