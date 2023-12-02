module.exports = (sequelize, dataType) => {
    const Student = sequelize.define("student", 
    {
        highestQualification: {
            type: dataType.STRING,
            allowNull: false
        }

    })
    return Student
}