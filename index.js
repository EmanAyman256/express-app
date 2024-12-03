const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors({
    origin: '*', // Allow all origins. You can specify your Angular app's URL for better security.
    methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH'],
}));

app.use('/api', createProxyMiddleware({
    target: 'https://sd-v6.cfapps.us10-001.hana.ondemand.com',
    changeOrigin: true,
    pathRewrite: { '^/api': '' }
}));
// app.use('/auth', createProxyMiddleware({
//     target: 'https://ajwgvqm4q.trial-accounts.ondemand.com/oauth2/token',
//     changeOrigin: true,
//     pathRewrite: { '^/auth': '' }
// }));




app.listen(PORT, () => {
    console.log(`Proxy server is running on http://localhost:${PORT}`);
});
