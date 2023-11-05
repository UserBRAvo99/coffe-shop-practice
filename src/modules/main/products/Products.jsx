const dataDrink = [
  {
    drink: "Espresso",
    info: "Espresso - black coffee made in a coffee machine or a special coffee machine, where hot water is passed through pressed ground beans at a pressure.",
  },
  {
    drink: "Latte",
    info: "The name Latte (from Italian “milk”) speaks about the main ingredient of the drink. It is recommended to take fat milk - at least 3.2%. In addition to it, milk foam.",
  },
  {
    drink: "Americano",
    info: "The name Latte (from Italian “milk”) speaks about the main ingredient of the drink. It is recommended to take fat milk - at least 3.2%. In addition to it, milk foam.",
  },
];

const Products = () => {
  return (
    <section className="container">
      <ul>
        {dataDrink.map((coffee) => {
          console.log(coffee);
          return (
            <li key={coffee.drink}>
              <h4>{coffee.drink}</h4>
              <p>{coffee.info}</p>
              <button>Add</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
