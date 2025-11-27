import express from 'express';
import { createServer as createViteServer } from 'vite';

const app = express();
const PORT = 5000;

async function startServer() {
  const vite = await createViteServer({
    server: { 
      middlewareMode: true,
      allowedHosts: true,
      hmr: {
        clientPort: 443,
      },
    },
    appType: 'spa',
  });

  app.use(vite.middlewares);

  app.listen(PORT, '0.0.0.0', () => {
    console.log('\n✅ TribeX Group website is running!');
    console.log(`   Local:   http://localhost:${PORT}/`);
    console.log(`   Network: http://0.0.0.0:${PORT}/\n`);
    console.log('   Hot reload enabled - changes appear instantly!\n');
  });
}

startServer();
