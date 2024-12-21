const headersMiddleware = (req, res, next) => {
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; " +
    "script-src 'self' https://cdnjs.cloudflare.com https://fonts.googleapis.com https://www.youtube.com; " +  // Allow YouTube scripts
    "style-src 'self' https://cdnjs.cloudflare.com https://fonts.googleapis.com; " +
    "font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com data:; " +  // Allow fonts from data: and trusted sources
    "img-src 'self' data: https: https://www.youtube.com; " +  // Allow images from YouTube (thumbnails)
    "connect-src 'self' https://pintura.decadev.tech/; " +  // Add your backend API URL here
    "frame-src 'self' https://www.youtube.com https://drive.google.com https://accounts.google.com; " +  // Allow embedding YouTube, Google Drive, and Google Accounts
    "frame-ancestors 'self' https://drive.google.com https://accounts.google.com;"  // Allow specific origins
  );
  res.setHeader('X-Frame-Options', 'ALLOW-FROM https://drive.google.com'); // Allow framing from Google Drive
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
};

module.exports = headersMiddleware;
