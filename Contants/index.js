export const NAV_LINKS = [
  {
    href: "/",
    key: "home",
    label: "HOME",
    subLinks: [
      { href: "/", key: "home1", label: "Home 1" },
      { href: "/", key: "home2", label: "Home 2" },
      { href: "/", key: "home3", label: "Home 3" },
      { href: "/", key: "home4", label: "Home 4" },
      { href: "/", key: "home5", label: "Home 5" },
    ],
  },
  {
    href: "/shop",
    key: "SHOP",
    label: "SHOP",
    ProductPageStyles: [
      "Product Thumbs Bottom",
      "Product Thumbs Left",
      "Product Thumbs Right",
      "Product No Thumbs",
      "Product No Thumbs Center",
      "Product No Thumbs Fullwidth",
      "Product Image Gallery",
    ],
    ProductCategories: [
      "Product Category 1",
      "Product Category 2",
      "Product Category 3",
      "Product Category 4",
      "Product Category 5",
      "Product Category 6",
      "Product Category 7",
    ],
  },
  {
    href: "/pages",
    key: "PAGES",
    label: "PAGES",
    subPages: [
      { href: "/", key: "about_us", label: "About Us" },
      { href: "/", key: "Checkout", label: "Checkout" },
      { href: "/", key: "Delivery", label: "Delivery" },
      { href: "/", key: "Our_stores", label: "Our stores" },
      { href: "/", key: "Secure_payment", label: "Secure payment" },
    ],
  },
  { href: "/blog", key: "BLOG ", label: "BLOG " },
  { href: "/contact", key: "contact_us", label: "CONTACT" },
];
