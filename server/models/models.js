const sequelize = require('../db')
const {DataTypes,} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Dimension = sequelize.define('dimension',{
    id: {type: DataTypes.STRING, primaryKey: true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    inv_number: {type: DataTypes.STRING, allowNull: false},
    ser_number: {type: DataTypes.STRING},
    quantity: {type: DataTypes.DECIMAL, allowNull: false},
    price: {type: DataTypes.DECIMAL, allowNull: false, defaultValue: 0},
    date: {type: DataTypes.DATE},
    note: {type: DataTypes.STRING},
    img: {type: DataTypes.STRING}
})

Dimension.hasMany(Product)
Product.belongsTo(Dimension)

module.exports = {
    User,
    Dimension,
    Product
}