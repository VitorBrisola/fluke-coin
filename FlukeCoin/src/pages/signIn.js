import React,{Component} from "react";
import { View } from "react-native";
import { Card, Button, Input} from "react-native-elements";
import { onSignIn } from "../user/auth";
import {Login} from '../user/auth'


export default class LoginScreen extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      name: null,
      pass: null,
    }
  }

  changeUserInfo = async (infoType,info) => {
    if(infoType == 'name') {await this.setState({name: info})
    }else if(infoType == 'pass') {await this.setState({pass: info})};
  }

  checkSystem = async () => {
    return await new Promise((resolve,reject) => {
      Login({
        name: this.state.name,
        password: this.state.pass
      })
        .then(res => {
          console.log(res.message)
          resolve(res.validation)}
        )
    });
  }

  userVerification = async () => {
   await this.checkSystem()
    .then(userIsOnSystem => {
      if(userIsOnSystem){
        console.log('User Registered!')
        onSignIn({user:this.state.name}).then(() => this.props.navigation.navigate("SignedIn"));
      }else{
        console.log('User not Registered!')
      }
    })
  }

  render() {
    return (
      <View style={{ paddingVertical: 20 }}>
        <Card>
          <Input
            label='User'
            placeholder='User name...'
            onChangeText={text => this.changeUserInfo('name',text)}
          />
          <Input
            secureTextEntry
            label='Password'
            placeholder='Password...'
            onChangeText={text => this.changeUserInfo('pass',text)}
          />

          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#03A9F4"
            title="SIGN IN"
            onPress={this.userVerification}
          />
          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#03A9F4"
            title="SIGN UP"
            onPress={() => this.props.navigation.navigate("SignUp")}
          />
        </Card>
      </View>
    );
  }
};


