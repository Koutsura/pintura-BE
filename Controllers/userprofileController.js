const jwt = require('jsonwebtoken');
const { userprofiles, sequelize } = require('../database/models'); // Impor model 'userprofiles'

// Fungsi untuk melengkapi profil pengguna
const completeProfile = async (req, res) => {
  const { username, image_url, date_of_birth, gender, phone_number, city, education, company, role, bio } = req.body; // Data dari request
  try {
    // Simpan data profil ke database menggunakan model 'userprofiles'
    const newProfile = await userprofiles.create({
      user_id: req.userId, // ID user dari token
      username,
      image_url,
      date_of_birth,
      gender,
      phone_number,
      city,
      education,
      company,
      role,
      bio,
    });

    // Berikan respons sukses
    res.status(201).json({ message: 'Profil berhasil dilengkapi.', profile: newProfile });
  } catch (error) {
    console.error('Terjadi kesalahan saat menyimpan profil:', error);
    res.status(500).json({ message: 'Gagal melengkapi profil.', error });
  }
};

// Middleware untuk memverifikasi token JWT
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Ambil token dari header
  if (!token) {
    return res.status(403).json({ message: 'Token tidak tersedia. Harap login terlebih dahulu.' });
  }

  try {
    // Verifikasi token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'yourSecretKey');
    req.userId = decoded.userId; // Simpan userId dari token ke request
    next(); // Lanjut ke fungsi berikutnya
  } catch (error) {
    console.error('Token tidak valid:', error);
    res.status(401).json({ message: 'Token tidak valid. Harap login ulang.' });
  }
};

const getProfile = async (req, res) => {
  try {
    const userId = req.userId; // ID user dari token

    const [profile] = await sequelize.query(
      `SELECT 
      u.name,
    up.username, 
    up.image_url, 
    up.date_of_birth, 
    up.gender, 
    up.phone_number, 
    up.city, 
    up.education,   
    up.company, 
    up.role, 
    up.bio, 
    u.email
FROM userprofiles up
JOIN users u ON up.user_id = u.user_id
WHERE up.user_id = :userId;`,
      {
        replacements: { userId }, // Menggunakan parameter untuk mencegah SQL Injection
        type: sequelize.QueryTypes.SELECT, // Jenis query SELECT
      }
    );

    if (!profile) {
      return res.status(404).json({ message: "Profil tidak ditemukan." });
    }

    res.status(200).json(profile);
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ message: "Gagal mendapatkan profil.", error });
  }
};

const completeSocialMedia = async (req, res) => {
  const { linkedin_url, youtube_url, instagram_url, facebook_url, line_url, twitter_url } = req.body; // Data dari body request
  const userId = req.userId; // Ambil userId dari token atau session

  try {
    // Query untuk memperbarui data media sosial
    await sequelize.query(
      `UPDATE userprofiles
       SET linkedin_url = :linkedinUrl,
           youtube_url = :youtubeUrl,
           instagram_url = :instagramUrl,
           facebook_url = :facebookUrl,
           line_url = :lineUrl,
           twitter_url = :twitterUrl
       WHERE user_id = :userId`,
      {
        replacements: {
          linkedinUrl: linkedin_url || null, // Nilai dari body request, gunakan null jika tidak ada
          youtubeUrl: youtube_url || null,
          instagramUrl: instagram_url || null,
          facebookUrl: facebook_url || null,
          lineUrl: line_url || null,
          twitterUrl: twitter_url || null,
          userId: userId, // ID pengguna dari autentikasi
        },
        type: sequelize.QueryTypes.UPDATE,
      }
    );

    // Berikan respons sukses
    res.status(200).json({ message: "Social media updated successfully." });
  } catch (error) {
    console.error("Error updating social media:", error);
    res.status(500).json({ message: "Failed to update social media.", error });
  }
};

