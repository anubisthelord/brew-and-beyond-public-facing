
import Button from "@/components/shared/Button";
import SectionHeading from "@/components/shared/typography/SectionHeading";
import SignatureDrinkCard from "../molecules/SignatureDrinkCard";

const signatureDrinks = [
  {
    name: "Classic Cappuccino",
    category: "THE CLASSICS",
    image: "/demo/coffeeCards/demoCoffee%20(1).jpg",
    imageAlt: "Classic cappuccino served in a ceramic cup",
  },
  {
    name: "Velvet Latte",
    category: "HOUSE FAVORITE",
    image: "/demo/coffeeCards/demoCoffee%20(2).jpg",
    imageAlt: "Freshly prepared velvet latte",
  },
  {
    name: "Iced Coffee",
    category: "CHILLED & REFRESHING",
    image: "/demo/coffeeCards/demoCoffee%20(3).jpg",
    imageAlt: "Cold coffee served over ice",
  },
  {
    name: "Caramel Macchiato",
    category: "SWEET & SMOOTH",
    image: "/demo/coffeeCards/demoCoffee%20(4).jpg",
    imageAlt: "Caramel macchiato freshly prepared",
  },
  {
    name: "Mocha Delight",
    category: "CHOCOLATE FAVORITE",
    image: "/demo/coffeeCards/demoCoffee%20(5).jpg",
    imageAlt: "Rich mocha coffee served in a cup",
  },
];

export default function SignatureHighlightsSection() {
  return (
    <section
      id="signature-highlights"
      className="py-12 sm:py-14 lg:py-16 xl:py-20"
    >
      <div className="!container mx-auto space-y-8 px-4 sm:px-0">
        {/* Section heading */}
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div className="min-w-0 flex-1">
          <SectionHeading
  label="OUR PHILOSOPHY"
  title="Good coffee."
  rotatingTexts={[
    "Better moments.",
    "Fresh beginnings.",
    "Coffee breaks.",
  ]}
  description="Thoughtfully brewed coffee and a welcoming space to slow down."
  variant="dark"
  align="left"
/>
          </div>

          <div className="shrink-0">
            <Button
              href="#full-menu"
              variant="primary"
              size="lg"
            >
              Explore full menu
              <span aria-hidden="true">↗</span>
            </Button>
          </div>
        </div>

        {/* Signature drink cards */}
        <div className="grid  gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {signatureDrinks.map((drink) => (
            <SignatureDrinkCard
              key={drink.name}
              name={drink.name}
              category={drink.category}
              image={drink.image}
              imageAlt={drink.imageAlt}
              href="/menu"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
