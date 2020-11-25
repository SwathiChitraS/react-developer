import React, { Component } from 'react';

import Style from './Login.module.css';
import Parent from '../../hoc/parent';
import TextInput from '../../components/Input/CustomInput/CustomInput';
import Password from '../../components/Input/CustomPassword/CustomPassword';
import DateInput from '../../components/Input/CustomDateInput/CustomDateInput';
import Button from '../../components/Input/CustomButton/CustomButton';
import CustomLink from '../../components/Input/CustomLink/CustomLink';


class Login extends Component {
    state = {
        userName: "",
        password: "",
        loginDetails: {
            user: ""
        }
    }
    onClickLogin = () => {
        let details = {
            ...this.state.loginDetails
        }
        let link = document.getElementsByTagName("a")[0];
        if (this.state.userName !== "") {
            details.user = this.state.userName;
            this.setState({ loginDetails: details }, () => {
                link.click();
                this.setState({loginDetails:{}});
            });
        }
    }
    render() {
        return (
            <Parent>
                <div className={Style.Login}>
                    <div className={Style.Background}>
                        <TextInput Label="Workspace Name" OnChange={(event) => {
                            this.setState({ userName: event.target.value })
                        }}></TextInput>
                        <Button CustomStyle={{ minWidth: 100 + "%", padding: 0 + "px",paddingTop: 32 + "px" }}
                            OnClick={this.onClickLogin}>GO</Button>
                        <div className={Style.Hide}>
                            <CustomLink Url="/Developerinterface" CustomStyle={{ width: 300 + "px" }} States={this.state.loginDetails}>New Project</CustomLink>
                        </div>
                    </div>
                </div>
            </Parent>
        );
    }
}

export default Login;