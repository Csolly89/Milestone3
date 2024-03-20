const {DataTypes} = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize) => {
    const User = sequelize.define("user", {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: {
                    args: true,
                    msg: 'Email address already in use!'
                },
                validate: {
                    isEmail: {
                        args: true,
                        msg: 'That is an invalid email address'
                    },
                }
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [4],
                },
            },
        },
        {
            hooks: {
                async beforeCreate(newUserData) {
                    newUserData.password = await bcrypt.hash(newUserData.password, 10);
                    return newUserData;
                },
                async beforeUpdate(updatedUserData) {
                    updatedUserData.password = await bcrypt.hash(
                        updatedUserData.password,
                        10
                    );
                    return updatedUserData;
                },
            },
            timestamps: false,
        }
    );

    User.prototype.checkPassword = function(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }

    return User;
};
