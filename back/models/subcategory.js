const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Subcategory extends Model {
    static init(sequelize) {
        return super.init({
            label: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            enabled: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            }
        }, {
            modelName: 'Subcategory',
            tableName: 'subcategories',
            charset: 'utf8',
            collate: 'utf8_general_ci',
            sequelize
        })
    }
    static associate(db) {
        db.Subcategory.belongsTo(db.Category);
        db.Subcategory.hasMany(db.Post);
    };
};