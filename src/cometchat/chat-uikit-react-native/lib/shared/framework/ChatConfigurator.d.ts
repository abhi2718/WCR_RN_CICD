import { DataSource } from "./DataSource";
export declare class ChatConfigurator {
    static dataSource: DataSource;
    static names: string[];
    static init(initialSource?: DataSource): void;
    static enable(fun: (source: DataSource) => DataSource): void;
    static getDataSource(): DataSource;
}
