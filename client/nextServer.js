const express = require('express');
const next = require('next');
const { createProxyMiddleware } = require('http-proxy-middleware');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    const proxyRegister = createProxyMiddleware('/api/register', {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
    });

    const proxyLogin = createProxyMiddleware('/api/login', {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
    });

    const proxyVerifyToken = createProxyMiddleware('/api/verifyToken', {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
    });

    const proxyLogout = createProxyMiddleware('/api/logout', {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
    });

    server.use(proxyRegister);
    server.use(proxyLogin);
    server.use(proxyVerifyToken);
    server.use(proxyLogout);

    server.get('/', (req, res) => {
        return app.render(req, res, '/home', req.query);
    });

    server.all('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});
