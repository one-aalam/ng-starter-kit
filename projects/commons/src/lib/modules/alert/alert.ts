export type Alert = {
    id?: number,
    text: string,
    type: AlertType
}

export type AlertType = "default" | "success" | "error"