const getSocialMedia = async (req, res) => {
  try {
    const userId = req.userId; // ID user dari token

    const [profile] = await sequelize.query(
      `SELECT linkedin_url, youtube_url, instagram_url, facebook_url, line_url, twitter_url 
       FROM userprofiles 
       WHERE user_id = :userId`,
      {
        replacements: { userId }, // Menggunakan parameter untuk mencegah SQL Injection
        type: sequelize.QueryTypes.SELECT, // Jenis query SELECT
      }
    );

    if (!profile) {
      return res.status(404).json({ message: "Profil tidak ditemukan." });
    }

    res.status(200).json(profile);
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ message: "Gagal mendapatkan profil.", error });
  }
};
const editProfile = async (req, res) => {
  try {
    const userId = req.userId; // ID user dari token
    const {
      username,
      image_url,
      date_of_birth,
      gender,
      phone_number,
      city,
      education,
      company,
      role,
      bio,
      name, // Untuk mengupdate nama di tabel 'users'
      email, // Untuk mengupdate email di tabel 'users'
    } = req.body; // Data dari request body

    // Debugging userId dan request body
    console.log("userId from token:", userId);
    console.log("Request body:", req.body);

    // Update tabel userprofiles
    const [updateUserProfile] = await sequelize.query(
      `UPDATE userprofiles 
      SET 
        username = :username,
        image_url = :image_url,
        date_of_birth = :date_of_birth,
        gender = :gender,
        phone_number = :phone_number,
        city = :city,
        education = :education,
        company = :company,
        role = :role,
        bio = :bio
      WHERE user_id = :userId;`,
      {
        replacements: {
          username,
          image_url,
          date_of_birth,
          gender,
          phone_number,
          city,
          education,
          company,
          role,
          bio,
          userId,
        },
        type: sequelize.QueryTypes.UPDATE,
      }
    );

    // Log hasil update userprofiles
    console.log("Rows affected (userprofiles):", updateUserProfile);

    // Update tabel users
    const [updateUser] = await sequelize.query(
      `UPDATE users 
      SET 
        name = :name,
        email = :email
      WHERE user_id = :userId;`,
      {
        replacements: {
          name,
          email,
          userId,
        },
        type: sequelize.QueryTypes.UPDATE,
      }
    );

    // Log hasil update users
    console.log("Rows affected (users):", updateUser);

    // Pastikan perubahan berhasil
    if (updateUserProfile === 0 || updateUser === 0) {
      return res.status(404).json({ message: "Profil tidak ditemukan atau tidak ada perubahan." });
    }

    res.status(200).json({ message: "Profil berhasil diperbarui." });
  } catch (error) {
    console.error("Error updating profile:", error.message, error.stack);
    res.status(500).json({ message: "Gagal memperbarui profil.", error: error.message });
  }
};

const addProfilePicture = async (req, res) => {
  try {
    const userId = req.userId; // ID user dari token
    const { image_url } = req.body; // URL gambar dari body request

    // Update tabel userprofiles
    const [updateUserProfile] = await db.sequelize.query(
      `UPDATE userprofiles 
      SET 
        image_url = :image_url
      WHERE user_id = :userId;`,
      {
        replacements: {
          image_url,
          userId,
        },
        type: db.sequelize.QueryTypes.UPDATE,
      }
    );

    // Log hasil update userprofiles
    console.log("Rows affected (userprofiles):", updateUserProfile);

    // Pastikan perubahan berhasil
    if (updateUserProfile === 0) {
      return res.status(404).json({ message: "Profil tidak ditemukan atau tidak ada perubahan." });
    }

    res.status(200).json({ message: "Foto profil berhasil diperbarui." });
  } catch (error) {
    console.error("Error updating profile picture:", error.message, error.stack);
    res.status(500).json({ message: "Gagal memperbarui foto profil.", error: error.message });
  }
}

// Ekspor fungsi agar bisa digunakan di file lain
module.exports = { completeProfile, authenticate, getProfile, completeSocialMedia, getSocialMedia, editProfile, addProfilePicture };
