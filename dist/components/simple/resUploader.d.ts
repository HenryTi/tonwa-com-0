import * as React from 'react';
export interface ResUploaderProps {
    url: string;
    className?: string;
    multiple?: boolean;
    onFilesChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare class ResUploader extends React.Component<ResUploaderProps> {
    private fileInput;
    upload: () => Promise<string>;
    render(): JSX.Element;
}
