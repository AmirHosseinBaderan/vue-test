import * as models from "../components/models";
import { defineStore } from "pinia";

export const useDialogStore = defineStore("DIALOG", {
    state: () => ({
        modalVisible: false,
        dialog: {} as models.Dialog,
        confirmVisible: false,
        confirmDialog: {} as models.ConfirmDialog,
        confirmDialogResult: {} as models.ConfirmResult,
        dialogResult: {} as models.DialogResult
    }),
    actions: {
        showModal(config: models.Dialog) {
            this.modalVisible = true;
            this.dialog = config
        },
        hideModal() {
            this.modalVisible = false
            this.dialog = {} as models.Dialog
        },
        setDialogResult(res: models.DialogResult) {          
            this.dialogResult = res
        },
        showConfirm(confirm: models.ConfirmDialog) {
            this.confirmVisible = true
            this.confirmDialog = confirm
        },
        confirmResponse(res: models.ConfirmResult) {
            this.confirmDialogResult = res
        },
        hideConfirm() {
            this.confirmVisible = false
        }
    },
})