// React icons
import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoLogoInstagram, IoMdClose } from "react-icons/io";
import { RiDeleteBin3Line, RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";
import { FiPhoneCall } from "react-icons/fi";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Topbar component
export const topbarText = {
  mediaLinks: [
    "https://wwww.facebook.com",
    "https://www.instagram.com",
    "https://www.x.com",
  ],
  mediaIcons: [TbBrandMeta, IoLogoInstagram, RiTwitterXLine],
  centerText: "We ship worlwide - Fast and reliable shipping!",
  contactIcons: [TfiEmail],
  contactEmail: "mangud.hinojosa@gmail.com",
};

// Navbar component
export const navbarText = {
  logo: "logo",
  navbarLinksText: ["men", "woman", "top wear", "bottom wear"],
  navbarIcons: [
    HiOutlineUser,
    HiOutlineShoppingBag,
    HiBars3BottomRight,
    IoMdClose,
  ],
  headerText: "Menu",
};
// SearchBar component
export const searchBarText = {
  icons: [HiMagnifyingGlass, HiMiniXMark],
};

// CartDrawer component

export const cartDrawerText = {
  icons: [IoMdClose, RiDeleteBin3Line],
  header: "Your shopping cart",
  checkooutBtnText: "Checkout",
  checkoutLeyend: "Shipping, taxes and discount coded calculaded at checkout.",
  buttonMinus: "-",
  buttonAdd: "+",
  moneySign: "$",
};

// Footer component
export const footerText = {
  text1: "Newsletter",
  text2:
    "Be the first to hear about new products, exclusive events, and online offers.",
  text3: "Sign up and get 10% off in your first order.",
  placeHolderFormText: "Enter your email",
  subBtnText: "Subscribe",
  text4: "Shop",
  footerLinksText: [
    "Men's Top Wear",
    "Women's Top Wear",
    "Men's Bottom Wear",
    "Woman's Bottom Wear",
  ],

  text5: "Support",
  footerTextLinks2: ["Contact Us", "About Us", "FAQs", "Features"],
  text6: "Follow Us",
  mediaLinks: [
    "https://wwww.facebook.com",
    "https://www.instagram.com",
    "https://www.x.com",
  ],
  mediaIcons: [TbBrandMeta, IoLogoInstagram, RiTwitterXLine],
  text7: "Call Us",
  phoneIcon: [FiPhoneCall],
  phoneNumberText: "+1 123 456 1234",
  bottomText: "2025, MHH. All Rights Reserved.",
};

export const heroText = {
  headerText: "Vacation",
  headerText2: "Ready",
  headerText3: "Explore our vacation ready outfits with worldwide shipping.",
  heroBtnText: "Shop now",
};

export const genderCollectionSectionText = {
  text: "Women's Collection",
  text2: "Shop Now",
  text3: "Men's Collection",
  link1: "/collections/all?gender=Women",
  link2: "/collections/all?gender=Men",
};

export const newArrivalsText = {
  text: "New Arrivals",
  text2:
    "Discover the latest styles straight off the runway, freshly added to keep your wardrobe on the cutting edge of fashion",
  scrollIcons: [FiChevronLeft, FiChevronRight],
  newProducts: [
    {
      _id: "1",
      name: "Stylish Jacket",
      Price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
          altText: "product",
        },
      ],
    },
    {
      _id: "2",
      name: "Stylish Jacket",
      Price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
          altText: "product",
        },
      ],
    },
    {
      _id: "3",
      name: "Stylish Jacket",
      Price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
          altText: "product",
        },
      ],
    },
    {
      _id: "4",
      name: "Stylish Jacket",
      Price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
          altText: "product",
        },
      ],
    },
    {
      _id: "5",
      name: "Stylish Jacket",
      Price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=5",
          altText: "product",
        },
      ],
    },
    {
      _id: "6",
      name: "Stylish Jacket",
      Price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=6",
          altText: "product",
        },
      ],
    },
    {
      _id: "7",
      name: "Stylish Jacket",
      Price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=7",
          altText: "product",
        },
      ],
    },
    {
      _id: "8",
      name: "Stylish Jacket",
      Price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=8",
          altText: "product",
        },
      ],
    },
  ],
};
