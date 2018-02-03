module.exports = (sequelize, DataTypes) => {
    let product = sequelize.define("Product", {
        product_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1, 280]
        },
        asking_price: {
            type: DataTypes.FLOAT,
            allowNull: true,
            validate: {
                isFloat: true,
            }
        },
        grow_cycle: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 140]
            }
        }
    });

    // product.associate = (models) => {
    //     // We're saying that a Product should belong to an Author
    //     // A Product can't be created without an Author due to the foreign key constraint
    //     product.belongsTo(models.grower, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };

    return product;
};