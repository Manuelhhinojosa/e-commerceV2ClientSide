// React icons
import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoLogoInstagram, IoMdClose } from "react-icons/io";
import { RiDeleteBin3Line, RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";
import { FiPhoneCall } from "react-icons/fi";

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
