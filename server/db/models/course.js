const Sequelize = require('sequelize')
const db = require('../db')

const Course = db.define('course', {
  teacherId: {
    type: Sequelize.INTEGER
  },
  courseName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  size: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  videoRoomId: {
    type: Sequelize.STRING
  },
  courseId: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  courseIntro: {
    type: Sequelize.TEXT
  },
  courseMoreInformation: {
    type: Sequelize.TEXT
  },
  courseSchedule: {
    type: Sequelize.TEXT
  }
})

module.exports = Course
