module.exports = (sequelize, dataType)=>{
    const User = sequelize.define("user", 
    {
        firstName: {
            type: dataType.STRING,
            allowNull: false
        },
        lastName: {
            type: dataType.STRING,
            allowNull: false
        },
        email: {
            type: dataType.STRING,
            allowNull: false
        }, 
        userName: {
            type: dataType.STRING,
            allowNull: false,
            unique: true,
            validation: {
                len: {
                    args: [6, 10], 
                    msg: "Username must be of min 6 and max 10 chars"
                }
            }
        }
    }) 
    return User 
}


