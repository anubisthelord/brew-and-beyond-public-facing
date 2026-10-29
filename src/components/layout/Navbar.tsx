"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  User,
  Search,
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

// ======================================================
// TYPES
// ======================================================

interface LinkItem {
  label: string;
  href: string;
}

interface PromoCardData {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

interface NavColumn {
  title: string;
  subColumns: LinkItem[][];
}

interface NavSection {
  columns: NavColumn[];
  bottomLinks: LinkItem[];
}

type MenuName = "shop" | "cafe";

// ======================================================
// NAVIGATION DATA
// ======================================================

const SHOP_DATA: NavSection = {
  columns: [
    {
      title: "Coffee",
      subColumns: [
        [
          { label: "All Coffee", href: "/shop/all" },
          { label: "Light Roasts", href: "/shop/light" },
          { label: "Medium Roasts", href: "/shop/medium" },
          { label: "Dark Roasts", href: "/shop/dark" },
          { label: "Decaf", href: "/shop/decaf" },
          { label: "Cold Brew", href: "/shop/cold-brew" },
        ],
        [
          { label: "Espresso", href: "/shop/espresso" },
          { label: "2lb Bags", href: "/shop/2lb" },
          { label: "5lb Bags", href: "/shop/5lb" },
          { label: "Organic / Fair Trade", href: "/shop/organic" },
          { label: "Single Origin", href: "/shop/single-origin" },
          { label: "Subscriptions", href: "/shop/subscriptions" },
        ],
      ],
    },
    {
      title: "Stuff",
      subColumns: [
        [
          { label: "Shop All", href: "/shop/stuff" },
          { label: "Brewware", href: "/shop/brewware" },
          { label: "Gift Cards", href: "/shop/gift-cards" },
          { label: "Apparel", href: "/shop/apparel" },
          { label: "Drinkware", href: "/shop/drinkware" },
          { label: "Merch", href: "/shop/merch" },
        ],
        [
          { label: "More", href: "/shop/more" },
          { label: "Mugs", href: "/shop/mugs" },
          { label: "Tumblers", href: "/shop/tumblers" },
          { label: "Accessories", href: "/shop/accessories" },
        ],
      ],
    },
  ],
  bottomLinks: [
    { label: "Seasonal Blends", href: "/shop/seasonal" },
    { label: "Unleaded Coffee", href: "/shop/unleaded" },
    { label: "Brew Wear", href: "/shop/brew-wear" },
  ],
};

const CAFE_DATA: NavSection = {
  columns: [
    {
      title: "Coffee",
      subColumns: [
        [
          { label: "Espresso", href: "/menu/espresso" },
          { label: "Americano", href: "/menu/americano" },
          { label: "Latte", href: "/menu/latte" },
          { label: "Cappuccino", href: "/menu/cappuccino" },
          { label: "Mocha", href: "/menu/mocha" },
          { label: "Cold Brew", href: "/menu/cold-brew" },
        ],
      ],
    },
    {
      title: "Drinks",
      subColumns: [
        [
          { label: "Matcha Latte", href: "/menu/matcha" },
          { label: "Chai Tea", href: "/menu/chai" },
          { label: "Fresh Juice", href: "/menu/juice" },
          { label: "Smoothies", href: "/menu/smoothies" },
          { label: "Hot Chocolate", href: "/menu/hot-chocolate" },
        ],
      ],
    },
    {
      title: "Eats",
      subColumns: [
        [
          { label: "Croissants", href: "/menu/croissants" },
          { label: "Avocado Toast", href: "/menu/avocado-toast" },
          { label: "Breakfast Sandwich", href: "/menu/sandwich" },
          { label: "Bagels", href: "/menu/bagels" },
        ],
      ],
    },
  ],
  bottomLinks: [
    { label: "Seasonal Blends", href: "/shop/seasonal" },
    { label: "Unleaded Coffee", href: "/shop/unleaded" },
    { label: "Brew Wear", href: "/shop/brew-wear" },
  ],
};

const PROMOS: PromoCardData[] = [
  {
    id: "favorites",
    title: "Save 10% on your favorites!",
    imageSrc:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Freshly prepared specialty coffee",
    href: "/promo",
  },
  {
    id: "seasonal",
    title: "New seasonal blends!",
    imageSrc:
      "https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Coffee beans and brewing ingredients",
    href: "/promo",
  },
];

const PRIMARY_LINKS: LinkItem[] = [
  { label: "WHERE TO FIND US", href: "/locations" },
  { label: "JOURNAL", href: "/news" },
  { label: "ABOUT", href: "/about" },
];

const MENU_ITEMS: Record<
  MenuName,
  { label: string; data: NavSection }
> = {
  shop: {
    label: "SHOP ONLINE",
    data: SHOP_DATA,
  },
  cafe: {
    label: "CAFE MENUS",
    data: CAFE_DATA,
  },
};

// ======================================================
// THEME — gold accent (#D9A06D) + dark text on gold
// ======================================================

const ACCENT = "#D9A06D";
const ACCENT_TEXT = "#181D23"; // dark text placed on the gold accent

// ======================================================
// SHARED STYLES
// ======================================================

const focusStyle =
  "focus-visible:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-[var(--color-nav-accent)] " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-nav-bg)]";

