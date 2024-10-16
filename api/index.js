const express = require('express');
const router = express.Router();

// Rota para exibir a documentação da API
router.get('/', (req, res) => {
    const html = `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Documentação da API</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 20px;
                    padding: 20px;
                    background-color: #f4f4f4;
                }
                h1 {
                    color: #333;
                }
                h2 {
                    color: #666;
                }
                pre {
                    background: #eee;
                    padding: 10px;
                    border-radius: 5px;
                }
                code {
                    font-family: monospace;
                }
                .endpoint {
                    margin-bottom: 20px;
                    border: 1px solid #ccc;
                    padding: 10px;
                    border-radius: 5px;
                }
            </style>
        </head>
        <body>
            <h1>API de envio de mensagens via Telegram!</h1>
            <h2>Desenvolvida por fabiomatys!</h2>
            <h2>Endpoints</h2>

            <div class="endpoint">
                <h3>/txt</h3>
                <p><strong>Método:</strong> GET</p>
                <p><strong>Descrição:</strong> Envia uma mensagem de texto para o chat do Telegram.</p>
                <h4>Parâmetros de consulta:</h4>
                <ul>
                    <li><code>token</code>: Token de acesso (obrigatório)</li>
                    <li><code>message</code>: Texto da mensagem a ser enviada (obrigatório)</li>
                </ul>
                <h4>Exemplo:</h4>
                <pre>GET /txt?token=[seutoken]&message=Olá%20mundo</pre>
            </div>

            <div class="endpoint">
                <h3>/img</h3>
                <p><strong>Método:</strong> GET</p>
                <p><strong>Descrição:</strong> Envia uma imagem e uma legenda para o chat do Telegram.</p>
                <h4>Parâmetros de consulta:</h4>
                <ul>
                    <li><code>token</code>: Token de acesso (obrigatório)</li>
                    <li><code>image_url</code>: URL da imagem a ser enviada (obrigatório)</li>
                    <li><code>caption</code>: Texto da legenda da imagem (obrigatório)</li>
                </ul>
                <h4>Exemplo:</h4>
                <pre>GET /img?token=[seutoken]&image_url=https://link-da-imagem.com/foto.jpg&caption=Minha+legenda</pre>
            </div>

            <h2>Variáveis de Ambiente</h2>
            <ul>
                <li><code>TELEGRAM_BOT_TOKEN</code>: Token de autenticação do seu bot do Telegram. Fornecido pelo BotFather.</li>
                <pre>TELEGRAM_BOT_TOKEN=123456789:ABCDEFGHIJKLMNO_PQRSTUVWXYZ</pre>
                
                <li><code>MY_CHATID</code>: ID do chat onde as mensagens serão enviadas.</li>
                <pre>MY_CHATID=987654321</pre>
                
                <li><code>TOKEN</code>: Um token personalizado para autorizar o uso da API.</li>
                <pre>TOKEN=AbCd123</pre>
            </ul>

            <h2>Notas</h2>
            <p>Certifique-se de incluir o token de acesso em cada requisição e de configurar as variáveis de ambiente corretamente.</p>
        </body>
        </html>
    `;

    res.status(200).send(html);
});

module.exports = router;
