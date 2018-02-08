module.exports = function(sequelize, DataTypes) {
    let Grower = sequelize.define("Grower", {
        // Giving the Grower model a name of type STRING
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        grower_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        license: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 22]
            }
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 13]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        about: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                len: [0, 280]
            }
        },
        system: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                len: [0, 280]
            }
        },
        strains: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                len: [0, 280]
            }
        },
        cycle: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [0, 140]
            }
        },
        webpage: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [0, 140]
            }
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [0, 140]
            }
        }
    });

    Grower.associate = function(models) {
        // Associating Grower with Products
        // When an Grower is deleted, also delete any associated Products
        Grower.hasMany(models.Product, {
            onDelete: "cascade"
        });
    };

    return Grower;
};