function Footer({ handleToggle }) {
  return (
    <>
      <div className="fixed bottom-0 left-0 w-screen text-white flex  justify-between px-5 py-2">
        <div className="text-3xl">
          <h2>The Brutal Martian landscape</h2>
          <h1>APOD PROJECT</h1>
        </div>
        <button>
          <i
            className="fa-solid fa-circle-info text-black text-4xl"
            onClick={handleToggle}
          ></i>
        </button>
      </div>
    </>
  );
}

export default Footer;
