// React icons
import {
  HiOutlineShoppingBag,
  HiOutlineUser,
  HiShoppingBag,
  HiOutlineCreditCard,
} from "react-icons/hi";
import { IoLogoInstagram, IoMdClose } from "react-icons/io";
import { RiDeleteBin3Line, RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";
import {
  HiMagnifyingGlass,
  HiMiniXMark,
  HiBars3BottomRight,
  HiArrowPathRoundedSquare,
} from "react-icons/hi2";
import { FiChevronLeft, FiChevronRight, FiPhoneCall } from "react-icons/fi";
import { FaFilter } from "react-icons/fa";

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

// Home component
export const homeText = {
  text: "Top Wears For Women",
  placeholderProducts: [
    {
      _id: 1,
      name: "Product 1",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=1" }],
    },
    {
      _id: 2,
      name: "Product 2",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=2" }],
    },
    {
      _id: 3,
      name: "Product 3",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=3" }],
    },
    {
      _id: 4,
      name: "Product 4",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=4" }],
    },
    {
      _id: 5,
      name: "Product 5",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=5" }],
    },
    {
      _id: 6,
      name: "Product 6",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=6" }],
    },
    {
      _id: 7,
      name: "Product 7",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=7" }],
    },
    {
      _id: 8,
      name: "Product 8",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=8" }],
    },
  ],
};

// Hero component
export const heroText = {
  headerText: "Vacation",
  headerText2: "Ready",
  headerText3: "Explore our vacation ready outfits with worldwide shipping.",
  heroBtnText: "Shop now",
};

// GenderCollectionSection component
export const genderCollectionSectionText = {
  text: "Women's Collection",
  text2: "Shop Now",
  text3: "Men's Collection",
  link1: "/collections/all?gender=Women",
  link2: "/collections/all?gender=Men",
};

// NewArrivals component
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

// best seller section text (in home component)
export const bestSellerText = {
  text: "Best seller",
};

// ProductDetails component text
export const productDetailsText = {
  selectedProduct: {
    name: "Sylish Jacket",
    price: 120,
    originalPrice: 150,
    description: "This is a stylish jacket perfect for any occasion.",
    brand: "MHH",
    material: "Leather",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Black"],
    images: [
      {
        url: "https://picsum.photos/500/500?random=1",
        altText: "Stylish Jacket 1",
      },
      {
        url: "https://picsum.photos/500/500?random=2",
        altText: "Stylish Jacket 2",
      },
    ],
  },
  buttonText: "Add to cart",
  text: "You May Also Like",
};

// ProductGrid component text
export const productGridText = {
  products: [
    {
      _id: 1,
      name: "Product 1",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=1" }],
    },
    {
      _id: 2,
      name: "Product 2",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=2" }],
    },
    {
      _id: 3,
      name: "Product 3",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=3" }],
    },
    {
      _id: 4,
      name: "Product 4",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=4" }],
    },
  ],
};

// FeaturedCollection component text
export const featuredCollectionText = {
  text: "Comfort and Style",
  text2: "Apparel made for your everyday life",
  text3:
    "Discover high-quality, comfortable clothing that effortlessly blends fashion and function. Designed to make you look good and feel great every day.",
  text4: "Shop now",
};

// FeaturedSEction component text
export const featuredSectionText = {
  icons: [HiShoppingBag, HiArrowPathRoundedSquare, HiOutlineCreditCard],
  text: "FREE INTERNATIONAL SHIPPING",
  text2: "On all orders over $100.00",
  text3: "45 DAYS RETURN",
  text4: "Money back guarantee",
  text5: "SECURE CHECOUT",
  text6: "100% secured checkout process",
};

// Login & Register components text
export const loginAndRegisterText = {
  headerText: "Header Text",
  text: "Hey there!",
  text2: "Enter your username and password to Login",
  labelText: "Email",
  labelText2: "Password",
  buttonText: "Sign in",
  questionText: "Don't have an account?",
  linkText: "Register",
  text3: "Name",
  text4: "Enter your name, email and password to create an account.",
  buttonText2: "Sign Up",
  linkText2: "Register",
  text5: "Already have an account?",
};

// MyOrdersPage component text
export const myOrdersPageText = {
  headerText: "My orders",
  thText1: "Image",
  thText2: "Order ID",
  thText3: "Created",
  thText4: "Shipping Address",
  thText5: "Items",
  thText6: "Price",
  thText7: "Status",
  tdTextNoOdersMessage: "You don't have any orders.",
  paidText: "Paid",
  notPaidText: "Pending",
};

// CollectionsPage component text
export const collectionsPageText = {
  icons: [FaFilter],
  headerText: "All collection",
};

// FilterSideBar component text
export const filterSideBarText = {
  headerText: "Filter",
  categoryFilterText: "Category",
  genderFilterText: "Gender",
  colorFilterText: "Color",
  sizeFilterText: "Size",
  materialFilterText: "Material",
  brandFilterText: "Brand",
  priceRangeFilterText: "Price Range",
  //   mock data for dev
  categories: ["Top Wear", "Bottom Wear"],
  colors: [
    "Red",
    "Blue",
    "Black",
    "Green",
    "Yellow",
    "Gray",
    "White",
    "Pink",
    "Beige",
    "Navy",
  ],
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  materials: [
    "Cotton",
    "Whool",
    "Denim",
    "Polyester",
    "Silk",
    "Linen",
    "Viscose",
    "Fleece",
  ],
  brands: ["Brand1", "Brand2", "Brand3", "Brand4", "Brand5", "Brand6"],
  genders: ["Men", "Women"],
};

// SortOption component text
export const sortOptionsText = {
  valueText1: "Default",
  valueText2: "Price: low to High",
  valueText3: "Price: High to Low",
  valueText4: "Popularity",
};
