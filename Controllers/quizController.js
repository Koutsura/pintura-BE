const { sequelize } = require('../database/models'); // Pastikan Anda mengimpor Sequelize instance dengan benar

const getQuizByMaterialId = async (req, res) => {
  const { materialId } = req.params;

  try {
    // Query untuk mendapatkan data Material berdasarkan ID
    const materialQuery = `
      SELECT * 
      FROM materials
      WHERE material_id = :materialId
    `;
    const material = await sequelize.query(materialQuery, {
      replacements: { materialId },
      type: sequelize.QueryTypes.SELECT,
    });

    // Jika material tidak ditemukan
    if (material.length === 0) {
      return res.status(404).json({ message: 'Material not found' });
    }

    // Query untuk mendapatkan semua pertanyaan berdasarkan material_id
    const questionsQuery = `
      SELECT * 
      FROM questions
      WHERE material_id = :materialId
    `;
    const questions = await sequelize.query(questionsQuery, {
      replacements: { materialId },
      type: sequelize.QueryTypes.SELECT,
    });

    // Query untuk mendapatkan semua opsi untuk setiap pertanyaan
    const questionsWithOptions = await Promise.all(
      questions.map(async (question) => {
        const optionsQuery = `
          SELECT * 
          FROM options
          WHERE question_id = :questionId
        `;
        const options = await sequelize.query(optionsQuery, {
          replacements: { questionId: question.question_id },
          type: sequelize.QueryTypes.SELECT,
        });

        return {
          ...question,
          options,
        };
      })
    );

    // Mengembalikan data lengkap
    res.json({
      material: material[0],
      questions: questionsWithOptions,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving quiz data' });
  }
};

module.exports = {
  getQuizByMaterialId,
};
