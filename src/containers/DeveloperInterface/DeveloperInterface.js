import React, { Component } from 'react';

import axios from 'axios';

import States from './StateData';
import Style from './DeveloperInterface.module.css';
import Layout from '../../components/Layout/Layout';
import Parent from '../../hoc/parent';
import CustomSelect from '../../components/Input/CustomSelect/CustomSelect';
import CustomTextInput from '../../components/Input/CustomInput/CustomInput';
import CustomButton from '../../components/Input/CustomButton/CustomButton';
import CustomTextArea from '../../components/Input/CustomTextArea/CustomTextArea';

class DeveloperInterface extends Component {
    state = {
        ...States
    }
    onMouseUpContainer = (event) => {
        if(event.currentTarget.getAttribute("dataid") !== this.state.dragElementKey){
            let containerElement = document.getElementById("container");
            containerElement.style.setProperty("cursor", "default");
            containerElement.insertBefore(document.getElementById(this.state.dragElementKey), event.currentTarget);
            let positionElements = containerElement.children;
            let elementArr = [];
            let dataArray = [];
            for(let positionElement of positionElements){
                let id = positionElement.getAttribute("dataid");
                elementArr.push(this.state.Element[id]["element"])
                dataArray.push(id);
            } 
            this.setState({ElemnetArray: elementArr, dataArray: dataArray});
        }
    }
    onMouseDownContainer = (event) => {
        this.setInputOutline(event);
        let id= event.target.getAttribute("dataid");
        this.setState({dragElementKey: id});
        let containerElement = document.getElementById("container");
        containerElement.style.setProperty("cursor", "grab");
    }
    onChangeInputType = (event) => {
    }
    setInputOutline = (event) => {
        event.currentTarget.style.setProperty("outline", "2px dashed #703b09");
        let id= event.currentTarget.getAttribute("dataid");
        this.setState({type:this.state.dataMap[id]["type"], elementId:this.state.dataMap[id]["elementId"], label:this.state.dataMap[id]["label"]});
    }
    removeInputOutline = (event) => {
        event.currentTarget.style.setProperty("outline", "");
    }
    changeCursor = (event) => {
        event.currentTarget.style.setProperty("cursor", "default");
    }
    saveProgress = () => {
        let data = {
            ...this.state.dataMap,
        }
        data["elementArray"] = [
            ...this.state.dataArray
        ]
        let user = this.props.location.state.user;
        axios.put("/data/" + user + ".json", data)
                .then(response => {
                    alert("progress Saved");
                });
    }
    componentDidMount() {
        let user = this.props.location.state.user;
        axios.get("/data/" + user + ".json")
            .then(response => {
                if (response.data !== null) {
                    let elements = {
                        ... response.data
                    }
                    let elementArr = [];
                    for(let x of elements.elementArray){
                        this.createInput(response.data[x]["label"], response.data[x]["elementId"], response.data[x]["type"]);
                    } 
                }
            });
    }
    componentDidUpdated() {
    }
    createInput = (label, elementId, type, value) => {
        let element =null;
        let positionElements = document.getElementById("container").children;
        switch (type){
            case "CustomInput": {
                element = (<CustomTextInput Label={label} key={elementId} Id={elementId} OnClick={(event)=>this.setInputOutline(event)}
                    OnFocusOut={(event)=>this.removeInputOutline(event)}  OnMouseDown={this.onMouseDownContainer} OnMouseUp={this.onMouseUpContainer}
                    Value={this.state.inputValue} OnChange={(event)=>this.setState({inputValue: event.target.value})}></CustomTextInput>);                
                break;
            }
            case "CustomButtom": {
                element = (<CustomButton Label={label} key={elementId} Id={elementId} OnClick={(event)=>this.setInputOutline(event)}
                    OnFocusOut={(event)=>this.removeInputOutline(event)}  OnMouseDown={this.onMouseDownContainer}
                    CustomStyle={{ margin: 8 + "px" }}>{label}</CustomButton>);
                break;
            }
            case "CustomTextArea": {
                element = (<CustomTextArea Label={label} key={elementId} Id={elementId} OnClick={(event)=>this.setInputOutline(event)}
                    OnFocusOut={(event)=>this.removeInputOutline(event)}  OnMouseDown={this.onMouseDownContainer}
                    >{label}</CustomTextArea>);
                break;
            }
            default : {
                element = (<CustomTextInput Label={label} key={elementId} Id={elementId} OnClick={(event)=>this.setInputOutline(event)}
                    OnFocusOut={(event)=>this.removeInputOutline(event)}  OnMouseDown={this.onMouseDownContainer}></CustomTextInput>);
            }
        }
        let elementsMap = {
            ...this.state.Element
        }
        let dataMap = {
            ...this.state.dataMap
        };
        dataMap[elementId] = {
            "label" : label,
            "elementId": elementId,
            "type": type,
            "value": value
        }
        let elementArray = [];
        let dataArray = [];
        if(elementsMap[elementId]){
            elementsMap[elementId] = {
                'element': element
            }           
            for(let positionElement of positionElements){
                elementArray.push(elementsMap[positionElement.getAttribute("dataid")]['element']);
                dataArray.push(positionElement.getAttribute("dataid"));
            }
        } else {
            elementsMap[elementId] = {
                'element': element
            }           
            for(let x  in elementsMap){
                elementArray.push(elementsMap[x]['element']);
                dataArray.push(x);
            }
        }
        
        this.setState({Element:elementsMap, ElemnetArray:elementArray, dataMap: dataMap, dataArray: dataArray});
    }
    onCreate = () => {
        this.createInput(this.state.label, this.state.elementId, this.state.type, this.state.inputValue);
    }
    render() {
        return (
            <Parent>
                <Layout>
                    <CustomSelect Options={this.state.statusOptions} Value={this.state.type} OnChange={(event)=>this.setState({type: event.target.value})}></CustomSelect>
                    <CustomTextInput Label="Id" Value={this.state.elementId} OnChange={(event)=>this.setState({elementId: event.target.value})}></CustomTextInput>
                    <CustomTextInput Label="Label" Value={this.state.label} OnChange={(event)=>this.setState({label: event.target.value})}></CustomTextInput>
                    <div className={[Style.CreateButtonContainer, Style.PaddingClass].join(" ")}>
                        <CustomButton OnClick={this.onCreate}>Create</CustomButton>
                    </div>                  
                </Layout>
                <content className={Style.Content}>
                    <div className={Style.Container}>
                        <div className={[Style.ToolArea, Style.PaddingClass].join(" ")}>
                            <CustomButton OnClick={this.saveProgress} CustomStyle={{ width: 300 + "px" }}>Save Progress</CustomButton>
                        </div>
                        <div className={[Style.DesignerArea, Style.PaddingClass].join(" ")} id="container" onMouseUp={this.changeCursor}>
                            {this.state.ElemnetArray}
                        </div>
                    </div>                   
                </content>
            </Parent>
        );
    }
}

export default DeveloperInterface;