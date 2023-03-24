const form = document.querySelector('.trybewarts-login');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const submitEmail = document.querySelector('#email').value;
  const submitPassword = document.querySelector('#password').value;
  if (submitEmail === 'tryber@teste.com' && submitPassword === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

function habilita() {
  const check = document.getElementById('flexSwitchCheckChecked');
  const botao = document.getElementById('submit-btn');
  if (check.checked) {
    botao.disabled = false;
    return;
  }
  botao.disabled = true;
}

habilita();
