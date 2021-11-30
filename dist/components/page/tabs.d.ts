import * as React from 'react';
import { IVPage } from './page';
import { IObservableValue } from 'mobx';
import '../../css/va-tab.css';
export declare type TabCaption = (selected: boolean) => JSX.Element;
export interface TabProp {
    name: string;
    caption: TabCaption;
    content?: () => JSX.Element;
    page?: IVPage;
    notify?: IObservableValue<number> | number;
    load?: () => Promise<void>;
    onShown?: () => Promise<void>;
    isSelected?: boolean;
    onScroll?: () => void;
    onScrollTop?: () => Promise<boolean>;
    onScrollBottom?: () => Promise<void>;
    className?: string;
}
export interface TabsProps {
    tabs: TabProp[];
    tabPosition?: 'top' | 'bottom';
    size?: 'sm' | 'lg' | 'md';
    tabBg?: string;
    contentBg?: string;
    sep?: string;
    selected?: string;
    borderColor?: string;
    borderWidth?: string;
}
declare class Tab {
    loaded: boolean;
    selected: boolean;
    name: string;
    caption: TabCaption;
    contentBuilder: () => JSX.Element;
    page: IVPage;
    notify: IObservableValue<number> | number;
    load?: () => Promise<void>;
    onShown?: () => Promise<void>;
    onScroll?: () => void;
    onScrollTop?: () => Promise<boolean>;
    onScrollBottom?: () => Promise<void>;
    className?: string;
    private _content;
    constructor();
    get content(): JSX.Element;
    shown(): Promise<void>;
}
export declare const TabCaptionComponent: (label: string | JSX.Element, icon: string, color: string) => JSX.Element;
export declare class TabsView {
    private props;
    private size;
    private tabBg;
    private sep;
    selectedTab: Tab;
    tabArr: Tab[];
    constructor(props: TabsProps);
    tabClick: (tab: Tab) => Promise<void>;
    private tabs;
    content: () => JSX.Element;
    render(): JSX.Element;
}
export declare class Tabs extends React.Component<TabsProps> {
    private readonly tabsView;
    constructor(props: TabsProps);
    render(): JSX.Element;
}
export declare class RootTabs extends React.Component<TabsProps> {
    private readonly tabsView;
    constructor(props: TabsProps);
    render(): React.FunctionComponentElement<{}>;
}
export {};
