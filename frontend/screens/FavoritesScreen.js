import React from 'react';
import { Card, CardItem, Button, Container, Header, Content, List, ListItem, Text, Left, Right, Body} from 'native-base';
const config = require('../config.json');

export default class SettingsScreen extends React.Component {
	static navigationOptions = {
		title: 'Favoritos',
	};

	handleRemoveFavorite = (_idMovie) =>{
		console.log(_idMovie);
	}


	render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
	
		fetch(config.urlserver+"/api/users/getUser", {
		credentials: "same-origin",
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
		}).then( res => res.json()).then( _res => {
			console.log(_res);
			if (_res.success === true){
				alert("Sesión iniciada, Bienvenido: "+_res.username);
			} else {
				alert("Inicie sesión para ver favoritos");
			}
		});
	
	var movies = [
		{
		'title': 'Dragon Ball Super: Broly',
		'id': 503314
		},
		{
		'title': 'Halloween',
		'id': 424139
		}
	]


    return(
		<Container>
		<Content>
			<List dataArray={movies}
				renderRow={(movie) =>
					<ListItem>
					<Body>	
					<Card>
		                <Left>
		                <CardItem header>
		                    <Text> {movie.title} </Text>
		                </CardItem>
		                </Left>
		                <Right>
		                <CardItem>
		                        <Button block dark onPress={() => this.handleRemoveFavorite(movie.id)}>
		                            <Text>Remover de Favoritos</Text>
		                        </Button>
		                </CardItem>
		                </Right>
		            </Card>
					</Body>

					</ListItem>
				}>
			</List>
		</Content>
		</Container>
);
}
}
