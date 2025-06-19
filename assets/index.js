document.getElementById("root").innerHTML = `
  <h1 style='text-align:center;font-family:sans-serif'>TFT Gota (Interativo)</h1>
  <div style='padding:20px;text-align:center'>
    <label>Estágio: <input id='stage' /></label><br/><br/>
    <label>Gold: <input id='gold' /></label><br/><br/>
    <label>HP: <input id='hp' /></label><br/><br/>
    <label>Streak:
      <select id='streak'>
        <option value=''>--</option>
        <option value='win'>Win</option>
        <option value='loss'>Loss</option>
      </select>
    </label><br/><br/>
    <button onclick='simular()'>Simular Cenário</button>
    <p id='resposta' style='margin-top:20px;white-space:pre-wrap'></p>
  </div>
  <script>
    function simular() {
      const stage = document.getElementById('stage').value;
      const gold = parseInt(document.getElementById('gold').value || 0);
      const hp = parseInt(document.getElementById('hp').value || 100);
      const streak = document.getElementById('streak').value;
      let resposta = '';

      if (stage === '3-2') {
        if (gold >= 48) {
          resposta += 'Preserve ouro até 4-1. Suba para nível 6 e transicione.
';
          if (hp <= 30) resposta += '⚠️ HP crítico! Estabilize imediatamente.
';
        } else {
          resposta += 'Acumule gold, board fraco. Não role ainda.
';
        }
      } else if (stage === '4-1') {
        resposta += gold >= 30 ? 'Suba para o 7.
' : 'Espere até 4-5.
';
      } else {
        resposta += 'Estágio ainda não mapeado.
';
      }

      if (streak === 'win') resposta += '✅ Em win streak: jogue por economia.
';
      if (streak === 'loss') resposta += '❗ Em loss streak: preserve vida.
';

      document.getElementById('resposta').innerText = resposta;
    }
  </script>
`;