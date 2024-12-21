const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Import jwt
const db = require('../database/models'); // Correct path to your models

const { User, Sequelize} = db;

// Register function

const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Validate input: make sure all fields are provided
    if (!firstName || !lastName || !email || !password) {
      console.error('Error: All fields are required');
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      console.error('Error: Invalid email format');
      return res.status(400).json({ message: 'Invalid email format.' });
    }

    // Check if the email is already registered
    const [existingUser] = await db.sequelize.query(
      `SELECT user_id FROM users WHERE email = :email`,
      { replacements: { email }, type: Sequelize.QueryTypes.SELECT }
    );

    if (existingUser) {
      console.error('Error: Email is already registered', email);
      return res.status(400).json({ message: 'Email is already registered.' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user to the database using raw query
    const [result] = await db.sequelize.query(
      `INSERT INTO users (name, email, password, role_id, created_at, updated_at, deleted_at)
       VALUES (:name, :email, :password, NULL, NOW(), NOW(), NULL)`,
      {
        replacements: {
          name: `${firstName} ${lastName}`, // Menggabungkan firstName dan lastName
          email,
          password: hashedPassword,
        },
      }
    );
    
    // Get the new user's ID
    const [newUser] = await db.sequelize.query(
      `SELECT LAST_INSERT_ID() AS profile_id`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    // Automatically create a user profile with default values using raw query
    await db.sequelize.query(
      `INSERT INTO userprofiles (user_id,username, image_url, date_of_birth, gender, phone_number, allow_phone_notifications, city, education, company, role, bio, linkedin_url, youtube_url, instagram_url, facebook_url, line_url, twitter_url, credit, created_at, updated_at)
       VALUES (:user_id, NULL, NULL, NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL, NULL,NULL, NOW(), NOW())`,
      {
        replacements: {
          user_id: newUser.profile_id,
        },
      }
    );

    console.log('User registered successfully:', email);
    return res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error('Error during registration:', error); // Log error for debugging
    return res.status(500).json({ message: 'Internal server error, please try again later.' });
  }
};

// Login function
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(`[LOGIN ATTEMPT]: Email: ${email}`);

    // Validate input
    if (!email || !password) {
      console.warn('[VALIDATION ERROR]: Missing email or password.');
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    // Find user by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      console.warn(`[LOGIN FAILURE]: Invalid credentials for email: ${email}`);
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    // Check if email is verified
    if (user.email_verified !== '1') {
      console.warn(`[VERIFICATION FAILURE]: Email not verified: ${email}`);
      return res.status(403).json({ 
        message: 'Email not verified. Please verify your email first.',
        needsVerification: true 
      });
    }

    // Validate password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.warn(`[LOGIN FAILURE]: Invalid password for email: ${email}`);
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.user_id, email: user.email }, 
      process.env.JWT_SECRET || 'yourSecretKey', 
      { expiresIn: '1h' } // Token valid for 1 hour
    );

    console.log(`[LOGIN SUCCESS]: User: ${email}`);
    return res.status(200).json({
      message: 'Login successful.',
      token,
    });

  } catch (error) {
    console.error(`[LOGIN ERROR]:`, error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

// logout function
const logout = async (req, res) => {
  try {
    // Implement logout functionality here
    return res.status(200).json({ message: 'Logout successful.' });
  } catch (error) {
    console.error('Error during logout:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

module.exports = {
  register,
  login,
  logout,
};