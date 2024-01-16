// generateQRs.js
const qr = require('qrcode');
const fs = require('fs');
const path = require('path');

// Number of QR codes to generate
const numberOfCodes = 10;

// Output directory for QR codes
const outputDirectory = './qrcodes';

// Ensure the output directory exists
if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory);
}

// Function to generate a QR code and save it to a file
const generateQRCode = async (data, filename) => {
  try {
    await qr.toFile(path.join(outputDirectory, filename), data);
    console.log(`QR code generated successfully: ${filename}`);
  } catch (error) {
    console.error(`Error generating QR code: ${error}`);
  }
};

// Generate QR codes in a loop
for (let i = 1; i <= numberOfCodes; i++) {
  const data = `https://drive.google.com/file/d/1tRrbigyd6TXI9IR_Lom67dkZVYVq6FjB/view`; // replace this with your website. 
  const filename = `qrcode${i}.png`;
  generateQRCode(data, filename);
}
