import React, { Component } from 'react';
import { KeyboardAvoidingView, Container, Header, Content, Form, Item, Input, Text, Button, Body } from 'native-base';

export default class FormExample extends Component {
  static navigationOptions = {
    title: 'Home',
  };

	state = {
		emailLogin: null,
		passwdLogin: null,
		emailRegister: null,
		aliasRegister: null,
		passwdRegister: null,
		passwdConfRegister: null,
	}

	
	handleChangeLoginEmail = (_email) => {
		this.setState({emailLogin: _email});
	}

	handleChangeLoginPassword = (_passwd) => {
		this.setState({passwdLogin: _passwd});
	}

	handleLogin = () => {
	    const { emailLogin, passwdLogin } = this.state;
		console.log(emailLogin);
		console.log(passwdLogin);
	}

	handleChangeRegisterEmail = (_email) => {
		this.setState({emailRegister: _email});
	}

	handleChangeRegisterAlias = (_alias) => {
		this.setState({aliasRegister: _alias});
	}

	handleChangeRegisterPassword = (_passwd) => {

		this.setState({passwdRegister: _passwd});
	}

	handleChangeRegisterPasswordConf = (_passwdconf) => {
		this.setState({passwdConfRegister: _passwdconf});
	}

	handleRegister = () => {
	    const { emailRegister, aliasRegister, passwdRegister, passwdConfRegister } = this.state;
		console.log(emailRegister);
		console.log(aliasRegister);
		console.log(passwdRegister);
		console.log(passwdConfRegister);
	}
	
//	handleLogin = () => {
//    const { email, passwd } = this.state;
//    fetch("http://192.168.43.209:3000/api/users/login?email=" + email + "&password=" + passwd, {
//      method: 'GET',
//      headers: {
//        'Content-Type': 'application/json'
//      }
//	}).then( res => res.json()).then( _res => console.log(_res)) 
//	}

	render() {
		return (
		<Container>
		<Content>
			<Body>
				<Text>
					Iniciar Sesión
				</Text>
			</Body>
			<Form>
				<Item>
					<Input placeholder="E-mail" onChangeText={this.handleChangeLoginEmail} />
				</Item>
				<Item last>
					<Input placeholder="Contraseña" secureTextEntry={true} onChangeText={this.handleChangeLoginPassword}/>
				</Item>
			</Form>
			<Button block dark onPress={this.handleLogin}>
				<Text>Entrar</Text>
			</Button>
			<Body>
				<Text>
					Registrar cuenta
				</Text>
			</Body>	
			<Form>
				<Item>
					<Input placeholder="E-mail" onChangeText={this.handleChangeRegisterEmail} />
				</Item>
				<Item>
					<Input placeholder="Alias" onChangeText={this.handleChangeRegisterAlias} />
				</Item>
				<Item last>
					<Input placeholder="Contraseña" secureTextEntry={true} onChangeText={this.handleChangeRegisterPassword}/>
				</Item>
				<Item last>
					<Input placeholder="Confirmar Contraseña" secureTextEntry={true} onChangeText={this.handleChangeRegisterPasswordConf}/>
				</Item>
			</Form>
			<Button block dark onPress={this.handleRegister}>
				<Text>Registrar</Text>
			</Button>
		</Content>
		</Container>
		);
	}
}
