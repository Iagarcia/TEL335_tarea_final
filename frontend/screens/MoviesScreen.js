import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Content, Text, Button, Card, CardItem, List, ListItem, Left, Body } from 'native-base';

export default class LinksScreen extends React.Component {
	static navigationOptions = {
		title: 'Peliculas',
	};

	handleAddFavorite = (_idMovie) =>{
		console.log(_idMovie);
	}

	render() {

		return (
			
			<Container>
			<Content>

			<Card>
				<Body>
				<CardItem header>
					<Text> Aquaman </Text> 
				</CardItem>
				</Body>
				<CardItem cardBody>
					<Image source={{uri: 'https://image.tmdb.org/t/p/w500/i2dF9UxOeb77CAJrOflj0RpqJRF.jpg'}} style={{height: 672, width: 448, flex: 1}}/>
				</CardItem>
				<Body>
				<CardItem>
						<Button block dark onPress={() => this.handleAddFavorite(297802)}>
							<Text>Agregar a Favoritos</Text>
						</Button>
				</CardItem>
				</Body>
			</Card>

			<Card>
				<Body>
				<CardItem header>
					<Text> Bumblebee </Text> 
				</CardItem>
				</Body>
				<CardItem cardBody>
					<Image source={{uri: 'https://image.tmdb.org/t/p/w500/fw02ONlDhrYjTSZV8XO6hhU3ds3.jpg'}} style={{height: 672, width: 448, flex: 1}}/>
				</CardItem>
				<Body>
				<CardItem>
						<Button block dark onPress={() => this.handleAddFavorite(424783)}>
							<Text>Agregar a Favoritos</Text>
						</Button>
				</CardItem>
				</Body>
			</Card>

			<Card>
				<Body>
				<CardItem header>
					<Text> Bird Box </Text> 
				</CardItem>
				</Body>
				<CardItem cardBody>
					<Image source={{uri: 'https://image.tmdb.org/t/p/w500/rGfGfgL2pEPCfhIvqHXieXFn7gp.jpg'}} style={{height: 672, width: 448, flex: 1}}/>
				</CardItem>
				<Body>
				<CardItem>
						<Button block dark onPress={() => this.handleAddFavorite(405774)}>
							<Text>Agregar a Favoritos</Text>
						</Button>
				</CardItem>
				</Body>
			</Card>

			<Card>
				<Body>
				<CardItem header>
					<Text> Crayon Shin-chan: Burst Serving! Kung Fu Boys ~Ramen Rebellion~ </Text> 
				</CardItem>
				</Body>
				<CardItem cardBody>
					<Image source={{uri: 'https://image.tmdb.org/t/p/w500/fPc793wngYwFk1pziUNAoCCBmMU.jpg'}} style={{height: 672, width: 448, flex: 1}}/>
				</CardItem>
				<Body>
				<CardItem>
						<Button block dark onPress={() => this.handleAddFavorite(507562)}>
							<Text>Agregar a Favoritos</Text>
						</Button>
				</CardItem>
				</Body>
			</Card>

			<Card>
				<Body>
				<CardItem header>
					<Text> Venom </Text> 
				</CardItem>
				</Body>
				<CardItem cardBody>
					<Image source={{uri: 'https://image.tmdb.org/t/p/w500/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg'}} style={{height: 672, width: 448, flex: 1}}/>
				</CardItem>
				<Body>
				<CardItem>
						<Button block dark onPress={() => this.handleAddFavorite(335983)}>
							<Text>Agregar a Favoritos</Text>
						</Button>
				</CardItem>
				</Body>
			</Card>

			<Card>
				<Body>
				<CardItem header>
					<Text> Spider-Man: Into the Spider-Verse </Text> 
				</CardItem>
				</Body>
				<CardItem cardBody>
					<Image source={{uri: 'https://image.tmdb.org/t/p/w500/laMM4lpQSh5z6KIBPwWogkjzBVQ.jpg'}} style={{height: 672, width: 448, flex: 1}}/>
				</CardItem>
				<Body>
				<CardItem>
						<Button block dark onPress={() => this.handleAddFavorite(324857)}>
							<Text>Agregar a Favoritos</Text>
						</Button>
				</CardItem>
				</Body>
			</Card>

			<Card>
				<Body>
				<CardItem header>
					<Text> Fantastic Beasts: The Crimes of Grindelwald </Text> 
				</CardItem>
				</Body>
				<CardItem cardBody>
					<Image source={{uri: 'https://image.tmdb.org/t/p/w500/kQKcbJ9uYkTQql2R8L4jTUz7l90.jpg'}} style={{height: 672, width: 448, flex: 1}}/>
				</CardItem>
				<Body>
				<CardItem>
						<Button block dark onPress={() => this.handleAddFavorite(338952)}>
							<Text>Agregar a Favoritos</Text>
						</Button>
				</CardItem>
				</Body>
			</Card>

			<Card>
				<Body>
				<CardItem header>
					<Text> Creed II </Text> 
				</CardItem>
				</Body>
				<CardItem cardBody>
					<Image source={{uri: 'https://image.tmdb.org/t/p/w500/v3QyboWRoA4O9RbcsqH8tJMe8EB.jpg'}} style={{height: 672, width: 448, flex: 1}}/>
				</CardItem>
				<Body>
				<CardItem>
						<Button block dark onPress={() => this.handleAddFavorite(480530)}>
							<Text>Agregar a Favoritos</Text>
						</Button>
				</CardItem>
				</Body>
			</Card>

			<Card>
				<Body>
				<CardItem header>
					<Text> Dragon Ball Super: Broly </Text> 
				</CardItem>
				</Body>
				<CardItem cardBody>
					<Image source={{uri: 'https://image.tmdb.org/t/p/w500/518jdIQHCZmYqIcNCaqbZuDRheV.jpg'}} style={{height: 672, width: 448, flex: 1}}/>
				</CardItem>
				<Body>
				<CardItem>
						<Button block dark onPress={() => this.handleAddFavorite(503314)}>
							<Text>Agregar a Favoritos</Text>
						</Button>
				</CardItem>
				</Body>
			</Card>

			<Card>
				<Body>
				<CardItem header>
					<Text> The Predator </Text> 
				</CardItem>
				</Body>
				<CardItem cardBody>
					<Image source={{uri: 'https://image.tmdb.org/t/p/w500/wMq9kQXTeQCHUZOG4fAe5cAxyUA.jpg'}} style={{height: 672, width: 448, flex: 1}}/>
				</CardItem>
				<Body>
				<CardItem>
						<Button block dark onPress={() => this.handleAddFavorite(346910)}>
							<Text>Agregar a Favoritos</Text>
						</Button>
				</CardItem>
				</Body>
			</Card>

			<Card>
				<Body>
				<CardItem header>
					<Text> Johnny English Strikes Again </Text> 
				</CardItem>
				</Body>
				<CardItem cardBody>
					<Image source={{uri: 'https://image.tmdb.org/t/p/w500/ryACHOzmRJiJEKjatbokudfkO74.jpg'}} style={{height: 672, width: 448, flex: 1}}/>
				</CardItem>
				<Body>
				<CardItem>
						<Button block dark onPress={() => this.handleAddFavorite(463272)}>
							<Text>Agregar a Favoritos</Text>
						</Button>
				</CardItem>
				</Body>
			</Card>

			<Card>
				<Body>
				<CardItem header>
					<Text> Night School </Text> 
				</CardItem>
				</Body>
				<CardItem cardBody>
					<Image source={{uri: 'https://image.tmdb.org/t/p/w500/kwKg9Nt7WYMURxzhuvQa7erxlyB.jpg'}} style={{height: 672, width: 448, flex: 1}}/>
				</CardItem>
				<Body>
				<CardItem>
						<Button block dark onPress={() => this.handleAddFavorite(454293)}>
							<Text>Agregar a Favoritos</Text>
						</Button>
				</CardItem>
				</Body>
			</Card>

			<Card>
				<Body>
				<CardItem header>
					<Text> Avengers: Infinity War </Text> 
				</CardItem>
				</Body>
				<CardItem cardBody>
					<Image source={{uri: 'https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg'}} style={{height: 672, width: 448, flex: 1}}/>
				</CardItem>
				<Body>
				<CardItem>
						<Button block dark onPress={() => this.handleAddFavorite(299536)}>
							<Text>Agregar a Favoritos</Text>
						</Button>
				</CardItem>
				</Body>
			</Card>

			<Card>
				<Body>
				<CardItem header>
					<Text> Mortal Engines </Text> 
				</CardItem>
				</Body>
				<CardItem cardBody>
					<Image source={{uri: 'https://image.tmdb.org/t/p/w500/uXJVpPXxZO4L8Rz3IG1Y8XvZJcg.jpg'}} style={{height: 672, width: 448, flex: 1}}/>
				</CardItem>
				<Body>
				<CardItem>
						<Button block dark onPress={() => this.handleAddFavorite(428078)}>
							<Text>Agregar a Favoritos</Text>
						</Button>
				</CardItem>
				</Body>
			</Card>

			<Card>
				<Body>
				<CardItem header>
					<Text> Robin Hood </Text> 
				</CardItem>
				</Body>
				<CardItem cardBody>
					<Image source={{uri: 'https://image.tmdb.org/t/p/w500/AiRfixFcfTkNbn2A73qVJPlpkUo.jpg'}} style={{height: 672, width: 448, flex: 1}}/>
				</CardItem>
				<Body>
				<CardItem>
						<Button block dark onPress={() => this.handleAddFavorite(375588)}>
							<Text>Agregar a Favoritos</Text>
						</Button>
				</CardItem>
				</Body>
			</Card>

			<Card>
				<Body>
				<CardItem header>
					<Text> Bad Times at the El Royale </Text> 
				</CardItem>
				</Body>
				<CardItem cardBody>
					<Image source={{uri: 'https://image.tmdb.org/t/p/w500/qExufIc4Rw0e4xdVZlhMdmEDGES.jpg'}} style={{height: 672, width: 448, flex: 1}}/>
				</CardItem>
				<Body>
				<CardItem>
						<Button block dark onPress={() => this.handleAddFavorite(446021)}>
							<Text>Agregar a Favoritos</Text>
						</Button>
				</CardItem>
				</Body>
			</Card>

			<Card>
				<Body>
				<CardItem header>
					<Text> Bohemian Rhapsody </Text> 
				</CardItem>
				</Body>
				<CardItem cardBody>
					<Image source={{uri: 'https://image.tmdb.org/t/p/w500/lHu1wtNaczFPGFDTrjCSzeLPTKN.jpg'}} style={{height: 672, width: 448, flex: 1}}/>
				</CardItem>
				<Body>
				<CardItem>
						<Button block dark onPress={() => this.handleAddFavorite(424694)}>
							<Text>Agregar a Favoritos</Text>
						</Button>
				</CardItem>
				</Body>
			</Card>

			<Card>
				<Body>
				<CardItem header>
					<Text> Mary Poppins Returns </Text> 
				</CardItem>
				</Body>
				<CardItem cardBody>
					<Image source={{uri: 'https://image.tmdb.org/t/p/w500/uTVGku4LibMGyKgQvjBtv3OYfAX.jpg'}} style={{height: 672, width: 448, flex: 1}}/>
				</CardItem>
				<Body>
				<CardItem>
						<Button block dark onPress={() => this.handleAddFavorite(400650)}>
							<Text>Agregar a Favoritos</Text>
						</Button>
				</CardItem>
				</Body>
			</Card>

			<Card>
				<Body>
				<CardItem header>
					<Text> Halloween </Text> 
				</CardItem>
				</Body>
				<CardItem cardBody>
					<Image source={{uri: 'https://image.tmdb.org/t/p/w500/bXs0zkv2iGVViZEy78teg2ycDBm.jpg'}} style={{height: 672, width: 448, flex: 1}}/>
				</CardItem>
				<Body>
				<CardItem>
						<Button block dark onPress={() => this.handleAddFavorite(424139)}>
							<Text>Agregar a Favoritos</Text>
						</Button>
				</CardItem>
				</Body>
			</Card>

			<Card>
				<Body>
				<CardItem header>
					<Text> Home Alone 3 </Text> 
				</CardItem>
				</Body>
				<CardItem cardBody>
					<Image source={{uri: 'https://image.tmdb.org/t/p/w500/z6ugEdjGuY4qcX1ymdV2CTVSvKN.jpg'}} style={{height: 672, width: 448, flex: 1}}/>
				</CardItem>
				<Body>
				<CardItem>
						<Button block dark onPress={() => this.handleAddFavorite(9714)}>
							<Text>Agregar a Favoritos</Text>
						</Button>
				</CardItem>
				</Body>
			</Card>


			</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});


