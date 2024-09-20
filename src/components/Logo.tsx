export const Logo = () => {
  return (
    <a
      className="flex title-font font-medium items-centermd:justify-start justify-center text-gray-900
      flex-row 
    "
    >
      <div className="w-16 h-16">
        <svg
          preserveAspectRatio="xMidYMid meet"
          data-bbox="0 0 200 200"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          role="presentation"
          aria-hidden="true"
        >
          <g>
            <path d="M196,52V4H4v192h192v-48h4v52H0V0h200v52H196z"></path>
          </g>
        </svg>
      </div>
      <p className="ml-[-3rem] mt-4 text-xl inline ">Mosaic Networks</p>
    </a>
  );
};
