function status(request, response) {
  response.status(200).json({ chave: "Valor", amor: "Maria" });
}

export default status;
