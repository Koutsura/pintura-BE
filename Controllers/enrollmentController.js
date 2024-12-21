const db = require('../database/models'); // Sesuaikan dengan path model Anda

const enrollCourse = async (req, res) => {
  try {
    // Get user_id from the decoded token in req.user (set by authenticateToken middleware)
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({ message: 'Invalid token or missing user_id' });
    }

    // Get course_id from the body of the request
    const { course_id } = req.body;
    if (!course_id) {
      return res.status(400).json({ message: 'Course ID is required' });
    }

    // Get course details (including the price)
    const [course] = await db.sequelize.query(
      `SELECT * FROM courses WHERE course_id = ?`,
      {
        replacements: [course_id],
        type: db.Sequelize.QueryTypes.SELECT,
      }
    );

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // Check if the user is already enrolled in the course
    const [existingEnrollment] = await db.sequelize.query(
      `SELECT * FROM enrollments WHERE student_id = ? AND course_id = ?`,
      {
        replacements: [userId, course_id],
        type: db.Sequelize.QueryTypes.SELECT,
      }
    );

    if (existingEnrollment) {
      return res.status(400).json({ message: 'You are already enrolled in this course' });
    }

    // If course is paid (price > 0), redirect to pricing page
    if (course.price > 0) {
      return res.status(302).json({
        message: 'This is a paid course. Redirecting to pricing page.',
        redirect_url: '/dashboard/pricing',
      });
    }

    // If course is free, enroll the user
    const query = `
      INSERT INTO enrollments (student_id, course_id, progress, completion_date)
      VALUES (?, ?, ?, ?);
    `;
    const values = [userId, course_id, 0, null];

    await db.sequelize.query(query, { replacements: values });

    res.status(201).json({
      message: 'Enrollment successful',
      data: {
        user_id: userId,
        course_id,
        progress: 0,
        completion_date: null,
      },
    });
  } catch (error) {
    console.error('Error enrolling user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  enrollCourse,
};