function onOff(){ // Monitora um evento de clique
  document // No documento
    .querySelector("#modal") // Procura pelo objeto com id footer
    .classList // Recebe e reconhece as classes do documento
    .toggle("hide") // Ativa a classe hide

    document
      .querySelector("body")
      .classList
      .toggle("hideScroll")

    document
    .querySelector("#modal")
    .classList
    .toggle("addScroll")
}
