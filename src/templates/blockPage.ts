export const createBlockPage = () => `
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Site Bloqueado - Proteção Contra Jogos de Azar</title>
    <style>${require('../styles/blockPage').blockPageStyles}</style>
  </head>
  <body>
    <div class="container">
      <div class="warning-icon">🛑</div>
      <h1>Acesso Bloqueado</h1>
      
      <div class="message">
        Este site foi bloqueado pelo Casino Blocker para sua proteção
        nos ajude com um pix ao inves de apostar.
      </div>

      <div class="warning-box">
        <div class="warning-title">
          <span>⚠️</span>
          <span>Alerta de Proteção</span>
        </div>
        <div class="warning-text">
          <p>Sites de apostas e jogos de azar podem causar:</p>
          <p>• Dependência psicológica severa<br>
             • Problemas financeiros graves<br>
             • Impactos negativos na vida familiar<br>
             • Ansiedade e depressão</p>
          <p>Proteja seu futuro e bem-estar. Não arrisque suas economias em apostas online.</p>
        </div>
      </div>

      <div class="help-section">
        <div class="help-title">Precisa de Ajuda?</div>
        <div class="help-contact">
          <p>CVV - Centro de Valorização da Vida</p>
          <p><strong>Ligue 188 (24 horas)</strong></p>
          <p>www.cvv.org.br</p>
        </div>
      </div>

      <div class="pix-info">
        <div class="pix-title">Se este bloqueador está ajudando você, considere fazer uma doação:</div>
        <div class="pix-key">01824356609</div>
      </div>
    </div>
  </body>
</html>
`;