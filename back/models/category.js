const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Category extends Model {
    static init(sequelize) {
        return super.init({
            label: {
                type: DataTypes.STRING(20),
                allowNull: false,
                unique: true,
            },
            enabled: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            }
        }, {
            modelName: 'Category',
            tableName: 'categories',
            charset: 'utf8',
            collate: 'utf8_general_ci',
            sequelize
        })
    }
    static associate(db) {
        db.Category.hasMany(db.Post);
        db.Category.hasMany(db.Subcategory);
    };
};