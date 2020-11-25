import customInput from "../../components/Input/CustomInput/CustomInput";

let State  = {
    statusOptions: [
            {
                value: "CustomInput",
                label: "Text Input"
            },
            {
                value:"CustomButtom",
                label: "Button"
            },
            {
                value: "CustomTextArea",
                label: "Text Area"
            },
        ],
    elementId : "CustomInput1",
    type : "CustomInput",
    label: "",
    Element: {},
    ElemnetArray: [],
    dragElementKey : "",
    dataMap:{},
    dataArray:[]
}

export default State;