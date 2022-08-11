/// <reference types="react" />
interface Props {
    label?: string;
    children: React.ReactNode;
    rightIcon?: string | JSX.Element;
    onEdit?: () => void;
}
export declare function LabelBand({ label, children, rightIcon, onEdit }: Props): JSX.Element;
export {};
