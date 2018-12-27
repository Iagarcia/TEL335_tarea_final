import React from 'react';
import { Card, CardItem, Button, Container, Header, Content, List, ListItem, Text, Left, Right, Body} from 'native-base';
const config = require('../config.json');
const billboard = require('../billboard.json');

export default class SettingsScreen extends React.Component {
	static navigationOptions = {
		title: 'Favoritos',
	};

	state = {
		favorites : []
	}		

	handleUpdate = () => {
		let self = this;
		self.setState({
			favorites: []
		});
		fetch(config.urlserver+"/api/users/getUser", {
		credentials: "same-origin",
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
		}).then( res => res.json()).then( _res => {
			if (_res.success === true){
				var myTitles = _res.favorites;
				myTitles.forEach(function(idMovie){

					fetch("https://api.themoviedb.org/3/discover/movie?api_key=bf8fd38dca5a76f8943629f454221dac", {
						method:'GET',
						header: {
							'Content-Type': 'application/json'
						}
					}).then( res => res.json()).then (_res => {
						var allTitles = _res.results;
						allTitles.forEach(function(movie){
							var currentTitle = [];	
							if(movie.id === idMovie){
							
								self.setState({
	                                favorites: self.state.favorites.concat([
	                                    {
	                                    "id": movie.id,
	                                    "title": movie.title
	                                    }
	                                ])
	                            })

							}
						});
					})
				});
				console.log(self.state.favorites);
                alert("Favoritos de "+_res.username+" cargados");
            } else {
                alert("Inicie sesión para ver favoritos");
            }
        });
		self.forceUpdate();
    }

    handleRemoveFavorite = (_idMovie) =>{
		let self = this;
        console.log(_idMovie);
        if (_idMovie){
            fetch(config.urlserver+"/api/users/removeFavorite?movieId="+_idMovie, {
                credentials: "same-origin",
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then( res => res.json()).then( _res => {
                console.log(_res);
                if (_res.success === true){
                    alert("Titulo removido de favoritos");
                } else {
                    alert("Fallo al remover de favoritos");
                }
            });
        } else {
            alert("Boton defectuoso");
        }
    }

	

	render() {

    return(
		<Container>
		<Content>
			<Body>
				<Button block dark onPress={() => this.handleUpdate()}>
					<Text>Actualizar lista</Text>
				</Button>
			</Body>
			<List dataArray={this.state.favorites}
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
