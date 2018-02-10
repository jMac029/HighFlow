module.exports = function(sequelize, DataTypes) {
    let Dispenser = sequelize.define("Dispenser", {
        // Giving the Dispenser model a name of type STRING
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                args: true,
                message: 'Username must be unique.',
                fields: [sequelize.fn('lower', sequelize.col('username'))]
            },
            validate: {
                min: {
                    args: 3,
                    msg: 'Username must start with a letter, have no spaces, and be at least 3 characters.'
                },
                max: {
                    args: 40,
                    msg: 'Username must start with a letter, have no spaces, and be at less than 40 characters.'
                },
                is: {
                    args: /^[A-Za-z][A-Za-z0-9-]+$/i, // must start with letter and only have letters, numbers, dashes
                    msg: 'Username must start with a letter, have no spaces, and be 3 - 40 characters.'
                }
            },
        },
        dispenser_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                args: true,
                message: "Business Name is already taken in our system.",
                fields: [sequelize.fn(sequelize.col('dispenser_name'))]
            },
            validate: {
                len: {
                    args: [1, 140],
                    msg: 'Business Name must be between 1 and 140 characters.'
                }
            }
        },
        license: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [1, 24],
                    msg: "License code must be between 1 and 24 characters"
                }
            }
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [1, 140],
                    msg: "City must be between 1 and 140 characters"
                }
            }
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                args: true,
                msg: 'Oops. Looks like there is already a profile with this email address. Please try another email.',
                fields: [sequelize.fn('lower', sequelize.col('email'))]
            },
            validate: {
                isEmail: {
                    args: true,
                    msg: 'The email you entered is invalid or is already in our system.'
                },
                max: {
                    args: 254,
                    msg: 'The email you entered is invalid or longer than 254 characters.'
                }
            }
        },
        about: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                max: {
                    arg: 280,
                    msg: "About section can be no longer than 280 characters."
                }
            }
        },
        strains_wanted: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                max: {
                    args: 280,
                    msg: "Strains Wanted cannot be longer than 280 characters."
                }
            }
        },
        webpage: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isUrl: {
                    args: true,
                    msg: "Website is invalid please re-enter."
                },
                max: {
                    args: 140,
                    msg: "Website can be no longer than 140 characters."
                }
            }
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isUrl: {
                    args: true,
                    msg: "Image link must be a url link to an image hosted online."
                },
                max: {
                    args: 280,
                    msg: "Image link is over 280 characters in length, please find a shorter link."
                }
            }
        }
    });

    // dispenser.associate = function(models) {
    //     // Associating Dispenser with Products
    //     // When an Dispenser is deleted, also delete any associated Products
    //     dispenser.hasMany(models.product, {
    //         onDelete: "cascade"
    //     });
    // };

    return Dispenser;
};