import React, { Component } from 'react';
import { KeyboardAvoidingView, Container, Header, Content, Form, Item, Input, Text, Button } from 'native-base';

export default class FormExample extends Component {
	state = {
		email: null,
		passwd: null
	}

	
	handleChangeEmail = (_email) => {
		this.setState({email: _email});
	}

	handleChangePassword = (_passwd) => {
		this.setState({passwd: _passwd});
	}

	handleLogin = () => {
    const { email, passwd } = this.state;
    fetch("http://192.168.43.209:3000/api/users/login?email=" + email + "&password=" + passwd, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
	}).then( res => res.json()).then( _res => console.log(_res)) 
	}

	handleLogin = () => {
    const { email, passwd } = this.state;
    fetch("http://192.168.43.209:3000/api/users/login?email=" + email + "&password=" + passwd, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
	}).then( res => res.json()).then( _res => console.log(_res)) 
	}

	render() {
		return (
		<KeyboardAvoidingView behavior="padding" enabled>
		<Container>
		<Header />
		<Content>
			<Text style={{justifyContent: 'center'}}>
				Iniciar Sesión
			</Text>
			<Form>
				<Item>
					<Input placeholder="E-mail" onChangeText={this.handleChangeEmail} />
				</Item>
				<Item last>
					<Input placeholder="Contraseña" secureTextEntry={true} onChangeText={this.handleChangePassword}/>
				</Item>
			</Form>
			<Button block dark onPress={this.handleLogin}>
				<Text>Entrar</Text>
			</Button>
			<Text>
				Registrar cuenta
			</Text>
			<Form>
				<Item>
					<Input placeholder="E-mail" onChangeText={this.handleChangeEmail} />
				</Item>
				<Item>
					<Input placeholder="Alias" onChangeText={this.handleChangeEmail} />
				</Item>
				<Item last>
					<Input placeholder="Contraseña" secureTextEntry={true} onChangeText={this.handleChangePassword}/>
				</Item>
				<Item last>
					<Input placeholder="Confirmar Contraseña" secureTextEntry={true} onChangeText={this.handleChangePassword}/>
				</Item>
			</Form>
			<Button block dark onPress={this.handleRegister}>
				<Text>Registrar</Text>
			</Button>

		</Content>
		</Container>
		</KeyboardAvoidingView>
		);
	}
}
