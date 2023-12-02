module.exports = (sequelize, dataType) => {
    const Class = sequelize.define("class", 
    {
        className: {
            type: dataType.STRING,
            allowNull: false
        }, 
        classDescription: {
            type: dataType.STRING
        }

    })
    return Class
}