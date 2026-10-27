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
      className=" py-12 lg:py-16 xl:py-20 "
    >
      <div className="!container mx-auto space-y-8">
        {/* Section heading */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            label="A Taste of B&B"
            title="A few of our favorites."
            description="Thoughtfully made, beautifully served, and always worth another sip."
            as="h2"
            align="left"
          />

          <div className="shrink-0 sm:pb-1">
            <Button href="#full-menu" variant="primary" size="md">
              Explore full menu
              <span aria-hidden="true">↗</span>
            </Button>
          </div>
        </div>

        {/* Signature drink cards */}
        <div className=" grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2  lg:grid-cols-5">
          {signatureDrinks.slice(0,5).map((drink) => (
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