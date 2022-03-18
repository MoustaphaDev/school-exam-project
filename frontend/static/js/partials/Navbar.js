const styles = {
  nav: "transition-all flex z-50 fixed top-0 backdrop-blur-sm left-0 justify-center items-center  bg-[#ffffff] w-full h-20 shadow-sm shadow-[#30303048] text-black px-12",
  leftNav: "flex items-center justify-between gap-52 w-full",
  logo: "h-10 w-auto scale-[2]",
  list: "list-none flex items-center justify-between gap-8",
  listItem:
    "grid place-content-center font-medium hover:after:w-full after:absolute after:bottom-0 after:left-0 after:h-1 after:translate-y-7 transition-all after:w-0 relative after:bg-[#0f0027] after:transition-colors after:transition-transform after:transition-transform-short after:transition-transform-short-short",
  navLink: "grid place-content-center",
  cart: "place-self-end self-center w-5 h-5 bg-white rounded",
};

const Navbar = () => {
  return `
        <nav class="${styles.nav}">
          <div class="${styles.leftNav}">
            <a data-link href="/" class="grid place-content-center h-full">
            <img class="${styles.logo}" src="https://lh3.googleusercontent.com/pw/AM-JKLVLkwurP54d1xHbmfpaM6eruieASlRwd9rlxTaWIR0SEUVAKMFidDwal_w635TcliWoLk1RM1SFswVfOoIzA5S-6ZYKoYAZobXhuQIt-85I5PLutwg2JnosefOo71cR4LCTLRBLjP_4xjK2X7_5V1s=s600-no?authuser=0"
            alt="Coffee Logo"></a>
            <ul class="${styles.list}">
              <li class="${styles.listItem}">
                <a
                    href="/"
                    class="${styles.navLink}"
                    data-link
                    >Acceuil</a>
              </li>
              <li class="${styles.listItem}">
                <a
                    href="/produits"
                    class="${styles.navLink}"
                    data-link
                    >Produits</a>
              </li>
              <li class="${styles.listItem}">
                <a
                    href="/contact"
                    class="${styles.navLink}"
                    data-link
                    >Contact</a>
              </li>
            </ul>
          </div>
        </nav>
    `;
};

export default Navbar;
