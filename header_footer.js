$(document).ready(function () {
  Header();
  Footer();
});

function Header() {
  let dynamicHeader = document.getElementById("dynamic-header");
  dynamicHeader.innerHTML = `<nav class="bg-transparent border-gray-200 dark:bg-gray-900">
  <div
    class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
  >
    <a
      href="https://flowbite.com/"
      class="flex items-center space-x-3 rtl:space-x-reverse"
    >
      <img
        src="assets/Cheetah Airlines Logo (1).png"
        class="h-8"
        alt="Logo"
      />
    </a>
    <div
      class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
    >
      <button
        type="button"
        class="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
      >
        Book Now
      </button>
      <button
        data-collapse-toggle="navbar-cta"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-cta"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </div>
    <div
      class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-cta"
    >
      <ul
        class="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
      >
        <li>
          <a
            href="#"
            class="block py-2 px-3 md:p-0 md:text-white bg-white-700 rounded md:bg-transparent md:text-white-700 md:dark:text-white-500"
            aria-current="page"
            >Home</a
          >
        </li>
        <li>
          <a
            href="about.html"
            class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white-700 md:dark:hover:text-white-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >About</a
          >
        </li>
        <li>
          <a
            href="#"
            class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white-700 md:dark:hover:text-white-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >Air Charter</a
          >
        </li>
        <li>
          <a
            href="#"
            class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white-700 md:dark:hover:text-white-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Air Cargo
          </a>
        </li>
        <li>
          <a
            href="#"
            class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white-700 md:dark:hover:text-white-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Private Jet
          </a>
        </li>
        <li>
          <a
            href="#"
            class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white-700 md:dark:hover:text-white-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Presidential Air
          </a>
        </li>
        <li>
          <a
            href="#"
            class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white-700 md:dark:hover:text-white-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Flight Trip
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>`;
}
