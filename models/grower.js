module.exports = function(sequelize, DataTypes) {
    let grower = sequelize.define("Grower", {
        // Giving the Grower model a name of type STRING
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
                len: [2]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        bio: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                len: [1, 280]
            }
        },
        grow_method: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                len: [1, 280]
            }
        },
        indoor: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        strains: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                len: [1, 280]
            }
        },
        cycle: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 140]
            }
        }
    });

    // grower.associate = function(models) {
    //     // Associating Grower with Products
    //     // When an Grower is deleted, also delete any associated Products
    //     grower.hasMany(models.product, {
    //         onDelete: "cascade"
    //     });
    // };

    return grower;
};