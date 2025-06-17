const inputPesquisa = document.getElementById('input-pesquisa');
const cardCategoria = document.querySelectorAll('.card-categorias');
const spans = document.querySelectorAll('#category span');
const botoes = document.querySelectorAll('#botoes .estado');

class Carro {
  constructor(nome, marca, ano, preco, tipo) {
    this.nome = nome;
    this.marca = marca;
    this.ano = ano;
    this.preco = preco;
    this.tipo = tipo;
  }
}

const carros = [
  new Carro("C40", "Volvo", 2023, 226900, "eletrico"),
  new Carro("Cooper", "Mini", 2021, 179997, "hatch"),
  new Carro("Q3", "Audi", 2024, 405900, "suv"),
  new Carro("S10", "Chevrolet", 2023, 210900, "picape"),
  new Carro("320i", "BMW", 2023, 356900, "sedan"),
  new Carro("iX2", "BMW", 2025, 419950, "eletrico"),
  new Carro("Rs3", "Audi", 2018, 400000, "hatch"),
  new Carro("Rampage", "RAM", 2024, 224900, "picape"),
  new Carro("Sentra", "Nissan", 2023, 131590, "sedan"),
  new Carro("Taycan", "Porsche", 2022, 478800, "eletrico"),
  new Carro("Mobi", "Fiat", 2020, 40699, "hatch"),
  new Carro("Civic", "Honda", 2021, 135900, "sedan"),
  new Carro("Master", "Renault", 2025, 263650, "suv"),
  new Carro("Corolla", "Toyota", 2025, 168890, "sedan"),
  new Carro("Kwid", "Renault", 2025, 77240, "suv")
];

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    botoes.forEach(b => b.classList.remove('selecionado'));
    botao.classList.add('selecionado');
  })
})

spans.forEach(span => {
  span.addEventListener('click', () => {
    spans.forEach(s => s.classList.remove('selecionado'));     
    span.classList.add('selecionado');   
  });
});

carros.forEach((carro, index) => {
  const nomeEl = document.getElementById(`nome-carro${index + 1}`);
  const anoEl = document.getElementById(`ano-carro${index + 1}`);
  const precoEl = document.getElementById(`preco-carro${index + 1}`);

  if (nomeEl) nomeEl.textContent = `${carro.marca} ${carro.nome}`;
  if (anoEl) anoEl.textContent = carro.ano;
  if (precoEl) precoEl.textContent = carro.preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
});

inputPesquisa.addEventListener('input', () => {
  const termo = inputPesquisa.value.toLowerCase();
  const cards = document.querySelectorAll('.card-carros');



  cards.forEach(card => {
    const nome = card.querySelector('h2')?.textContent.toLowerCase() || '';
    const ano = card.querySelector('p:nth-of-type(1)')?.textContent.toLowerCase() || '';
    const preco = card.querySelector('p:nth-of-type(2)')?.textContent.toLowerCase() || '';

    if (nome.includes(termo) || ano.includes(termo) || preco.includes(termo)) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
});

cardCategoria.forEach(card => {
  card.addEventListener("click", () => {
    const jaSelecionado = card.classList.contains('selecionado');
    const tipo = card.querySelector('span')?.textContent.toLowerCase() || '';

    const cardsCarros = document.querySelectorAll('.card-carros');

    cardsCarros.forEach(carroCard => {
      const tipoCarro = carroCard.getAttribute('data-tipo')?.toLowerCase() || '';

      if (!jaSelecionado && tipoCarro !== tipo) {
        carroCard.style.display = "none";
      } else {
        carroCard.style.display = "flex";
      }
    });

    cardCategoria.forEach(c => c.classList.remove('selecionado'));

    if (!jaSelecionado) {
      card.classList.add('selecionado');
    }
  });
});