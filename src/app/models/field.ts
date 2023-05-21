export class Field<T>
{
    value: T | undefined;
    key: string;
    label: string;
    required: boolean;
    type: string;


    constructor(value?: T, key?: string, label?: string, required: boolean = false, type: string = "text") {
        this.value = value;
        this.key = key || '';
        this.label = label || '';
        this.required = required;
        this.type = type;
    }

}