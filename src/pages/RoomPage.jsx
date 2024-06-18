const RoomPage = ({ setRoom, setIsAuth }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const room = e.target[0].value;

    setRoom(room);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white w-4/5 max-sm:w-full h-2/3 max-sm:h-full flex flex-col justify-center items-center gap-12 rounded max-sm:rounded-none"
    >
      <h1 className="text-4xl max-sm:text-6xl font-bold">Chat Room</h1>
      <p className="text-base max-sm:text-xl">Which room will you enter?</p>
      <div className="flex flex-col gap-8 w-1/2 max-sm:w-2/3">
        <input
          type="text"
          className="border px-1 max-sm:px-2 py-1 max-sm:py-3 max-sm:text-lg rounded"
        />
        <button
          type="submit"
          className="bg-emerald-600 text-white py-2 max-sm:py-4 max-sm:text-lg hover:opacity-75 duration-200 rounded"
        >
          Enter Room
        </button>
        <button
          onClick={() => {
            setIsAuth(false);
            localStorage.removeItem("TOKEN");
          }}
          type="button"
          className="bg-rose-600 text-white py-2 max-sm:py-4 max-sm:text-lg hover:opacity-75 duration-200 rounded"
        >
          Quit
        </button>
      </div>
    </form>
  );
};

export default RoomPage;
