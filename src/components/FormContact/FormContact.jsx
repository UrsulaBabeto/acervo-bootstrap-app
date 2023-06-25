import { useState } from "react";


function FormContact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    txt: "",
  });

  const isFormValid = () => {
    let validade = true;
    const data = Object.entries(formData);

    for (const [key] of data) {
      if (!formData[key].length) {
        validade = false;
      }
    }
    return validade;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    const newData = {...formData, [id]: value };
    setFormData(newData);
    console.log(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    isFormValid()? alert(`${formData.name} usuario logado com sucesso`) : alert('Verifique os campos')

  };

  return (
    <>
      <form className="row m-5">
        <h2 className=" mb-5 text-center">Entre em contato conosco</h2>
        <div className="d-flex justify-content-between">
          <div className="col-6 d-flex flex-column input-div">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="João da Silva"
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-6 input-div d-flex flex-column">
            <label htmlFor="phone">Telefone</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="(48) 9 9999-9999"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <label className="mt-3" htmlFor="email">
          Email
        </label>
        <input
          className=""
          type="email"
          name="email"
          id="email"
          placeholder="email@email.com"
          onChange={handleChange}
          required
        />

        <label className="mt-3" htmlFor="txt">
          Mensagem
        </label>
        <textarea
          className=""
          name="txt"
          id="txt"
          cols="70"
          rows="7"
          onChange={handleChange}
          required
        >
          Digite aqui a sua mensagem...
        </textarea>

        <button
          id="btn"
          type="submit"
          className="m-2 btn btn-warning"
          disabled={!isFormValid()}
          onSubmit={handleSubmit}
        >
          Enviar
        </button>
      </form>
    </>
  );
}

export default FormContact;
