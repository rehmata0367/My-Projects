import qrcode from 'qrcode';
import fs from 'fs';
import path from 'path';

// 🖊️ Customize these two values each time you run
const text = 'upi://pay?pa=rehmata0367-1@okhdfcbank&pn=Rehmat%20Ali&am=1&cu=INR'; // What to encode
const baseName = 'Payment QRCode'; // Your custom file name (short and clear)

// 📅 Timestamp to keep each file unique
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const fileName = `${baseName}-${timestamp}.png`;

// 📁 Folder to store QR codes
const folder = './qrcodes';
const fullPath = path.join(folder, fileName);

// 🛠 Ensure the folder exists
if (!fs.existsSync(folder)) {
  fs.mkdirSync(folder);
}

// 🧾 Generate and save the QR code
qrcode.toFile(fullPath, text, (err) => {
  if (err) {
    console.error('❌ Error generating QR code:', err);
  } else {
    console.log(`✅ QR code saved as: ${fullPath}`);
  }
});
