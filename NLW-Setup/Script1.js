const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)
function add() {
  //Essa função adiciona um novo dia na tela
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)
  if (dayExists) {
    alert("Dia já incluso❌")
    return
  }
  alert("Dia adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}
function save() {
  window.localStorage.setItem(
    "Agenda_de_habitos",
    JSON.stringify(nlwSetup.data)
  )
  localStorage.getItem("Agenda_de_habitos")
  JSON.parse(localStorage.getItem("Agenda_de_habitos"))
}

const data = JSON.parse(localStorage.getItem("Agenda_de_habitos")) || {}
nlwSetup.setData(data)
nlwSetup.load()
