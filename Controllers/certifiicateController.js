const { User, Course, Enrollment } = require('../database/models');
const { Op } = require('sequelize'); // Import Op untuk kondisi tambahan

// Fungsi untuk mengambil data sertifikat
const getCertificate = async (req, res) => {
  try {
    const { enrollmentId } = req.params;

    const certificateData = await Enrollment.findOne({
      where: { 
        enrollment_id: enrollmentId,
        completion_date: { [Op.not]: null }, // Pastikan completion_date tidak null
      },
      include: [
        { model: User, attributes: ['name'] },
        { model: Course, attributes: ['title', 'institution','image_url'] },
      ],
    });

    if (!certificateData) {
      return res.status(404).json({ message: 'Certificate not found or course not completed yet' });
    }

    // Format response
    res.json({
      userName: certificateData.User.name,
      courseName: certificateData.Course.title,
      institution: certificateData.Course.institution,
      dateCompletion: certificateData.completion_date,
        imageUrl: certificateData.Course.image_url,
    });
  } catch (error) {
    console.error('Error fetching certificate:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { getCertificate };
