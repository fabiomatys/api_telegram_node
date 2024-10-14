const express = require('express');
const axios = require('axios');
require('dotenv').config(); // Carregar variáveis do .env

const app = express();

// Substitua pelo seu token do bot do Telegram
const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_TOKEN}`;
const MY_CHAT = process.env.MY_CHATID;
const VALID_TOKEN = process.env.MY_VALID_TOKEN;


// Rota para enviar imagem via Telegram (usando GET)
app.get('/img', async (req, res) => {
    const {
        token,
        image_url, // URL da imagem
        caption // Legenda da imagem
    } = req.query;

    // Verifica token
    if (token !== VALID_TOKEN) {
        return res.status(403).json({
            success: false,
            message: 'Acesso negado. Token inválido.'
        });
    }

    // Verificar se os parâmetros necessários foram fornecidos
    if (!image_url || !caption) {
        console.log('Requisição recebida sem os parâmetros necessários');
        return res.status(400).json({
            error: 'Os parâmetros image_url e caption são obrigatórios',
        });
    }

    try {
        // Enviar a imagem via Telegram
        const response = await axios.get(`${TELEGRAM_API_URL}/sendPhoto`, {
            params: {
                chat_id: MY_CHAT,
                photo: image_url, // URL da imagem a ser enviada
                caption: caption // Legenda da imagem com contador
            }
        });

        console.log(`Imagem enviada: ${image_url} | Legenda: ${caption} | Para: ${MY_CHAT}`);
        return res.status(200).json({
            success: true,
            result: response.data,
        });
    } catch (error) {
        console.log(`Erro ao enviar imagem: ${image_url} | Para: ${MY_CHAT}`);
        return res.status(500).json({
            success: false,
            error: error.message,
        });
    }
});

// Exportar o aplicativo para que a Vercel o use como uma função serverless
module.exports = app;