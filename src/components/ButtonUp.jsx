const d = document,
  w = window;

w.addEventListener("scroll", () => {
  const $bUp = d.querySelector("#bUp");
  const sc = w.scrollY || d.documentElement.scrollTop;
  if (sc > 99) {
    $bUp.classList.remove("up-hidden");
  } else {
    $bUp.classList.add("up-hidden");
  }
});

const up = () => {
  scrollTo(0, 0);
};

export const ButtonUp = () => {
  return (
    <div>
      <button className="btn btn-warning up up-hidden" id="bUp">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
          onClick={up}
        >
          <path d="m296-224-56-56 240-240 240 240-56 56-184-183-184 183Zm0-240-56-56 240-240 240 240-56 56-184-183-184 183Z" />
        </svg>{" "}
      </button>
    </div>
  );
};
