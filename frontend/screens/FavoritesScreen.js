import React from 'react';
import { Card, CardItem, Button, Container, Header, Content, List, ListItem, Text, Left, Right, Body} from 'native-base';

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
