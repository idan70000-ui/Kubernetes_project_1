const express = require('express');
const os = require('os');

const app = express();
const PORT = 3000;

const fortunes = [
  "Kubernetes אינו כלי — הוא דרך חשיבה",
  "פוד שנפל הוא פוד שלמד",
  "שינוי סקייל הוא האמנות של לדעת מתי להוסיף",
  "כל קונטיינר הוא עולם קטן בפני עצמו",
  "עדכון מתגלגל — כי השבתה אינה אופציה",
  "שירות הוא הגשר בין הנראה לנסתר",
  "רפליקה אחת היא נקודת כשל יחידה",
  "המערכת הטובה ביותר היא זו שמחלימה לבד",
  "תווית קטנה — השפעה גדולה",
  "בענן אין שרתים, יש רק פודים",
  "נצפות אינה אופציה בסביבת ייצור",
  "DevOps אינו תפקיד — הוא תרבות"
];

app.get('/api/fortune', (req, res) => {
  const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  res.json({
    fortune,
    pod: os.hostname(),
    version: process.env.APP_VERSION || 'unknown'
  });
});

app.listen(PORT, () => {
  console.log(`Fortune API running on port ${PORT}`);
});
