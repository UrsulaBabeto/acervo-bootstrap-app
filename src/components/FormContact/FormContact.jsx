function FormContact() {
    return ( <>
     <form className="row m-5">
                <h2 className=" mb-5 text-center">Entre em contato conosco</h2>
                <div className="d-flex justify-content-between">
                    <div className="col-6 input-div">
                        <label htmlFor="name">Nome</label>
                        <input type="text" name="name" id="name" placeholder="João da Silva" />
                    </div>
                    <div className="col-6 input-div">
                        <label htmlFor="phone">Telefone</label>
                        <input type="tel" name="phone" id="phone" placeholder="(48) 9 9999-9999" />
                    </div>
                </div>
             
                    <label  className="mt-3" htmlFor="email">Email</label>
                    <input className="" type="email" name="email" id="email" placeholder="email@email.com" />
              
                <label className="mt-3" htmlFor="txt">Mensagem</label>
                <textarea className="" name="txt" id="txt" cols="70" rows="7">Digite aqui a sua mensagem...</textarea>

                <button id="btn" type="submit" className="m-2 btn btn-warning">Enviar</button>
            </form>
    </> );
}

export default FormContact;