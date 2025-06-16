// Classe do carro
class Carro {
  constructor(nome, marca, ano, preco) {
    this.nome = nome;
    this.marca = marca;
    this.ano = ano;
    this.preco = preco;
  }
}

// Lista de carros
const carros = [
  new Carro("C40", "Volvo", 2023, 226900),
  new Carro("Cooper", "Mini", 2021, 179997),
  new Carro("Q3", "Audi", 2024, 405900),
  new Carro("S10", "Chevrolet", 2023, 210900),
  new Carro("320i", "BMW", 2023, 356900),
  new Carro("iX2", "BMW", 2025, 419950),
  new Carro("Rs3", "Audi", 2018, 400000),
  new Carro("Rampage", "RAM", 2024, 224900),
  new Carro("Sentra", "Nissan", 2023, 131590),
  new Carro("Taycan", "Porsche", 2022, 478800)
];


// Preencher os nomes nos elementos do HTML
carros.forEach((carro, index) => {
  const elemento = document.getElementById(`nome-carro${index + 1}`);
  if (elemento) {
    elemento.textContent = `${carro.marca} ${carro.nome}`;
  }
});

carros.forEach((carro, index) => {
  const elemento = document.getElementById(`ano-carro${index + 1}`);
  if (elemento) {
    elemento.textContent = carro.ano;
  }
});

carros.forEach((carro, index) => {
  const elemento = document.getElementById(`preco-carro${index + 1}`);
  if (elemento) {
    elemento.textContent = `${carro.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
  }
});
