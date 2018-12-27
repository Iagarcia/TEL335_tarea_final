var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.use('/createUser', (req, res) => {
	if (req.method === 'POST') {
		console.log(req.query.email);
		console.log(req.query.username);
		console.log(req.query.password);
		console.log(req.query.passwordConf);
	
		if (req.query.email && req.query.username && req.query.password && req.query.passwordConf) {
			var userData = {
				email: req.query.email,
				username: req.query.username,
				password: req.query.password,
				passwordConf: req.query.passwordConf,
			}
			if (userData.password !== userData.passwordConf) {
				res.status(400);
				res.json({
				"message": "Error. Password mismatch",
				"success": false,
				});
			} else {
				User.create(userData, function (error, user) {
					if (error) {
						res.status(400);
						res.json({
						"message": "Error. Create error",
						"success": false,
						"error": error,
						});
					} else {
						res.json({
							"message": "User's data has been registered",
							"success": true,
							"email": userData.email,
							"username": userData.username,
						});
					}
				});
			}
		} else {
			res.status(400);
			res.json({
				"message": "Error. invalid args",
				"success": false,
			});
		}
	} else {
		res.status(400);
		res.json({
			"message": "Error. Internal error. Invalid operation",
			"success": false,
		});
	}
})

router.get('/authUser', (req, res) => {
	User.authenticate(req.query.email, req.query.password, function (error, user) {
		console.log(user);
		if (error || !user) {
			res.status(400);
	        res.json({
	            "message": "Error. Wrong mail or password",
	            "success": false,
	        }); 
		} else {
			req.session.userId = user._id;
			res.json({
				"message": "User's data has been authenticated",
				"success": true,
				"username": user.username
			});
		}
	});
})

router.get('/getUser', (req, res) => {
	console.log(req.session);
	User.findById(req.session.userId).exec(function (error, user) {
		if (error) {
			res.status(400);
		    res.json({
				"message": "Error. Not find",
				"success": false,
			});
		} else {
			if (user === null) {
				res.status(400);
			    res.json({
					"message": "Error. Not authorized",
					"success": false,
				});
			} else {
				res.json({
					"message": "User's data has been authenticated",
					"success": true,
					"email": user.email,
					"username": user.username,
					"favorites": user.favorites,
				});
			}
		}
	});
})

router.post('/addFavorite', (req, res) => {
	if (req.method === 'POST') {
		if (req.query.movieId){
			console.log(req.query.movieId);
			User.findById(req.session.userId).exec(function (error, user) {
				if (error) {
					res.status(400);
					res.json({
						"message": "Error. Not find",
						"success": false,
					});
				} else {
					if (user === null) {
						res.status(400);
						res.json({
							"message": "Error. Not authorized",
							"success": false,
						});
					} else {
						var new_favorites = user.favorites;
						if (new_favorites.indexOf(req.query.movieId) === -1){
							var new_favorites = user.favorites;
							new_favorites.push(req.query.movieId);
							User.update(
								{email: user.email},
								{favorites: new_favorites},
								function(err, numberAffected, rawResponse) {
									if (err){
										console.log(err);
									}
								})
							res.json({
								"message": "User's data has been updated",
								"success": true,
								"email": user.email,
								"username": user.username,
								"favorites": user.favorites,
							});
						} else {
                            res.json({
                                "message": "Favorite already exist",
                                "success": true,
                                "email": user.email,
                                "username": user.username,
                                "favorites": user.favorites,
                            });
						}
					}
				}
			});
		} else {
			res.status(400);
			res.json({
				"message": "Error. invalid args",
				"success": false,
			});
		}
	} else {
		res.status(400);
		res.json({
			"message": "Error. Internal error. Invalid operation",
			"success": false,
		});
	}
})

router.post('/removeFavorite', (req, res) => {
    if (req.method === 'POST') {
        if (req.query.movieId){
            console.log(req.query.movieId);
            User.findById(req.session.userId).exec(function (error, user) {
                if (error) {
                    res.status(400);
                    res.json({
                        "message": "Error. Not find",
                        "success": false,
                    });
                } else {
                    if (user === null) {
                        res.status(400);
                        res.json({
                            "message": "Error. Not authorized",
                            "success": false,
                        });
                    } else {
                        var new_favorites = user.favorites;
                        if (new_favorites.indexOf(req.query.movieId) != -1){
                            var new_favorites = user.favorites;
							var index = new_favorites.indexOf(req.query.movieId);
                            new_favorites.splice(index, 1);
                            User.update(
                                {email: user.email},
                                {favorites: new_favorites},
                                function(err, numberAffected, rawResponse) {
                                    if (err){
                                        console.log(err);
                                    }
                                })
                            res.json({
                                "message": "User's data has been updated",
                                "success": true,
                                "email": user.email,
                                "username": user.username,
                                "favorites": user.favorites,
                            });
                        } else {
                            res.json({
                                "message": "Favorite does not exist",
                                "success": true,
                                "email": user.email,
                                "username": user.username,
                                "favorites": user.favorites,
                            });
                        }
                    }
                }
            });
        } else {
            res.status(400);
            res.json({
                "message": "Error. invalid args",
                "success": false,
            });
        }
    } else {
        res.status(400);
        res.json({
            "message": "Error. Internal error. Invalid operation",
            "success": false,
        });
    }
})

module.exports = router;
