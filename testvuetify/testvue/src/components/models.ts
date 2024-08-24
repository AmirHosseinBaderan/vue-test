export interface Dialog {
    title: string;
    color: string;
    content: DialogContent
}

export interface DialogContent {
    component: {};
    props: {},
    emits: {},
}

export interface DialogResult {
    status: boolean
    data: any
}

export interface ConfirmDialog {
    title: string
    text: string
    agreeText: string
    disagreeText: string
    data: any
}

export interface ConfirmResult {
    agree: boolean
    data: any
}

export interface TableHeaderModel {
    text: string
    align: string
    sortable: boolean
    value: string
}