// React icons
import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";

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
  navbarIcons: [HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight],
};
