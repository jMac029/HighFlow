module.exports = function(sequelize, DataTypes) {
    var Dispenser = sequelize.define("Dispenser", {
        // Giving the Dispenser model a name of type STRING
        dispenser_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
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
        strains_wanted: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                len: [1, 280]
            }
        }
    });

    Dispenser.associate = function(models) {
        // Associating Dispenser with Products
        // When an Dispenser is deleted, also delete any associated Products
        Dispenser.hasMany(models.Product, {
            onDelete: "cascade"
        });
    };

    return Dispenser;
};