import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full md:w-3/5 md:my-32 md:p-10 m-auto flex flex-col justify-center bg-white rounded-none md:rounded-3xl overflow-hidden">
      <div className="h-40 md:h-96 relative mb-5 overflow-hidden  rounded-none md:rounded-3xl ">
        <Image src="/omelette.jpeg" fill alt="Omelette" />
      </div>
      <div className="px-8 md:px-0">
        <h1 className=" text-3xl font-bold text-dark-charcoal">
          Simple Omelette Recipe
        </h1>
        <p className="my-3">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
        <section id="preparation-time" className="bg-rose-white p-6 my-4">
          <h3>Preparation time</h3>
          <ul className="list-disc">
            <li>
              <b>Total</b>: Approximately 10 minutes
            </li>
            <li>
              <b>Preparation</b>: 5 minutes
            </li>
            <li>
              <b>Cooking</b>: 5 minutes
            </li>
          </ul>
        </section>
        <section id="ingredients" className="my-5">
          <h2>Ingredients</h2>
          <ul className="list-disc ">
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </section>
        <div className="h-[1px] bg-light-grey my-5" />
        <section id="instructions" className="my-5">
          <h2>Instructions</h2>
          <ol className="list-decimal">
            <li>
              <b>Beat the eggs:</b> In a bowl, beat the eggs with a pinch of
              salt and pepper until they are well mixed. You can add a
              tablespoon of water or milk for a fluffier texture.
            </li>
            <li>
              <b>Heat the pan:</b> Place a non-stick frying pan over medium heat
              and add butter or oil.
            </li>
            <li>
              Cook the omelette: Once the butter is melted and bubbling, pour in
              the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
            </li>
            <li>
              <b>Add fillings (optional):</b> When the eggs begin to set at the
              edges but are still slightly runny in the middle, sprinkle your
              chosen fillings over one half of the omelette.
            </li>
            <li>
              <b>Fold and serve:</b> As the omelette continues to cook,
              carefully lift one edge and fold it over the fillings. Let it cook
              for another minute, then slide it onto a plate.
            </li>
            <li>
              <b>Enjoy:</b> Serve hot, with additional salt and pepper if
              needed.
            </li>
          </ol>
        </section>
        <div className="h-[1px] bg-light-grey my-5" />

        <section id="nutrition" className="my-5">
          <h2>Nutrition</h2>
          <p className="mb-3">
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>

          <table className="w-full">
            <tbody className="w-full">
              <tr className="border-b-[1px] border-b-light-grey w-full">
                <td className="w-[50%] py-2 text-gray-700">Calories</td>
                <td className="w-[50%] py-2 text-primary-2 font-extrabold">
                  277kcal
                </td>
              </tr>

              <tr className="border-b-[1px] border-b-light-grey w-full">
                <td className="w-[50%] py-2 text-gray-700">Carbs</td>
                <td className="w-[50%] py-2 text-primary-2 font-extrabold">
                  0g
                </td>
              </tr>

              <tr className="border-b-[1px] border-b-light-grey w-full">
                <td className="w-[50%] py-2 text-gray-700">Protein</td>
                <td className="w-[50%] py-2 text-primary-2 font-extrabold">
                  20g
                </td>
              </tr>

              <tr className="border-b-[1px] border-b-light-grey w-full">
                <td className="w-[50%] py-2 text-gray-700">Fat</td>
                <td className="w-[50%] py-2 text-primary-2 font-extrabold">
                  22g
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <div className="attribution mt-20">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://www.frontendmentor.io/profile/ansulagrawal"
            target="_blank"
            rel="author"
          >
            Ansul Agrawal
          </a>
          .
        </div>
      </div>
    </main>
  );
}
