import GeraCPF from "./modules/GeraCPF";
import "./assets/css/style.css";

document.addEventListener('DOMContentLoaded', () => {
  const divNewCPf = document.querySelector(".cpf-gerado");
  const newCpf = document.getElementById('newCpf')
  divNewCPf.innerHTML = GeraCPF.geraNovoCpf();
  newCpf.addEventListener('click', () => {
    divNewCPf.innerHTML = GeraCPF.geraNovoCpf()
  })
})