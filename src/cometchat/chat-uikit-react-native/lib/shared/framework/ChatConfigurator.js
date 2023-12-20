import { MessageDataSource } from "./MessageDataSource";
export class ChatConfigurator {
    static dataSource = new MessageDataSource();
    static names = ["message_utils"];
    static init(initialSource) {
        this.dataSource = initialSource ?? new MessageDataSource();
        this.names = ["message_utils"];
        this.names.push(this.dataSource.getId());
    }
    static enable(fun) {
        let oldSource = this.dataSource;
        let newSource = fun(oldSource);
        if (!this.names.find(nm => nm == newSource.getId())) {
            console.log("added", newSource.getId());
            this.dataSource = newSource;
            this.names.push(this.dataSource.getId());
        }
    }
    static getDataSource() {
        return ChatConfigurator.dataSource;
    }
}
//# sourceMappingURL=ChatConfigurator.js.map