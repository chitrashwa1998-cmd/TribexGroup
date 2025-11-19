import express from 'express';
import path from 'path';

const app = express();
const PORT = 5000;

const publicDir = path.resolve(process.cwd(), 'dist/public');

app.use(express.static(publicDir));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log('\n✅ TribeX Group website is running!');
  console.log(`   Local:   http://localhost:${PORT}/`);
  console.log(`   Network: http://0.0.0.0:${PORT}/\n`);
});
