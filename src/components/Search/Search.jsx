function Search() {
  return (
    <>
      <section className="navbar  bg-light justify-content-end">
        <form className="form-inline">
          <input
            className="border border-secondary p-1 m-1  rounded"
            type="search"
            placeholder="Buscar"
            aria-label="Search"
          />
          <button className="btn btn-warning" type="submit">
            Procurar
          </button>
        </form>
      </section>
    </>
  );
}

export default Search;
