"use strict";

const { console } = require("node:inspector/promises");
const { title } = require("process");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("userroles", [
      {
        role_name: "admin",
        description: "Responsible for managing the platform and users.",
      },
      {
        role_name: "instructor",
        description: "Can create and manage courses and materials.",
      },
      {
        role_name: "student",
        description: "Enrolled in courses and can access learning materials.",
      },
      {
        role_name: "mentor",
        description:
          "Monitors forums and ensures community guidelines are followed.",
      },
      {
        role_name: "counselor",
        description: "Provides guidance and support to students.",
      },
    ]);

    await queryInterface.bulkInsert("users", [
      {
        user_id: 1,
        google_id: null,
        name: "Admin Pintura",
        email: "admin@pintura.com",
        password: "password",
        role_id: 1, // admin
        email_verified: "1",
        email_verification_token: null,
        email_verification_token_expires: null,
        reset_password_token: null,
        reset_password_token_expires: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        user_id: 2,
        google_id: null,
        name: "John Instructor",
        email: "instructor@pintura.com",
        password: "password",
        role_id: 2, // instructor
        email_verified: "1",
        email_verification_token: null,
        email_verification_token_expires: null,
        reset_password_token: null,
        reset_password_token_expires: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        user_id: 3,
        google_id: null,
        name: "Sarah Student",
        email: "yojare3278@pokeline.com",
        password: "$2b$10$1Vz0oyk3MjyVU9149fBe4.bF21wf8jaAfdQ.C.r/bR7e2C747d37i",
        role_id: 3, // student
        email_verified: "1",
        email_verification_token: null,
        email_verification_token_expires: null,
        reset_password_token: null,
        reset_password_token_expires: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        user_id: 4,
        google_id: null,
        name: "Mike Mentor",
        email: "mentor@pintura.com",
        password: "password",
        role_id: 4, // mentor
        email_verified: "1",
        email_verification_token: null,
        email_verification_token_expires: null,
        reset_password_token: null,
        reset_password_token_expires: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        user_id: 5,
        google_id: null,
        name: "Clara Counselor",
        email: "counselor@pintura.com",
        password: "password",
        role_id: 5, // counselor
        email_verified: "1",
        email_verification_token: null,
        email_verification_token_expires: null,
        reset_password_token: null,
        reset_password_token_expires: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        user_id: 6,
        google_id: null,
        name: "Jane Doe",
        email: "kotej48737@iminko.com",
        password: "$2b$10$1Vz0oyk3MjyVU9149fBe4.bF21wf8jaAfdQ.C.r/bR7e2C747d37i",
        role_id: 3, // student
        email_verified: "1",
        email_verification_token: null,
        email_verification_token_expires: null,
        reset_password_token: null,
        reset_password_token_expires: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
        
      }
    ]);
    await queryInterface.bulkInsert("categoriescourses", [
      {
        category_Id: 1,
        name: "Programming",
        description: "Learn the basics of programming using Python.",
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        category_Id: 2,
        name: "Web Development",
        description:
          "Build dynamic and responsive websites with HTML, CSS, and JavaScript.",
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        category_Id: 3,
        name: "Database Management",
        description: "Understand database systems and learn SQL.",
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        category_Id: 4,
        name: "Data Science",
        description:
          "Explore data analysis, visualization, and machine learning.",
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        category_Id: 5,
        name: "Cybersecurity",
        description:
          "Learn about network security, cryptography, and ethical hacking.",
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        category_Id: 6,
        name: "Cloud Computing",
        description:
          "Understand cloud platforms and services, such as AWS and Azure.",
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
    ]);

    await queryInterface.bulkInsert("courses", [
      {
        course_id: 1,
        title: "Introduction to Programming",
        description: "Learn the basics of programming using Python.",
        category_id: 1,
        price: 0,
        image_url:
          "https://student-activity.binus.ac.id/bncc/wp-content/uploads/sites/23/2023/06/unnamed-18.png",
        institution: "Binus University",
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        course_id: 2,
        title: "Web Development",
        description:
          "Build dynamic and responsive websites with HTML, CSS, and JavaScript.",
        category_id: 2,
        price: 0,
        image_url:
          "https://www.creative-tim.com/blog/content/images/size/w960/2022/01/which-development-job-is-right-for-you.jpg",
        institution: "nganu university",
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        course_id: 3,
        title: "Database Management",
        description: "Understand database systems and learn SQL.",
        category_id: 3,
        price: 0,
        image_url:
          "https://miro.medium.com/v2/resize:fit:1400/1*szBsfY6lp8A0jb1zOvJ0mw.jpeg",
        institution: "nganu company",
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        course_id: 4,
        title: "Data Analysis with Python",
        description:
          "Explore data analysis techniques using Python and popular libraries.",
        category_id: 4,
        price: 0,
        image_url:
          "https://miro.medium.com/v2/resize:fit:1024/1*CvcM2chQox1VGJnWQO3acg.png",
        institution: "jagopiton company",
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        course_id: 5,
        title: "Ethical Hacking",
        description:
          "Learn about penetration testing, network security, and ethical hacking.",
        category_id: 5,
        price: 0,
        image_url: "https://i.ytimg.com/vi/4MC6s6wS5CI/hqdefault.jpg",
        institution: "nganu company",
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        course_id: 6,
        title: "AWS Fundamentals",
        description:
          "Understand the basics of cloud computing and Amazon Web Services.",
        category_id: 6,
        price: 0,
        image_url:
          "https://images.squarespace-cdn.com/content/v1/60cfd646701da4034512a1c5/1654217981309-RTSZMBJWA9YJ5V32UN8R/AWS-Cloud.png",
        institution: "boncos company",
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        course_id: 7,
        title: "Introduction to Python",
        description:
          "Learn the basics of Python programming, including syntax, data types, and functions.",
        category_id: 1,
        rating: 4.8,
        price: 0.0,
        image_url:
          "https://i1.sndcdn.com/artworks-P5MWk3yik2g5jGCz-XzHAcg-t500x500.jpg",
        institution: "Code Academy",
        is_trending: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_id: 8,
        title: "Java for Beginners",
        description:
          "Understand the fundamentals of Java programming and build small projects.",
        category_id: 1,
        rating: 4.6,
        price: 40.0,
        image_url:
          "https://miro.medium.com/v2/resize:fit:800/0*CcsFuPYjrjnAvR1S.png",
        institution: "Tech University",
        is_trending: "0",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_id: 9,
        title: "Advanced Python Programming",
        description:
          "Deep dive into Python for data analysis and machine learning.",
        category_id: 1,
        rating: 4.7,
        price: 0.0,
        image_url:
          "https://roboprenr.com/media/images/advanced_python_Programming_icon.jpeg",
        institution: "Data Academy",
        is_trending: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_id: 10,
        title: "C++ Essentials",
        description:
          "Learn C++ programming for system-level and performance-critical applications.",
        category_id: 1,
        rating: 4.5,
        price: 50.0,
        image_url:
          "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg",
        institution: "Tech University",
        is_trending: "0",
        created_at: new Date(),
        updated_at: new Date(),
      },

      // Web Development Courses
      {
        course_id: 11,
        title: "HTML & CSS Basics",
        description:
          "Master the foundation of web development with HTML and CSS.",
        category_id: 2,
        rating: 4.7,
        price: 0.0,
        image_url:
          "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/133192962/original/be6d95ebbccda6a1157815645800c26bdfddaaf1/edit-or-fix-any-html-css-or-javascript-code.png",
        institution: "WebDev School",
        is_trending: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_id: 12,
        title: "Fullstack Development",
        description:
          "Become a fullstack web developer with expertise in both frontend and backend.",
        category_id: 2,
        rating: 4.9,
        price: 100.0,
        image_url:
          "https://himatif.ilkom.unej.ac.id/storage/photo/post/IPRzhQ3mLO2RuaO2yBb7Hd6sOnwZ0Uqj2NSvqE6h.jpg",
        institution: "Code Academy",
        is_trending: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_id: 13,
        title: "JavaScript Advanced",
        description:
          "Master advanced JavaScript concepts for modern web development.",
        category_id: 2,
        rating: 4.8,
        price: 80.0,
        image_url:
          "https://miro.medium.com/v2/resize:fit:344/1*tZHcs0d7MAG-BBcjBekZYA.png",
        institution: "Web Academy",
        is_trending: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_id: 14,
        title: "React and Redux",
        description:
          "Build scalable and modern web applications using React and Redux.",
        category_id: 2,
        rating: 4.6,
        price: 75.0,
        image_url:
          "https://media2.dev.to/dynamic/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fsk3vdofe7r7r5wax1scb.png",
        institution: "WebDev School",
        is_trending: "0",
        created_at: new Date(),
        updated_at: new Date(),
      },

      // Database Management Courses
      {
        course_id: 15,
        title: "SQL Fundamentals",
        description:
          "Learn how to write SQL queries to manage and retrieve data from databases.",
        category_id: 3,
        rating: 4.5,
        price: 35.0,
        image_url:
          "https://www.techmonitor.ai/wp-content/uploads/sites/29/2016/06/SQL.png",
        institution: "Data School",
        is_trending: "0",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_id: 16,
        title: "Advanced MySQL",
        description:
          "Master advanced features of MySQL and optimize database performance.",
        category_id: 3,
        rating: 4.6,
        price: 50.0,
        image_url:
          "https://cdn.sanity.io/images/oaglaatp/production/feb9c80a48a201140dcfa20559b73ab1b803e59b-1200x800.png",
        institution: "Tech University",
        is_trending: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_id: 17,
        title: "Database Design",
        description:
          "Understand relational database design principles and best practices.",
        category_id: 3,
        rating: 4.7,
        price: 0.0,
        image_url:
          "https://miro.medium.com/v2/resize:fit:800/1*l9ktb4erdPUhKAGjWHH6QA.jpeg",
        institution: "Data School",
        is_trending: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_id: 18,
        title: "PostgreSQL for Developers",
        description:
          "Leverage PostgreSQL features for modern application development.",
        category_id: 3,
        rating: 4.5,
        price: 45.0,
        image_url:
          "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
        institution: "Data Academy",
        is_trending: "0",
        created_at: new Date(),
        updated_at: new Date(),
      },

      // Data Science Courses
      {
        course_id: 19,
        title: "Data Science for Beginners",
        description:
          "A comprehensive introduction to data science using Python.",
        category_id: 4,
        rating: 4.7,
        price: 80.0,
        image_url:
          "https://usa.bootcampcdn.com/wp-content/uploads/sites/119/2021/03/data.jpg",
        institution: "Data Academy",
        is_trending: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_id: 20,
        title: "Machine Learning Basics",
        description:
          "Understand machine learning algorithms and build predictive models.",
        category_id: 4,
        rating: 4.9,
        price: 0.0,
        image_url:
          "https://www.einfochips.com/wp-content/uploads/2018/10/how-to-develop-machine-learning-applications-for-business-featured.jpg",
        institution: "AI University",
        is_trending: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_id: 21,
        title: "Deep Learning with TensorFlow",
        description:
          "Learn to build deep learning models using TensorFlow and Keras.",
        category_id: 4,
        rating: 4.8,
        price: 120.0,
        image_url:
          "https://www.mrdbourke.com/content/images/2021/05/cover-tensorflow-for-deep-learning.jpg",
        institution: "AI Lab",
        is_trending: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_id: 22,
        title: "Data Visualization with Tableau",
        description: "Create stunning data visualizations using Tableau.",
        category_id: 4,
        rating: 4.6,
        price: 60.0,
        image_url:
          "https://www.melinakmiller.com/wp-content/uploads/2020/06/Tableau-charts.jpg",
        institution: "Data Academy",
        is_trending: "0",
        created_at: new Date(),
        updated_at: new Date(),
      },

      // Cybersecurity Courses
      {
        course_id: 23,
        title: "Introduction to Cybersecurity",
        description:
          "Learn the basics of cybersecurity and how to protect systems from threats.",
        category_id: 5,
        rating: 4.6,
        price: 0.0,
        image_url:
          "https://bbb-main.blr1.digitaloceanspaces.com/uploads/course/introduction-to-cybersecurity-1720530832069.jpeg",
        institution: "Secure Academy",
        is_trending: "0",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_id: 24,
        title: "Ethical Hacking",
        description:
          "Master ethical hacking techniques to secure systems and networks.",
        category_id: 5,
        rating: 4.8,
        price: 110.0,
        image_url:
          "https://www.tarlogic.com/wp-content/uploads/2022/03/hacking-2.jpg",
        institution: "CyberTech Institute",
        is_trending: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_id: 25,
        title: "Network Security Essentials",
        description: "Understand fundamental concepts of network security.",
        category_id: 5,
        rating: 4.5,
        price: 70.0,
        image_url: "https://i.ebayimg.com/images/g/zOoAAOSw7JNZd3Ei/s-l400.jpg",
        institution: "CyberTech Institute",
        is_trending: "0",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_id: 26,
        title: "Incident Response and Forensics",
        description:
          "Learn how to respond to and investigate cybersecurity incidents.",
        category_id: 5,
        rating: 4.7,
        price: 90.0,
        image_url:
          "https://grcviewpoint.com/wp-content/uploads/2023/05/Digital-Forensics-Combined-with-Incident-Response-A-significant-Trend-in-2023-GRCviewpoint.jpg",
        institution: "Secure Academy",
        is_trending: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_id: 27,
        title: "Azure Fundamentals",
        description: "Learn the basics of Azure cloud platform.",
        category_id: 6,
        rating: 4.6,
        price: 0.0,
        image_url:
          "https://miro.medium.com/v2/resize:fit:600/1*KjpRHQuaF0X0Kcb5lpWY_A.png",
        institution: "Cloud School",
        is_trending: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_id: 28,
        title: "Kubernetes for Developers",
        description:
          "Understand Kubernetes concepts for container orchestration.",
        category_id: 6,
        rating: 4.8,
        price: 80.0,
        image_url:
          "https://miro.medium.com/v2/resize:fit:1000/1*YXNUwnBFw03zsOButXnZnQ.png",
        institution: "Cloud Experts",
        is_trending: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_id: 29,
        title: "Serverless Architecture",
        description: "Learn to build and deploy serverless applications.",
        category_id: 6,
        rating: 4.7,
        price: 0.0,
        image_url:
          "https://www.kofi-group.com/wp-content/uploads/2021/03/shutterstock_1609164064-scaled.jpg",
        institution: "Tech University",
        is_trending: "0",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_id: 30,
        title: "Hybrid Cloud Solutions",
        description: "Master hybrid cloud deployment strategies.",
        category_id: 6,
        rating: 4.9,
        price: 100.0,
        image_url:
          "https://vastitservices.com/wp-content/uploads/2023/06/Hybrid-Cloud-Solution.jpg",
        institution: "Cloud School",
        is_trending: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
    await queryInterface.bulkInsert("badges", [
      {
        name: "Achievement Starter",
        description: "Awarded for starting your learning journey.",
        Image_url: "https://example.com/images/badges/starter.png",
        requirement: "Sign up and complete your profile.",
        created_at: new Date(),
      },
      {
        name: "Knowledge Explorer",
        description: "Given to those who explore 10 different topics.",
        Image_url: "https://example.com/images/badges/explorer.png",
        requirement: "Explore at least 10 topics on the platform.",
        created_at: new Date(),
      },
      {
        name: "Task Master",
        description: "For completing 50 tasks in any course.",
        Image_url: "https://example.com/images/badges/taskmaster.png",
        requirement: "Complete 50 tasks across any courses.",
        created_at: new Date(),
      },
      {
        name: "Collaboration Champion",
        description: "Awarded for engaging in group discussions.",
        Image_url: "https://example.com/images/badges/champion.png",
        requirement: "Participate in at least 5 group discussions.",
        created_at: new Date(),
      },
      {
        name: "Goal Setter",
        description: "For setting and achieving your first learning goal.",
        Image_url: "https://example.com/images/badges/goalsetter.png",
        requirement: "Set and achieve one learning goal.",
        created_at: new Date(),
      },
    ]);
    await queryInterface.bulkInsert("enrollments", [
      {
        student_Id: 3,
        course_Id: 1,
        progress: 25.5, // Float value
        completion_date: null,
        enrolled_at: new Date("2024-11-01T10:00:00Z"),
      },
      {
        student_Id: 4,
        course_Id: 2,
        progress: 75.2, // Float value
        completion_date: new Date("2024-11-25T15:30:00Z"),
        enrolled_at: new Date("2024-11-05T12:00:00Z"),
      },
      {
        student_Id: 5,
        course_Id: 3,
        progress: 100.0, // Float value (completed)
        completion_date: new Date("2024-11-20T09:00:00Z"),
        enrolled_at: new Date("2024-10-15T14:00:00Z"),
      },
      {
        student_Id: 3,
        course_Id: 4,
        progress: 50.75, // Float value
        completion_date: null,
        enrolled_at: new Date("2024-11-10T08:30:00Z"),
      },
      {
        student_Id: 4,
        course_Id: 5,
        progress: 10.0, // Float value
        completion_date: null,
        enrolled_at: new Date("2024-11-15T11:45:00Z"),
      },
    ]);
    await queryInterface.bulkInsert("forums", [
      {
        course_Id: 1,
        title: "Introduction to Programming",
        description:
          "A forum to discuss the basics of programming, share resources, and ask questions.",
        created_at: new Date("2024-11-01T10:00:00Z"),
        updated_at: new Date("2024-11-01T10:00:00Z"),
        deleted_at: null,
      },
      {
        course_Id: 1,
        title: "Advanced JavaScript",
        description:
          "Dive into advanced JavaScript topics, including closures, async/await, and more.",
        created_at: new Date("2024-11-05T12:00:00Z"),
        updated_at: new Date("2024-11-05T12:00:00Z"),
        deleted_at: null,
      },
      {
        course_Id: 2,
        title: "Data Structures and Algorithms",
        description:
          "Discuss algorithms, problem-solving strategies, and best practices for competitive programming.",
        created_at: new Date("2024-10-15T14:00:00Z"),
        updated_at: new Date("2024-10-15T14:00:00Z"),
        deleted_at: null,
      },
      {
        course_Id: 2,
        title: "Introduction to Databases",
        description:
          "A place to ask questions and share resources related to database management and design.",
        created_at: new Date("2024-11-10T08:30:00Z"),
        updated_at: new Date("2024-11-10T08:30:00Z"),
        deleted_at: null,
      },
      {
        course_Id: 3,
        title: "Web Development Basics",
        description:
          "Learn and discuss the fundamentals of building web applications, from HTML to deployment.",
        created_at: new Date("2024-11-20T16:00:00Z"),
        updated_at: new Date("2024-11-20T16:00:00Z"),
        deleted_at: null,
      },
    ]);
    await queryInterface.bulkInsert("ranks", [
      {
        name: "Beginner",
        min_exp_required: 0,
        description: "Level pemula untuk pengguna baru.",
        created_at: new Date("2024-11-01T08:00:00Z"),
      },
      {
        name: "Intermediate",
        min_exp_required: 1000,
        description: "Level menengah untuk pengguna dengan pengalaman sedang.",
        created_at: new Date("2024-11-02T08:00:00Z"),
      },
      {
        name: "Advanced",
        min_exp_required: 2500,
        description: "Level lanjutan untuk pengguna berpengalaman.",
        created_at: new Date("2024-11-03T08:00:00Z"),
      },
      {
        name: "Expert",
        min_exp_required: 5000,
        description: "Level ahli untuk pengguna yang sangat berpengalaman.",
        created_at: new Date("2024-11-04T08:00:00Z"),
      },
      {
        name: "Legendary",
        min_exp_required: 10000,
        description:
          "Level legendaris untuk pengguna dengan pencapaian luar biasa.",
        created_at: new Date("2024-11-05T08:00:00Z"),
      },
    ]);
    await queryInterface.bulkInsert("gamifications", [
      {
        student_Id: 3,
        exp_points: 2500,
        rank_Id: 3,
        created_at: new Date("2024-11-01T09:30:00Z"),
        updated_at: new Date("2024-11-01T09:30:00Z"),
        deleted_at: null,
      },
      {
        student_Id: 4,
        exp_points: 1200,
        rank_Id: 2,
        created_at: new Date("2024-11-02T14:45:00Z"),
        updated_at: new Date("2024-11-02T14:45:00Z"),
        deleted_at: null,
      },
      {
        student_Id: 5,
        exp_points: 800,
        rank_Id: 1,
        created_at: new Date("2024-11-03T16:20:00Z"),
        updated_at: new Date("2024-11-03T16:20:00Z"),
        deleted_at: null,
      },
      {
        student_Id: 4,
        exp_points: 3400,
        rank_Id: 4,
        created_at: new Date("2024-11-04T11:10:00Z"),
        updated_at: new Date("2024-11-04T11:10:00Z"),
        deleted_at: null,
      },
      {
        student_Id: 3,
        exp_points: 150,
        rank_Id: 1,
        created_at: new Date("2024-11-05T13:50:00Z"),
        updated_at: new Date("2024-11-05T13:50:00Z"),
        deleted_at: null,
      },
    ]);
    await queryInterface.bulkInsert("materials", [
      {
        course_id: 1,
        parent_material_id: null,
        title: "Introduction",
        type: "text",
        content: "Selamat datang di kursus ini. Berikut materi pengantar.",
        position: 1,
        status: "done",
      },
      {
        course_id: 1,
        parent_material_id: null,
        title: "Module 1",
        type: "text",
        content: "Topik utama: User Research & Competitive ",
        position: 2,
        status: "done",
      },
      {
        course_id: 1,
        parent_material_id: 1,
        title: "PPT - Competitive Research",
        type: "pdf",
        content:
          "https://drive.google.com/file/d/19x995GD36jHpG7kPjywBm460Mii8w4Gx/view?usp=sharing",
        position: 1,
        status: "done",
      },
      {
        course_id: 1,
        parent_material_id: 2,
        title: "User Research 101",
        type: "pdf",
        content:
          "https://drive.google.com/file/d/19x995GD36jHpG7kPjywBm460Mii8w4Gx/view?usp=sharing",
        position: 1,
        status: "done",
      },
      {
        course_id: 1,
        parent_material_id: 2,
        title: "Competitive Research",
        type: "video",
        content: "https://www.youtube.com/watch?v=yDrQQoZUvMQ&ab_channel=Hike",
        position: 2,
        status: "done",
      },
      {
        course_id: 1,
        parent_material_id: 2,
        title: "Sesi Praktek",
        type: "text",
        content: "Praktek langsung mengenai user research.",
        position: 3,
        status: "done",
      },
      {
        course_id: 2,
        parent_material_id: null,
        title: "Introduction",
        type: "text",
        content: "Selamat datang di kursus ini. Berikut materi pengantar.",
        position: 1,
        status: "done",
      },
      {
        course_id: 2,
        parent_material_id: null,
        title: "Module 1",
        type: "text",
        content: "Topik utama: User Research & Competitive ",
        position: 2,
        status: "done",
      },
      {
        course_id: 2,
        parent_material_id: 1,
        title: "PPT - Competitive Research",
        type: "pdf",
        content:
          "https://drive.google_id/19x995GD36jHpG7kPjywBm460Mii8w4Gx/view?usp=sharing",
        position: 1,
      },
      {
        course_id: 2,
        parent_material_id: 2,
        title: "User Research 101",
        type: "pdf",
        content:
          "https://drive.google.com/file/d/19x995GD36jHpG7kPjywBm460Mii8w4Gx/view?usp=sharing",
        position: 1,
      },
      {
        course_id: 2,
        parent_material_id: 2,
        title: "Competitive Research",
        type: "video",
        content: "https://www.youtube.com/watch?v=yDrQQoZUvMQ&ab_channel=Hike",
        position: 2,
      },
      {
        course_id: 2,
        parent_material_id: 2,
        title: "Sesi Praktek",
        type: "text",
        content: "Praktek langsung mengenai user research.",
        position: 3,
      },
      {
        course_id: 1,
        parent_material_id: null,
        title: "Introduction to Programming",
        type: "quiz",
        content: null,
        position: 2,
        status: "not_started",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
    await queryInterface.bulkInsert("notifications", [
      {
        student_id: 3,
        title: "Welcome to the Course!",
        message:
          "Congratulations on enrolling in the JavaScript Basics course!",
        is_read: false,
        created_at: new Date("2024-11-01T10:00:00Z"),
      },
      {
        student_id: 4,
        title: "New Assignment Available",
        message:
          "A new assignment for Python Advanced is now available. Check it out!",
        is_read: false,
        created_at: new Date("2024-11-02T11:00:00Z"),
      },
      {
        student_id: 3,
        title: "Course Progress Update",
        message:
          "You’ve completed 50% of the JavaScript Basics course. Keep going!",
        is_read: true,
        created_at: new Date("2024-11-03T12:00:00Z"),
      },
      {
        student_id: 4,
        title: "Live Session Reminder",
        message:
          "Don’t forget to join the live session for Data Structures at 3 PM today.",
        is_read: false,
        created_at: new Date("2024-11-04T09:00:00Z"),
      },
      {
        student_id: 5,
        title: "Certificate Available",
        message:
          "Your certificate for Machine Learning Basics is now available for download.",
        is_read: true,
        created_at: new Date("2024-11-05T14:00:00Z"),
      },
    ]);
    await queryInterface.bulkInsert("paymentmethods", [
      {
        name: "Credit Card",
        description: "Payment using Visa, MasterCard, or American Express.",
        is_active: true,
        created_at: new Date("2024-11-01T10:00:00Z"),
      },
      {
        name: "Bank Transfer",
        description: "Direct payment via bank account transfer.",
        is_active: true,
        created_at: new Date("2024-11-02T11:00:00Z"),
      },
      {
        name: "E-Wallet",
        description: "Use popular e-wallets like PayPal, OVO, or GoPay.",
        is_active: true,
        created_at: new Date("2024-11-03T12:00:00Z"),
      },
      {
        name: "Cash on Delivery",
        description: "Pay with cash when the product is delivered.",
        is_active: false,
        created_at: new Date("2024-11-04T09:00:00Z"),
      },
      {
        name: "Cryptocurrency",
        description: "Pay using Bitcoin, Ethereum, or other cryptocurrencies.",
        is_active: true,
        created_at: new Date("2024-11-05T14:00:00Z"),
      },
    ]);
    await queryInterface.bulkInsert("posts", [
      {
        forum_id: 1,
        user_id: 1,
        content:
          "I found this course really helpful, but I am stuck on lesson 3.",
        created_at: new Date("2024-11-01T10:30:00Z"),
        updated_at: new Date("2024-11-01T10:30:00Z"),
        deleted_at: null,
      },
      {
        forum_id: 2,
        user_id: 2,
        content:
          "Have you tried reviewing the supplemental material? It helped me a lot.",
        created_at: new Date("2024-11-01T11:00:00Z"),
        updated_at: new Date("2024-11-01T11:00:00Z"),
        deleted_at: null,
      },
      {
        forum_id: 3,
        user_id: 3,
        content: "Can anyone recommend other resources for advanced topics?",
        created_at: new Date("2024-11-02T09:45:00Z"),
        updated_at: new Date("2024-11-02T09:45:00Z"),
        deleted_at: null,
      },
      {
        forum_id: 2,
        user_id: 4,
        content:
          "I suggest checking out the instructor’s blog; it has great content!",
        created_at: new Date("2024-11-02T10:15:00Z"),
        updated_at: new Date("2024-11-02T10:15:00Z"),
        deleted_at: null,
      },
      {
        forum_id: 3,
        user_id: 5,
        content: "When will the next module be released?",
        created_at: new Date("2024-11-03T14:20:00Z"),
        updated_at: new Date("2024-11-03T14:20:00Z"),
        deleted_at: null,
      },
    ]);

    await queryInterface.bulkInsert("courseorders", [
      {
        student_id: 3,
        course_id: 1,
        order_number: "ORD123456",
        total_price: 500000,
        payment_method_id: 1,
        payment_status: "Completed",
        payment_proof: "https://example.com/payment-proof/ORD123456.png",
        payment_date: new Date("2024-11-28 10:00:00"),
        expired_at: new Date("2024-11-30 23:59:59"),
        notes: "First payment for advanced course.",
        order_date: new Date("2024-11-28 09:30:00"),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        student_id: 4,
        course_id: 2,
        order_number: "ORD123457",
        total_price: 300000,
        payment_method_id: 2,
        payment_status: "Pending",
        payment_proof: null,
        payment_date: null,
        expired_at: new Date("2024-12-01 23:59:59"),
        notes: "Waiting for confirmation.",
        order_date: new Date("2024-11-29 08:45:00"),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        student_id: 5,
        course_id: 3,
        order_number: "ORD123458",
        total_price: 400000,
        payment_method_id: 3,
        payment_status: "Failed",
        payment_proof: null,
        payment_date: null,
        expired_at: new Date("2024-11-30 23:59:59"),
        notes: "Payment failed due to insufficient funds.",
        order_date: new Date("2024-11-28 11:15:00"),
        updated_at: new Date(),
        deleted_at: null,
      },
    ]);
    await queryInterface.bulkInsert("studentbadges", [
      {
        student_id: 3,
        badge_id: 4,
        earned_at: new Date("2024-11-15 14:00:00"),
      },
      {
        student_id: 4,
        badge_id: 5,
        earned_at: new Date("2024-11-20 10:30:00"),
      },
      {
        student_id: 5,
        badge_id: 3,
        earned_at: new Date("2024-11-22 16:45:00"),
      },
      {
        student_id: 3,
        badge_id: 2,
        earned_at: new Date("2024-11-28 09:15:00"),
      },
      {
        student_id: 4,
        badge_id: 1,
        earned_at: new Date("2024-11-29 08:00:00"),
      },
    ]);
    await queryInterface.bulkInsert("mentorships", [
      {
        mentor_id: 2,
        mentee_id: 5,
        status: "active",
        created_at: new Date("2024-11-01 09:00:00"),
        updated_at: new Date("2024-11-20 09:00:00"),
        deleted_at: null,
      },
      {
        mentor_id: 2,
        mentee_id: 4,
        status: "pending",
        created_at: new Date("2024-11-15 10:00:00"),
        updated_at: new Date("2024-11-15 10:00:00"),
        deleted_at: null,
      },
      {
        mentor_id: 2,
        mentee_id: 3,
        status: "completed",
        created_at: new Date("2024-10-20 08:30:00"),
        updated_at: new Date("2024-11-18 15:45:00"),
        deleted_at: null,
      },
    ]);
    await queryInterface.bulkInsert("invoices", [
      {
        order_id: 1,
        invoice_number: "INV-20241101-001",
        subtotal: 500000,
        discount: 50000,
        tax: 45000,
        total: 495000,
        created_at: new Date("2024-11-01 10:00:00"),
      },
      {
        order_id: 2,
        invoice_number: "INV-20241101-002",
        subtotal: 300000,
        discount: 30000,
        tax: 27000,
        total: 297000,
        created_at: new Date("2024-11-02 14:30:00"),
      },
      {
        order_id: 3,
        invoice_number: "INV-20241101-003",
        subtotal: 750000,
        discount: 75000,
        tax: 67500,
        total: 742500,
        created_at: new Date("2024-11-03 09:15:00"),
      },
    ]);
    await queryInterface.bulkInsert("assignments", [
      {
        course_id: 1, // Sesuaikan dengan ID course yang ada
        title: "Introduction to JavaScript",
        description: "Complete the basic JavaScript exercises.",
        due_date: new Date("2024-12-10T23:59:59"),
        created_at: new Date(),
      },
      {
        course_id: 2,
        title: "Understanding SQL Joins",
        description: "Write queries to demonstrate different types of joins.",
        due_date: new Date("2024-12-15T23:59:59"),
        created_at: new Date(),
      },
      {
        course_id: 3,
        title: "Building a RESTful API",
        description: "Create a RESTful API using Node.js and Express.",
        due_date: new Date("2024-12-20T23:59:59"),
        created_at: new Date(),
      },
      {
        course_id: 4,
        title: "Data Visualization with Python",
        description:
          "Use Matplotlib and Seaborn to create visualizations from data.",
        due_date: new Date("2024-12-25T23:59:59"),
        created_at: new Date(),
      },
      {
        course_id: 5,
        title: "Network Security Fundamentals",
        description:
          "Learn about common network security threats and defenses.",
        due_date: new Date("2024-12-30T23:59:59"),
        created_at: new Date(),
      },
    ]);
    await queryInterface.bulkInsert("assignmentsubmissions", [
      {
        assignment_id: 2,
        student_id: 4,
        submission_content: "JavaScript exercise solutions.",
        status: "graded",
        grade: 85.5,
        feedback: "Good job! Improve your variable naming.",
        submitted_at: new Date("2024-12-01T10:00:00"),
        graded_at: new Date("2024-12-02T15:30:00"),
      },
      {
        assignment_id: 2,
        student_id: 5,
        submission_content: "SQL join examples.",
        status: "pending",
        grade: null,
        feedback: null,
        submitted_at: new Date("2024-12-03T14:00:00"),
        graded_at: null,
      },
    ]);
    await queryInterface.bulkInsert("refunds", [
      {
        order_id: 3,
        reason: "Product was defective.",
        refund_amount: 100.0,
        status: "completed",
        processed_at: new Date("2024-11-02T12:00:00Z"),
        created_at: new Date("2024-11-01T10:00:00Z"),
        updated_at: new Date("2024-11-02T12:00:00Z"),
      },
      {
        order_id: 2,
        reason: "Late delivery.",
        refund_amount: 20.0,
        status: "approved",
        processed_at: new Date("2024-11-05T14:00:00Z"),
        created_at: new Date("2024-11-04T16:00:00Z"),
        updated_at: new Date("2024-11-05T14:00:00Z"),
      },
      {
        order_id: 1,
        reason: "Duplicate order.",
        refund_amount: 30.0,
        status: "completed",
        processed_at: new Date("2024-11-06T10:00:00Z"),
        created_at: new Date("2024-11-05T09:00:00Z"),
        updated_at: new Date("2024-11-06T10:00:00Z"),
      },
    ]);
    await queryInterface.bulkInsert("stripe_transactions", [
      {
        id: 1,
        user_id: 3,
        name: "Sarah Student",
        phone: "+628938938938",
        session_id: "cs_test_b1c4f9b5-6e7c-4d2b-8e2d-6b5a3e3f8b8d",
        amount: 500000,
        quantity: 2,
        status: "Success",
        created_at: new Date("2024-11-01T10:00:00Z"),
        updated_at: new Date("2024-11-01T10:00:00Z"),
        deleted_at: null,
      },
      {
        id: 2,
        user_id: 4,
        name: "Mike Mentor",
        phone: "+628938938938",
        session_id: "cs_test_1a2b3c4d-5e6f-7a8b-9c0d1e2f3a4b",
        amount: 300000,
        quantity: 1,
        status: "Success",
        created_at: new Date("2024-11-02T11:00:00Z"),
        updated_at: new Date("2024-11-02T11:00:00Z"),
        deleted_at: null,
      },
      {
        id: 3,
        user_id: 5,
        name: "Clara Counselor",
        phone: "+628938938938",
        session_id: "cs_test_5a6b7c8d-9e0f-1a2b-3c4d5e6f7a8b",
        amount: 400000,
        quantity: 1,
        status: "Failed",
        created_at: new Date("2024-11-03T12:00:00Z"),
        updated_at: new Date("2024-11-03T12:00:00Z"),
        deleted_at: null,
      },
    ]);
    await queryInterface.bulkInsert("VideoContents", [
      {
        id: 1,
        title: "Crafting a Resume That Stands Out",
        description:
          "Learn how to craft a resume that stands out from the crowd and attracts the attention of recruiters.",
        url: "https://youtu.be/MqXjqOy-TA8?si=fWR5tr01IJBouZ6Z",
        tags: JSON.stringify(["resume", "career", "job search"]),
        thumbnail_url:
          "https://mycvcreator.com/administrator/postimages/66c5c34fa02068.66439125.jpg", // Tambahkan thumbnail
        date: new Date("2024-12-11"), // Tambahkan tanggal
        duration: "29min",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        title: "Digital Portfolio Best Practices",
        description:
          "Tips and best practices for creating a digital portfolio that showcases your work effectively.",
        url: "https://youtu.be/0VGc7jrD9zo?si=t_No1fdcX6r-iIa_",
        tags: JSON.stringify(["portfolio", "UI/UX", "design"]),
        thumbnail_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjhWtiGZz2aW08oqoY7WD7MQC25UKl-sa0VQ&s", // Tambahkan thumbnail
        date: new Date("2024-12-10"), // Tambahkan tanggal
        duration: "9min",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        title: "LinkedIn Profile Hacks",
        description:
          "Maximize the potential of your LinkedIn profile to get noticed by recruiters and hiring managers.",
        url: "https://youtu.be/B4OhuzwLc9o?si=U253PeoAGygUJRZd",
        tags: JSON.stringify(["linkedin", "career", "networking"]),
        thumbnail_url:
          "https://www.bleepstatic.com/content/hl-images/2023/08/15/hacker-holding-linkedin.jpg", // Tambahkan thumbnail
        date: new Date("2024-12-09"), // Tambahkan tanggal
        duration: "8min",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        title: "Elevate Your Personal Brand",
        description:
          "Learn how to elevate your personal brand to gain more visibility and attract career opportunities.",
        url: "https://youtu.be/ozMCb0wOnMU?si=ZVgR5Wy4faQvNTJv",
        tags: JSON.stringify(["branding", "career", "personal development"]),
        thumbnail_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6l74Qeqb4XanhCUndv-dWgCe0JFPd4aQ0Tw&s", // Tambahkan thumbnail
        date: new Date("2024-12-08"), // Tambahkan tanggal
        duration: "6min",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        title: "Acing Behavioral Interviews",
        description:
          "Master the art of answering behavioral interview questions to impress employers.",
        url: "https://youtu.be/gZ2354BH0a0?si=a_nDev-9QGrTCJ1o",
        tags: JSON.stringify(["interview", "career", "job tips"]),
        thumbnail_url:
          "https://img.freepik.com/free-photo/man-being-interviewed-indoors-by-journalist_23-2149029359.jpg", // Tambahkan thumbnail
        date: new Date("2024-12-07"), // Tambahkan tanggal
        duration: "7min",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 6,
        title: "Ace Your Next Job Interview",
        description:
          "Get prepared to ace your next job interview with tips and strategies from industry experts.",
        url: "https://youtu.be/mmQcX6HpCGs?si=3wGAXGPX-gq984tB",
        tags: JSON.stringify(["interview", "career", "job search"]),
        thumbnail_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUO7WSJvOIEsFpMrno_JR__Dq3OFIJUzrivQ&s", // Tambahkan thumbnail
        date: new Date("2024-12-06"), // Tambahkan tanggal
        duration: "10min",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("Articles", [
      {
        id: 1,
        title: "How to Create a Winning Resume",
        date: new Date("2024-11-21"),
        category: "Resume Writing",
        description:
          "Tips and steps to create a resume that catches the recruiter's attention.",
        author_name: "John Doe", // Tambahkan author_name
        author_image_url:
          "https://www.hipwee.com/wp-content/uploads/2015/04/business-855-750x565.png", // Tambahkan author_image_url
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        id: 2,
        title: "Interview Preparation 101",
        date: new Date("2024-11-20"),
        category: "Interview Preparation",
        description:
          "Simulations and job interview guides to boost confidence.",
        author_name: "Jane Smith", // Tambahkan author_name
        author_image_url:
          "https://media.licdn.com/dms/image/v2/C4E12AQEmuCIP3RulUg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1560004190905?e=2147483647&v=beta&t=ggdfWVXNL6dFFbmoMWgWDZe8GyqQoZTxWOZUO9YJqWI", // Tambahkan author_image_url
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        id: 3,
        title: "Mastering LinkedIn Optimization",
        date: new Date("2024-11-19"),
        category: "Personal Branding",
        description:
          "Guide to maximizing your LinkedIn profile to be more professional and effective.",
        author_name: "Emily Brown", // Tambahkan author_name
        author_image_url:
          "https://media.licdn.com/dms/image/v2/D4D12AQEXfCs0v3rvjQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1730043613906?e=2147483647&v=beta&t=NUn7FaOYerg1YezczkAM9S1DsgrnpLtXaHlHpz2lp-E", // Tambahkan author_image_url
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("article_authors", [
      {
        id: 1,
        author_name: "John Doe", // Nama penulis
        author_image_url:
          "https://www.hipwee.com/wp-content/uploads/2015/04/business-855-750x565.png", // Gambar penulis
        title: "How to Create a Winning Resume",
        article_id: 1, // ID artikel yang terkait
        description_new:
          "John Doe is a renowned resume writing expert who has helped countless job seekers secure their dream roles. With over 10 years of experience, John specializes in crafting resumes that not only highlight achievements but also resonate with hiring managers. He is known for his attention to detail and his ability to tailor resumes for specific industries and job roles.", // Deskripsi panjang
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        id: 2,
        author_name: "Jane Smith", // Nama penulis
        author_image_url:
          "https://media.licdn.com/dms/image/v2/C4E12AQEmuCIP3RulUg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1560004190905?e=2147483647&v=beta&t=ggdfWVXNL6dFFbmoMWgWDZe8GyqQoZTxWOZUO9YJqWI", // Gambar penulis
        title: "Interview Preparation 101",
        article_id: 2, // ID artikel yang terkait
        description_new:
          "Jane Smith has spent over 15 years helping professionals prepare for job interviews. With a background in human resources, Jane offers insights into common interview questions, tips for answering them confidently, and strategies to help job seekers make a lasting impression. She is passionate about helping people boost their interview skills and secure job offers.", // Deskripsi panjang
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        id: 3,
        author_name: "Emily Brown", // Nama penulis
        author_image_url:
          "https://media.licdn.com/dms/image/v2/D4D12AQEXfCs0v3rvjQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1730043613906?e=2147483647&v=beta&t=NUn7FaOYerg1YezczkAM9S1DsgrnpLtXaHlHpz2lp-E", // Gambar penulis
        title: "Mastering LinkedIn Optimization",
        article_id: 3, // ID artikel yang terkait
        description_new:
          "Emily Brown is a personal branding strategist who specializes in LinkedIn optimization. With a keen understanding of how recruiters search for candidates, Emily helps professionals create LinkedIn profiles that stand out. She advises on profile pictures, headline writing, and crafting compelling summaries to attract the attention of hiring managers and recruiters.", // Deskripsi panjang
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
    await queryInterface.bulkInsert("userprofiles", [
      {
        user_id: 3,
        username: "sarahstudent",
        Image_url:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        date_of_birth: "2002-09-20",
        gender: "male",
        phone_number: "8938938938",
        city: "Jakarta",
        education: "S1 Teknik Informatika",
        company: "PT. ABC",
        role: "student",
        bio: "A passionate learner with a love for technology and coding.",
        linkedin_url: "https://www.linkedin.com/in/sarahstudent",
        youtube_url: "https://www.youtube.com/sarahstudent",
        instagram_url: "https://www.instagram.com/sarahstudent",
        facebook_url: "https://facebook.com/sarahstudent",
        line_url: "https://line.me/ti/p/sarahstudent",
        twitter_url: "https://twitter.com/sarahstudent",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 4,
        username: "mikementor",
        Image_url:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        date_of_birth: "1990-05-15",
        gender: "male",
        phone_number: "8938938938",
        city: "Bandung",
        education: "S2 Computer Science",
        company: "PT. XYZ",
        role: "mentor",
        bio: "An experienced mentor with a passion for guiding aspiring developers.",
        linkedin_url: "https://www.linkedin.com/in/mikementor",
        youtube_url: "https://www.youtube.com/mikementor",
        instagram_url: "https://www.instagram.com/mikementor",
        facebook_url: "https://facebook.com/mikementor",
        line_url: "https://line.me/ti/p/mikementor",
        twitter_url: "https://twitter.com/mikementor",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 5,
        username: "claracounselor",
        Image_url:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        date_of_birth: "1985-12-10",
        gender: "female",
        phone_number: "8938938938",
        city: "Surabaya",
        education: "S1 Psychology",
        company: "PT. DEF",
        role: "counselor",
        bio: "A counselor dedicated to helping individuals navigate their career paths.",
        linkedin_url: "https://www.linkedin.com/in/claracounselor",
        youtube_url: "https://www.youtube.com/claracounselor",
        instagram_url: "https://www.instagram.com/claracounselor",
        facebook_url: "https://facebook.com/claracounselor",
        line_url: "https://line.me/ti/p/claracounselor",
        twitter_url: "https://twitter.com/claracounselor",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
    await queryInterface.bulkInsert("questions", [
      {
        material_id: 1,
        question_text: "What is the result of 3 + 6 in JavaScript?",
        position: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 1,
        question_text: "Which method is used to parse a JSON string in JavaScript?",
        position: 2,
        created_at: new Date(),
        updated_at: new Date
      },
      {
        material_id: 1,
        question_text: "What is the result of 3 * 3 in JavaScript?",
        position: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 1,
        question_text: "Which method is used to parse a JSON string in JavaScript?",
        position: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 1,
        question_text: "What is the correct syntax for creating a function in JavaScript?",
        position: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 1,
        question_text: "What is the value of `typeof null` in JavaScript?",
        position: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 1,
        question_text: "Which symbol is used for comments in JavaScript?",
        position: 7,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 1,
        question_text: "What will `console.log(0.1 + 0.2)` output in JavaScript?",
        position: 8,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 1,
        question_text: "Which function is used to display an alert box in JavaScript?",
        position: 9,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 1,
        question_text: "What is the result of `NaN === NaN` in JavaScript?",
        position: 10,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]);
    await queryInterface.bulkInsert("options", [
      { question_id: 1, option_text: "3", is_correct: false },
      { question_id: 1, option_text: "6", is_correct: false },
      { question_id: 1, option_text: "9", is_correct: true },
      { question_id: 1, option_text: "12", is_correct: false },

      { question_id: 2, option_text: "JSON.parse()", is_correct: true },
      { question_id: 2, option_text: "JSON.stringify()", is_correct: false },
      { question_id: 2, option_text: "parseJSON()", is_correct: false },
      { question_id: 2, option_text: "stringifyJSON()", is_correct: false },

      // Options for Question 3
      { question_id: 3, option_text: "6", is_correct: false },
      { question_id: 3, option_text: "9", is_correct: true },
      { question_id: 3, option_text: "12", is_correct: false },
      { question_id: 3, option_text: "15", is_correct: false },

      // Options for Question 4
      { question_id: 4, option_text: "JSON.parse()", is_correct: true },
      { question_id: 4, option_text: "JSON.stringify()", is_correct: false },
      { question_id: 4, option_text: "parseJSON()", is_correct: false },
      { question_id: 4, option_text: "stringifyJSON()", is_correct: false },

      // Options for Question 5
      { question_id: 5, option_text: "function = myFunction() {}", is_correct: false },
      { question_id: 5, option_text: "function myFunction() {}", is_correct: true },
      { question_id: 5, option_text: "let myFunction() {}", is_correct: false },
      { question_id: 5, option_text: "def myFunction() {}", is_correct: false },

      // Options for Question 6
      { question_id: 6, option_text: "object", is_correct: true },
      { question_id: 6, option_text: "null", is_correct: false },
      { question_id: 6, option_text: "undefined", is_correct: false },
      { question_id: 6, option_text: "string", is_correct: false },

      // Options for Question 7
      { question_id: 7, option_text: "// or /* */", is_correct: true },
      { question_id: 7, option_text: "# or ##", is_correct: false },
      { question_id: 7, option_text: "<!-- -->", is_correct: false },
      { question_id: 7, option_text: "** or ***", is_correct: false },

      // Options for Question 8
      { question_id: 8, option_text: "0.3", is_correct: false },
      { question_id: 8, option_text: "0.30000000000000004", is_correct: true },
      { question_id: 8, option_text: "0.3000000000000004", is_correct: false },
      { question_id: 8, option_text: "NaN", is_correct: false },

      // Options for Question 9
      { question_id: 9, option_text: "alert()", is_correct: true },
      { question_id: 9, option_text: "prompt()", is_correct: false },
      { question_id: 9, option_text: "confirm()", is_correct: false },
      { question_id: 9, option_text: "message()", is_correct: false },

      // Options for Question 10
      { question_id: 10, option_text: "true", is_correct: false },
      { question_id: 10, option_text: "false", is_correct: true },
      { question_id: 10, option_text: "undefined", is_correct: false },
      { question_id: 10, option_text: "NaN", is_correct: false },
    ]);
    await queryInterface.bulkInsert("quiz_attempts", [
      {
        user_id: 1, // ID pengguna
        material_id: 1, // ID dari material quiz
        score: 80,
        completed_at: new Date(),
        created_at: new Date(),
      },
    ]);
    await queryInterface.bulkInsert("attempt_answers", [
      { attempt_id: 1, question_id: 3, option_id: 2, is_correct: true },
      { attempt_id: 1, question_id: 4, option_id: 1, is_correct: true },
      { attempt_id: 1, question_id: 5, option_id: 2, is_correct: true },
      { attempt_id: 1, question_id: 6, option_id: 1, is_correct: true },
      { attempt_id: 1, question_id: 7, option_id: 1, is_correct: true },
      { attempt_id: 1, question_id: 8, option_id: 2, is_correct: true },
      { attempt_id: 1, question_id: 9, option_id: 1, is_correct: true },
      { attempt_id: 1, question_id: 10, option_id: 2, is_correct: true },
    ]);

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(
      "users",
      {
        email: {
          [Sequelize.Op.in]: ["johndoe@gmail.com", "janedoe@gmail.com"],
        },
      },
      {}
    );
  },
};