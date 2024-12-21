const db =require('../database/models');
const jwt = require('jsonwebtoken');
const { Sequelize } = db;
const getMaterials = async (req, res) => {
  try {
    const materials = await db.sequelize.query("SELECT * FROM materials", {
      type: Sequelize.QueryTypes.SELECT,
    });
    if (!materials || materials.length === 0) {
      return res.status(404).json({ message: 'No materials found.' });
    }
    return res.status(200).json({
      message: 'Materials retrieved successfully.',
      materials,
    });
  } catch (error) {
    console.error('Error retrieving materials:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
}

const getMaterialById = async (req, res) => {
  try {
    const { id } = req.params;
    const material = await db.sequelize.query("SELECT * FROM materials WHERE course_id = :id", {
      replacements: { id },
      type: Sequelize.QueryTypes.SELECT,
    });
    if (!material || material.length === 0) {
      return res.status(404).json({ message: 'Material not found.' });
    }
    return res.status(200).json({
      message: 'Material retrieved successfully.',
      material: material,
    });
  } catch (error) {
    console.error('Error retrieving material:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
}

const getMaterialsHierarchy = async (req, res) => {
  const { course_id } = req.params; // Ambil course_id dari parameter URL
  try {
    const [materials] = await db.sequelize.query(
      `
      WITH RECURSIVE material_hierarchy AS (
          SELECT 
              material_id,
              parent_material_id,
              title,
              type,
              content,
              position,
              0 AS level
          FROM materials
          WHERE parent_material_id IS NULL AND course_id = :course_id

          UNION ALL

          SELECT 
              m.material_id,
              m.parent_material_id,
              m.title,
              m.type,
              m.content,
              m.position,
              mh.level + 1
          FROM materials m
          INNER JOIN material_hierarchy mh 
          ON m.parent_material_id = mh.material_id
          WHERE m.course_id = :course_id
      )
      SELECT * FROM material_hierarchy
      ORDER BY level, position;
      `,
      { replacements: { course_id } } // Gunakan replacements untuk menghindari SQL injection
    );

    if (!materials || materials.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No materials found for this course',
      });
    }

    res.status(200).json({
      success: true,
      data: materials,
    });
  } catch (error) {
    console.error("Error fetching materials hierarchy:", error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve materials',
      error: error.message,
    });
  }
};

module.exports = {
  getMaterials, 
  getMaterialById,
  getMaterialsHierarchy
};
