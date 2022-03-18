const styles = {
  nav: "transition-all grid z-50 fixed top-0 backdrop-blur-sm left-0 grid-cols-2 items-center  bg-[#ffffff] w-full h-20 shadow-sm shadow-[#30303048] text-black px-12",
  leftNav: "flex items-center gap-52",
  logo: "h-10 w-auto scale-[2]",
  list: "list-none flex items-center justify-between gap-8",
  listItem: "grid place-content-center font-medium",
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
                    href="/livraison"
                    class="${styles.navLink}"
                    data-link
                    >Livraison</a>
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
          <div src="/static/img/cart" alt="Cart" class="${styles.cart}"></div> <!-- replace with image -->
        </nav>
    `;
};

export default Navbar;
