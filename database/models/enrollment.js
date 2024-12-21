"use strict";

// models/Enrollment.js
module.exports = (sequelize, DataTypes) => {
    const Enrollment = sequelize.define('Enrollment', {
        enrollment_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        student_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        course_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        progress: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },

      completion_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      enrolled_at: {
        type: DataTypes.DATE,
        allowNull: true,
    }
    },
    {
        tableName: "enrollments",
        timestamps: false,
        paranoid: true,
      });
    
    Enrollment.associate = (models) => {
      Enrollment.belongsTo(models.Course, { foreignKey: 'course_id' });
      Enrollment.belongsTo(models.User, { foreignKey: 'student_id' });
    };
  
    return Enrollment;
  };