const utilityButtonStyle =
  "inline-flex size-10 shrink-0 items-center justify-center " +
  "rounded-md text-white transition-colors duration-150 " +
  "hover:text-[var(--color-nav-accent)] " +
  focusStyle;

// ======================================================
// REUSABLE COMPONENTS
// ======================================================

function NavigationLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className={
        "inline-flex min-h-10 items-center whitespace-nowrap " +
        "rounded-md px-2 text-[13px] font-medium tracking-wide " +
        "text-white transition-colors duration-150 " +
        "hover:text-[var(--color-nav-accent)] " +
        focusStyle
      }
    >
      {label}
    </Link>
  );
}

function DropdownTrigger({
  menu,
  label,
  isActive,
  panelId,
  buttonRef,
  onClick,
  onMouseEnter,
}: {
  menu: MenuName;
  label: string;
  isActive: boolean;
  panelId: string;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
  onClick: (menu: MenuName) => void;
  onMouseEnter: (menu: MenuName) => void;
}) {
  return (
    <button
      ref={buttonRef}
      type="button"
      aria-expanded={isActive}
      aria-controls={panelId}
      onClick={() => onClick(menu)}
      onMouseEnter={() => onMouseEnter(menu)}
      className={
        "group inline-flex min-h-10 items-center gap-2 whitespace-nowrap " +
        "rounded-md px-2 text-[13px] font-medium tracking-wide " +
        "transition-colors duration-150 " +
        (isActive
          ? "text-[var(--color-nav-accent)]"
          : "text-white hover:text-[var(--color-nav-accent)]") +
        " " +
        focusStyle
      }
    >
      <span>{label}</span>

      <ChevronDown
        aria-hidden="true"
        className={
          "size-3.5 shrink-0 transition-transform duration-200 " +
          (isActive
            ? "rotate-180 text-[var(--color-nav-accent)]"
            : "text-white/60 group-hover:text-[var(--color-nav-accent)]")
        }
      />
    </button>
  );
}

