import { createServer } from 'vite';
import path from 'path';

async function startServer() {
  try {
    const server = await createServer({
      configFile: path.resolve(process.cwd(), 'vite.config.ts'),
      server: {
        host: '0.0.0.0',
        port: 5000,
        strictPort: true,
        hmr: {
          clientPort: 5000,
        },
      },
    });

    await server.listen();
    
    console.log('\n✅ Vite server started successfully!');
    server.printUrls();
  } catch (error) {
    console.error('Failed to start Vite server:', error);
    process.exit(1);
  }
}

startServer();
