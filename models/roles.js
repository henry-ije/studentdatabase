module.exports = (sequelize, dataType) => {
    const Role = sequelize.define("role", 
    {
        roleName: {
            type: dataType.STRING,
            allowNull: false
        }, 
        roleDescription: {
            type: dataType.STRING
        }
    })
    return Role
}