function CategoryLinkList({ data }: { data: NavSection }) {
  return (
    <div className="grid min-w-0 grid-cols-1 gap-6 sm:grid-cols-2">
      {data.columns.map((column) => (
        <section key={column.title} className="min-w-0">
          <h3 className="mb-3 text-xl font-medium tracking-tight !text-white">
            {column.title}
          </h3>

          <div className="flex flex-wrap gap-x-6 gap-y-5">
            {column.subColumns.map((subColumn, index) => (
              <ul
                key={`${column.title}-${index}`}
                className="min-w-0 space-y-2.5"
              >
                {subColumn.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={
                        "block text-sm leading-5 text-[var(--color-nav-muted)] " +
                        "transition-colors duration-150 " +
                        "hover:text-[var(--color-nav-accent)] " +
                        focusStyle
                      }
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function PromoCard({ promo }: { promo: PromoCardData }) {
  return (
    <Link
      href={promo.href}
      className={
        "group flex min-w-0 flex-col rounded-md border " +
        "border-black/10 bg-[var(--color-nav-promo)] p-2 " +
        "text-[#1D1F27] shadow-sm transition-transform duration-200 " +
        "hover:-translate-y-1 motion-reduce:transform-none " +
        focusStyle
      }
    >
      <div className="relative mb-3 aspect-[4/3] w-full overflow-hidden rounded-sm bg-gray-200">
        <Image
          src={promo.imageSrc}
          alt={promo.imageAlt}
          fill
          sizes="(max-width: 1023px) 40vw, 220px"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transform-none"
        />
      </div>

      <span className="line-clamp-2 text-sm font-semibold leading-5">
        {promo.title}
      </span>

      <span className="mt-2 text-xs font-medium text-[#475569]">
        Discover more <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}


function UtilityActions({
  cartCount,
}: {
  cartCount: number;
}) {
  const count = Number.isFinite(cartCount)
    ? Math.max(0, Math.floor(cartCount))
    : 0;

  return (
    <Link
      href="/cart"
      aria-label={`Shopping bag, ${count} items`}
      title="Shopping bag"
      className={
        "relative inline-flex size-10 shrink-0 items-center justify-center " +
        "rounded-md text-white transition-colors duration-200 " +
        "hover:text-[var(--color-nav-accent)] " +
        focusStyle
      }
    >
      <ShoppingCart
        aria-hidden="true"
        className="size-5"
      />

      {count > 0 && (
        <span
          aria-hidden="true"
          className={
            "absolute right-0.5 top-0.5 flex size-4 items-center justify-center " +
            "rounded-full bg-[var(--color-nav-accent)] text-[10px] font-semibold text-[#181D23]"
          }
        >
          {count > 99 ? "99+" : count}
        </span>
      )}
    </Link>
  );
}


// ======================================================
// DESKTOP MEGA MENU
// ======================================================

function MegaMenu({
  activeMenu,
  panelId,
  onMouseEnter,
}: {
  activeMenu: MenuName | null;
  panelId: string;
  onMouseEnter: () => void;
}) {
  const currentData = activeMenu
    ? MENU_ITEMS[activeMenu].data
    : SHOP_DATA;

  return (
    <div
      id={panelId}
      aria-label={
        activeMenu
          ? `${MENU_ITEMS[activeMenu].label} navigation`
          : undefined
      }
      aria-hidden={activeMenu === null}
      onMouseEnter={onMouseEnter}
      className={
        "absolute left-0 right-0 top-[calc(100%+8px)] z-40 " +
        "overflow-hidden rounded-xl border border-white/10 " +
        "bg-[var(--color-nav-menu)] text-white shadow-2xl " +
        "transition-[opacity,transform,visibility] duration-200 " +
        "ease-out motion-reduce:transition-none " +
        (activeMenu
          ? "visible translate-y-0 opacity-100"
          : "invisible -translate-y-1.5 opacity-0 pointer-events-none")
      }
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url('/demo/navbar-bg-gold.jpg')] bg-cover bg-center opacity-[0.035] mix-blend-luminosity"
      />

      <div className="relative z-10 p-6 xl:p-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <CategoryLinkList data={currentData} />
          </div>

          <div className="min-w-0 lg:col-span-5">
            <div className="grid grid-cols-2 items-stretch gap-3">
              {PROMOS.map((promo) => (
                <PromoCard key={promo.id} promo={promo} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10 bg-black/30 px-4 py-3">
        <nav
          aria-label="Featured destinations"
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
        >
          {currentData.bottomLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                "text-xs font-medium uppercase tracking-wide " +
                "text-[var(--color-nav-muted)] transition-colors " +
                "hover:text-white " +
                focusStyle
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

// ======================================================
// MOBILE ACCORDION
// ======================================================

function MobileAccordion({
  label,
  data,
  isOpen,
  panelId,
  onToggle,
}: {
  label: string;
  data: NavSection;
  isOpen: boolean;
  panelId: string;
  onToggle: () => void;
}) {
  return (
    <section className="border-b border-white/10">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className={
          "flex min-h-12 w-full items-center justify-between gap-4 " +
          "py-3 text-left text-base font-medium text-white " +
          "transition-colors hover:text-[var(--color-nav-accent)] " +
          focusStyle
        }
      >
        <span>{label}</span>

        <ChevronDown
          aria-hidden="true"
          className={
            "size-5 shrink-0 transition-transform duration-200 " +
            (isOpen ? "rotate-180" : "")
          }
        />
      </button>

      <div
        id={panelId}
        aria-hidden={!isOpen}
        className={
          "grid transition-[grid-template-rows,opacity] duration-200 " +
          "ease-out motion-reduce:transition-none " +
          (isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0")
        }
      >
        <div className="min-h-0 overflow-hidden">
          <div className="space-y-5 pb-4 pl-3">
            {data.columns.map((column) => (
              <section key={column.title}>
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider !text-[var(--color-nav-accent)]">
                  {column.title}
                </h3>

                {column.subColumns.map((subColumn, index) => (
                  <ul
                    key={`${column.title}-${index}`}
                    className="space-y-1"
                  >
                    {subColumn.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={
                            "flex min-h-10 items-center py-2 pr-2 text-sm " +
                            "text-[var(--color-nav-muted)] " +
                            "transition-colors hover:text-white " +
                            focusStyle
                          }
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ))}
              </section>
            ))}

            {data.bottomLinks.length > 0 && (
              <section className="border-t border-white/10 pt-3">
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-nav-accent)]">
                  Featured
                </h3>

                <ul className="space-y-1">
                  {data.bottomLinks.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={
                          "flex min-h-10 items-center py-2 pr-2 text-sm " +
                          "text-[var(--color-nav-muted)] " +
                          "transition-colors hover:text-white " +
                          focusStyle
                        }
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileNavigation({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [openAccordion, setOpenAccordion] = useState<MenuName | null>(null);
  const shopPanelId = useId();
  const cafePanelId = useId();

  useEffect(() => {
    if (!isOpen) {
      setOpenAccordion(null);
    }
  }, [isOpen]);

  const toggleAccordion = (menu: MenuName) => {
    setOpenAccordion((current) => (current === menu ? null : menu));
  };

  return (
    <div
      id="mobile-navigation"
      aria-label="Mobile navigation"
      aria-hidden={!isOpen}
      className={
        "absolute left-0 right-0 top-[calc(100%+8px)] z-40 " +
        "overflow-hidden rounded-xl border border-white/10 " +
        "bg-[var(--color-nav-menu)] text-white shadow-2xl " +
        "transition-[opacity,transform,visibility] duration-200 " +
        "motion-reduce:transition-none " +
        (isOpen
          ? "visible translate-y-0 opacity-100"
          : "invisible -translate-y-1.5 opacity-0 pointer-events-none")
      }
    >
      <div className="max-h-[min(75dvh,680px)] overflow-y-auto overscroll-contain p-5 sm:p-6">
        <MobileAccordion
          label="Shop Online"
          data={SHOP_DATA}
          isOpen={openAccordion === "shop"}
          panelId={shopPanelId}
          onToggle={() => toggleAccordion("shop")}
        />

        <MobileAccordion
          label="Cafe Menus"
          data={CAFE_DATA}
          isOpen={openAccordion === "cafe"}
          panelId={cafePanelId}
          onToggle={() => toggleAccordion("cafe")}
        />

        <nav aria-label="Main pages" className="pt-2">
          {PRIMARY_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={
                "flex min-h-12 items-center border-b " +
                "border-white/10 py-3 text-sm font-medium " +
                "text-white transition-colors hover:text-[var(--color-nav-accent)] " +
                focusStyle
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/account"
          onClick={onClose}
          className={
            "flex min-h-12 items-center gap-3 py-3 text-sm font-medium " +
            "text-[var(--color-nav-muted)] hover:text-white " +
            focusStyle
          }
        >
          <User aria-hidden="true" className="size-4" />
          Account
        </Link>

        <Link
          href="/search"
          onClick={onClose}
          className={
            "flex min-h-12 items-center gap-3 py-3 text-sm font-medium " +
            "text-[var(--color-nav-muted)] hover:text-white " +
            focusStyle
          }
        >
          <Search aria-hidden="true" className="size-4" />
          Search
        </Link>

        <Link
          href="/cart"
          onClick={onClose}
          className={
            "flex min-h-12 items-center gap-3 py-3 text-sm font-medium " +
            "text-[var(--color-nav-muted)] hover:text-white " +
            focusStyle
          }
        >
          <ShoppingCart aria-hidden="true" className="size-4" />
          Shopping cart
        </Link>

        <button
          type="button"
          onClick={onClose}
          className={
            "mt-3 flex min-h-11 w-full items-center justify-center gap-2 " +
            "rounded-md border border-white/10 text-sm font-medium " +
            "text-white transition-colors hover:border-white/20 " +
            "hover:bg-white/5 lg:hidden " +
            focusStyle
          }
        >
          <X aria-hidden="true" className="size-4" />
          Close navigation
        </button>
      </div>
    </div>
  );
}

// ======================================================
// MAIN NAVBAR
// ======================================================

export default function Navbar() {
  // Replace with your real cart state when available.
  const cartCount = 0;

  const [activeMenu, setActiveMenu] = useState<MenuName | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const shopTriggerRef = useRef<HTMLButtonElement>(null);
  const cafeTriggerRef = useRef<HTMLButtonElement>(null);
  const mobileTriggerRef = useRef<HTMLButtonElement>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const panelId = useId();
  const pathname = usePathname();

  const clearHoverTimeout = useCallback(() => {
    if (hoverTimeoutRef.current !== null) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  }, []);

  const closeDesktopMenu = useCallback(() => {
    clearHoverTimeout();
    setActiveMenu(null);
  }, [clearHoverTimeout]);

  const scheduleDesktopClose = useCallback(() => {
    clearHoverTimeout();

    hoverTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
      hoverTimeoutRef.current = null;
    }, 160);
  }, [clearHoverTimeout]);

  const openDesktopMenu = useCallback(
    (menu: MenuName) => {
      clearHoverTimeout();
      setActiveMenu(menu);
    },
    [clearHoverTimeout],
  );

  const toggleDesktopMenu = useCallback(
    (menu: MenuName) => {
      clearHoverTimeout();
      setActiveMenu((current) => (current === menu ? null : menu));
    },
    [clearHoverTimeout],
  );

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Clean up hover timers.
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current !== null) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  // Close transient navigation when the route changes.
  useEffect(() => {
    closeDesktopMenu();
    setIsMobileMenuOpen(false);
  }, [pathname, closeDesktopMenu]);

  // Close menus on outside pointer interaction or Escape.
  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;

      if (
        target instanceof Node &&
        headerRef.current &&
        !headerRef.current.contains(target)
      ) {
        closeDesktopMenu();
        setIsMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        mobileTriggerRef.current?.focus();
        return;
      }

      if (activeMenu) {
        const trigger =
          activeMenu === "shop"
            ? shopTriggerRef.current
            : cafeTriggerRef.current;

        closeDesktopMenu();
        trigger?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeMenu, isMobileMenuOpen, closeDesktopMenu]);

  const handleMobileToggle = () => {
    closeDesktopMenu();
    setIsMobileMenuOpen((current) => !current);
  };

  return (
    <div className="fixed inset-x-0 top-2.5 z-50 flex justify-center px-3 sm:px-4 md:px-6">
      <header
        ref={headerRef}
        className="relative w-full max-w-7xl"
        onMouseLeave={scheduleDesktopClose}
        style={
          {
            // Override the teal accent globally for this header.
            "--color-nav-accent": ACCENT,
          } as React.CSSProperties
        }
      >
        {/* MAIN BAR */}
        <div className="relative z-50 flex items-center justify-between gap-3 rounded-md border border-white/10 bg-[var(--color-nav-bg)] px-4 py-1">
          {/* LOGO */}
          <Link
            href="/"
            aria-label="B&B home"
            className={
              "shrink-0 rounded-sm font-serif text-xl font-medium " +
              "leading-none tracking-tight text-[var(--color-nav-accent)] " +
              focusStyle
            }
          >
            B&amp;B
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav
            aria-label="Main navigation"
            className="hidden min-w-0 flex-1 items-center justify-center gap-2 lg:flex xl:gap-4"
          >
            <DropdownTrigger
              menu="shop"
              label={MENU_ITEMS.shop.label}
              isActive={activeMenu === "shop"}
              panelId={panelId}
              buttonRef={shopTriggerRef}
              onClick={toggleDesktopMenu}
              onMouseEnter={openDesktopMenu}
            />

            <NavigationLink
              href="/locations"
              label="WHERE TO FIND US"
            />

            <DropdownTrigger
              menu="cafe"
              label={MENU_ITEMS.cafe.label}
              isActive={activeMenu === "cafe"}
              panelId={panelId}
              buttonRef={cafeTriggerRef}
              onClick={toggleDesktopMenu}
              onMouseEnter={openDesktopMenu}
            />

            <NavigationLink href="/news" label="JOURNAL" />

            <NavigationLink href="/about" label="ABOUT" />
          </nav>

          {/* UTILITY ACTIONS + MOBILE TOGGLE */}
          <div className="flex shrink-0 items-center gap-1 sm:gap-2">
            <div className="hidden sm:block">
              <UtilityActions cartCount={cartCount} />
            </div>

            <button
              ref={mobileTriggerRef}
              type="button"
              aria-label={
                isMobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={handleMobileToggle}
              className={
                "inline-flex size-10 shrink-0 items-center justify-center " +
                "rounded-md text-white transition-colors " +
                "hover:text-[var(--color-nav-accent)] lg:hidden " +
                focusStyle
              }
            >
              {isMobileMenuOpen ? (
                <X aria-hidden="true" className="size-6" />
              ) : (
                <Menu aria-hidden="true" className="size-6" />
              )}
            </button>
          </div>
        </div>

        {/* DESKTOP MEGA MENU */}
        <div className="hidden lg:block">
          <MegaMenu
            activeMenu={activeMenu}
            panelId={panelId}
            onMouseEnter={clearHoverTimeout}
          />
        </div>

        {/* MOBILE NAVIGATION */}
        <div className="lg:hidden">
          <MobileNavigation
            isOpen={isMobileMenuOpen}
            onClose={closeMobileMenu}
          />
        </div>
      </header>
    </div>
  );
}