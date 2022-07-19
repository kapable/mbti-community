const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Text extends Model {
    static init(sequelize) {
        return super.init({ 
            // id가 기본적으로 자동 삽입
            content: {
                type: DataTypes.JSON,
                allowNull: false,
            },
        }, {
            modelName: 'Text',
            tableName: 'texts',
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
            sequelize
        })
    };
    static associate(db) {
        db.Text.belongsTo(db.Post);
    };
};