function status(request, response) {
  response.status(200).json({ chave: "Valor", amor: "Maria", brother: "Leo" });
}

export default status;
