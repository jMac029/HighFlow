module.exports = function(sequelize, DataTypes) {
    let Dispenser = sequelize.define("Dispenser", {
        // Giving the Dispenser model a name of type STRING
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        dispenser_name: {
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
                len: [280]
            }
        },
        strains_wanted: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                len: [280]
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

    // dispenser.associate = function(models) {
    //     // Associating Dispenser with Products
    //     // When an Dispenser is deleted, also delete any associated Products
    //     dispenser.hasMany(models.product, {
    //         onDelete: "cascade"
    //     });
    // };

    return Dispenser;
};