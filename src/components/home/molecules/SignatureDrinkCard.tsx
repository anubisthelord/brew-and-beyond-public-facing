
import Image from "next/image";

type SignatureDrinkCardProps = {
  name: string;
  category?: string;
  image: string;
  imageAlt: string;
  href?: string;
};

export default function SignatureDrinkCard({
  name,
  category = "SIGNATURE",
  image,
  imageAlt,
  href,
}: SignatureDrinkCardProps) {
  const content = (
    <article className="group w-full">
      {/* Drink image */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[#E9E1D3]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>

      {/* Minimal content */}
      <div className="pt-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#9A7025]">
          {category}
        </p>

        <div className="flex items-center gap-2">
          <h4 className="!text-xl !font-medium  text-[#181D23]">
            {name}
          </h4>

         
        </div>
      </div>
    </article>
  );

  if (href) {
    return (
      <a
        href={href}
        aria-label={`Explore ${name}`}
        className="block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9A7025]"
      >
        {content}
      </a>
    );
  }

  return content;
}
