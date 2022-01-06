import { useState } from "react/cjs/react.development";
import Cart from "../../components/cart/Cart";
import Shop from "../../components/shop/Shop";
import "./FakeData.css";
// product object data
function FakeData() {
  const productsData = [
    {
      key: "B002RL8IYK",
      category: "laptop",
      name: '3M Gold Privacy Filter for 17" Widescreen Laptop (16:10) (GF170W1B)',
      seller: "3M",
      wholePrice: "68",
      priceFraction: "36",
      stock: 36,
      star: 3,
      starCount: 3245,
      img: "https://images-na.ssl-images-amazon.com/images/I/415oziPFA0L._AC_US218_.jpg",
      url: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_electronics_sr_pg1_1?ie=UTF8&adId=A03956601N6RBLKGAP4W1&url=https%3A%2F%2Fwww.amazon.com%2F3M-Privacy-Filter-Widescreen-Laptop%2Fdp%2FB002RL8IYK%2Fref%3Dsr_1_1%3Fs%3Delectronics%26ie%3DUTF8%26qid%3D1499124890%26sr%3D1-1-spons%26keywords%3Dlaptop%26psc%3D1&qualifier=1499124889&id=6267744216991374&widgetName=sp_atf",
      features: [
        {
          description: "Display Size",
          value: "17 inches",
        },
        {
          description: "Hardware Platform",
          value: "PC",
        },
      ],
      price: 68.36,
      shipping: 7.99,
    },
    {
      key: "B01LZ2WZGH",
      category: "mobile",
      name: "Manfrotto MB LF-WN-BP camera & laptop backpack for DSLR Lifestyle Windsor, grey",
      seller: "Manfrotto",
      wholePrice: "169",
      priceFraction: "88",
      stock: 55,
      star: 2,
      starCount: 2899,
      img: "https://images-na.ssl-images-amazon.com/images/I/51mEVhwXGKL._AC_US218_.jpg",
      url: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_electronics_sr_pg1_2?ie=UTF8&adId=A04941221ULRUNSJPY1RW&url=https%3A%2F%2Fwww.amazon.com%2FManfrotto-MB-LF-WN-BP-backpack-Lifestyle%2Fdp%2FB01LZ2WZGH%2Fref%3Dsr_1_2%3Fs%3Delectronics%26ie%3DUTF8%26qid%3D1499124890%26sr%3D1-2-spons%26keywords%3Dlaptop%26psc%3D1&qualifier=1499124889&id=6267744216991374&widgetName=sp_atf",
      features: [],
      price: 169.88,
      shipping: 3.99,
    },
    {
      key: "B01K1IO3QW",
      category: "laptop",
      name: "Acer Aspire E 15 E5-575-33BM 15.6-Inch Full HD Notebook (Intel Core i3-7100U Processor 7th Generation , 4GB DDR4, 1TB 5400RPM Hard Drive, Intel HD Graphics 620, Windows 10 Home), Obsidian Black",
      seller: "Acer",
      wholePrice: "349",
      priceFraction: "99",
      stock: 3,
      star: 3,
      starCount: 3525,
      img: "https://images-na.ssl-images-amazon.com/images/I/41HfDkXXyeL._AC_US218_.jpg",
      url: "https://www.amazon.com/Acer-E5-575-33BM-15-6-Inch-Processor-Generation/dp/B01K1IO3QW/ref=sr_1_3?s=electronics&ie=UTF8&qid=1499124890&sr=1-3&keywords=laptop",
      features: [
        {
          description: "Display Size",
          value: "15.6 inches",
        },
        {
          description: "Computer Memory Size",
          value: "4 GB",
        },
        {
          description: "Operating System",
          value: "Windows 10",
        },
        {
          description: "Hard Disk Size",
          value: "1000 GB",
        },
        {
          description: "Cpu Model Family",
          value: "core i3",
        },
      ],
      price: 349.99,
      shipping: 3.99,
    },
    {
      key: "B017LDNLIG",
      category: "android",
      name: "Tracfone Alcatel Onetouch Pixi Glitz A463BG",
      seller: "Tracfone",
      wholePrice: "19",
      priceFraction: "94",
      stock: 85,
      star: 3,
      starCount: 381,
      img: "https://images-na.ssl-images-amazon.com/images/I/51QdgznaNTL._AC_US218_.jpg",
      url: "https://www.amazon.com/Tracfone-Alcatel-Onetouch-Glitz-A463BG/dp/B017LDNLIG/ref=sr_1_6?s=electronics&ie=UTF8&qid=1499124822&sr=1-6&keywords=android",
      features: [
        {
          description: "Display Size",
          value: "3.5",
        },
        {
          description: "Computer Memory Size",
          value: "2 GB",
        },
        {
          description: "Operating System",
          value: "Android 4.4 KitKat",
        },
        {
          description: "Display Type",
          value: "LCD",
        },
        {
          description: "Special Feature",
          value: "smartphone",
        },
      ],
      price: 19.94,
      shipping: 7.99,
    },
    {
      key: "B018IZ0SWI",
      category: "android",
      name: "BLU Advance 5.0 - Unlocked Dual Sim Smartphone - US GSM - Black",
      seller: "BLU",
      wholePrice: "59",
      priceFraction: "99",
      stock: 10,
      star: 3,
      starCount: 395,
      img: "https://images-na.ssl-images-amazon.com/images/I/41mXjdLezRL._AC_US218_.jpg",
      url: "https://www.amazon.com/BLU-Advance-5-0-Unlocked-Smartphone/dp/B018IZ0SWI/ref=sr_1_7?s=electronics&ie=UTF8&qid=1499124822&sr=1-7&keywords=android",
      features: [
        {
          description: "Display Size",
          value: "5 inches",
        },
        {
          description: "Computer Memory Size",
          value: "4 GB",
        },
        {
          description: "Operating System",
          value: "Android",
        },
        {
          description: "Wireless Communication Technology",
          value: "GSM, 3G, 4G",
        },
        {
          description: "Cpu Model Speed",
          value: "1 GHz",
        },
      ],
      price: 59.99,
      shipping: 3.99,
    },
    {
      key: "B01N4HS7B8",
      category: "android",
      name: "Smart tv box Wechip V5 Android 6.0 Marshmallow 2g 16g Amlogic S905X quad core 4K Dual WiFi",
      seller: "Wechip",
      wholePrice: "53",
      priceFraction: "99",
      stock: 34,
      star: 4,
      starCount: 4740,
      img: "https://images-na.ssl-images-amazon.com/images/I/41q+adG0lNL._AC_US218_.jpg",
      url: "https://www.amazon.com/Smart-Wechip-Android-Marshmallow-Amlogic/dp/B01N4HS7B8/ref=sr_1_8?s=electronics&ie=UTF8&qid=1499124822&sr=1-8&keywords=android",
      features: [],
      price: 53.99,
      shipping: 7.99,
    },
    {
      key: "B01LX0JZUM",
      category: "android",
      name: "ONSON Android Charger Cable,3Pack 10FT Extra Long Nylon Braided High Speed 2.0 USB to Micro USB Charging Cord Fast Charger Cable for Samsung Galaxy S7/S6 Edge,Note 5/4,HTC,LG,Nexus(Gray White)",
      seller: "ONSON",
      wholePrice: "11",
      priceFraction: "99",
      stock: 8,
      star: 3,
      starCount: 2636,
      img: "https://images-na.ssl-images-amazon.com/images/I/51P8qI8KzNL._AC_US218_.jpg",
      url: "https://www.amazon.com/ONSON-Android-Charger-Braided-Charging/dp/B01LX0JZUM/ref=sr_1_9?s=electronics&ie=UTF8&qid=1499124822&sr=1-9&keywords=android",
      features: [],
      price: 11.99,
      shipping: 3.99,
    },
    {
      key: "B072NYXDLY",
      category: "android",
      name: '5.0" Phone Unlocked Dual Sim Quad Core 8GB Android 5.1 Cellphone Gold by TIMMY',
      seller: "Timmy",
      wholePrice: "68",
      priceFraction: "99",
      stock: 14,
      star: 5,
      starCount: 1182,
      img: "https://images-na.ssl-images-amazon.com/images/I/411fzxxuuFL._AC_US218_.jpg",
      url: "https://www.amazon.com/Phone-Unlocked-Android-Cellphone-TIMMY/dp/B072NYXDLY/ref=sr_1_10?s=electronics&ie=UTF8&qid=1499124822&sr=1-10&keywords=android",
      features: [
        {
          description: "Display Size",
          value: "5.0 inches",
        },
        {
          description: "Operating System",
          value: "google android",
        },
      ],
      price: 68.99,
      shipping: 3.99,
    },
    {
      key: "B071RK857H",
      category: "android",
      name: "QacQoc A12 Pro Android 6.0 TV BOX Amlogic S912 Octa-Core [2G DDR3/16G eMMC] Dual Wifi 2.4G/5G AC OTA Update 4K 1000M Android TV Box",
      seller: "QacQoc",
      wholePrice: "65",
      priceFraction: "99",
      stock: 1,
      star: 5,
      starCount: 1836,
      img: "https://images-na.ssl-images-amazon.com/images/I/51+GT3mluJL._AC_US218_.jpg",
      url: "https://www.amazon.com/QacQoc-A12-Android-Amlogic-Octa-Core/dp/B071RK857H/ref=sr_1_11?s=electronics&ie=UTF8&qid=1499124822&sr=1-11&keywords=android",
      features: [
        {
          description: "Connectivity Technology",
          value: "wi-fi ready",
        },
        {
          description: "Special Feature",
          value: "network ready",
        },
      ],
      price: 65.99,
      shipping: 7.99,
    },
    {
      key: "B06XWMQRS6",
      category: "android",
      name: "QacQoc M9C max Android 6.0 Marshmallow TV Box New Amlogic S905X Chipset [2G DDR3/16G eMMC] 4K Smart Box Unlocked 2.4G WIFI Media Player",
      seller: "QacQoc",
      wholePrice: "49",
      priceFraction: "99",
      stock: 54,
      star: 4,
      starCount: 2618,
      img: "https://images-na.ssl-images-amazon.com/images/I/41Sx5HrzuhL._AC_US218_.jpg",
      url: "https://www.amazon.com/QacQoc-Android-Marshmallow-Amlogic-Unlocked/dp/B06XWMQRS6/ref=sr_1_12?s=electronics&ie=UTF8&qid=1499124822&sr=1-12&keywords=android",
      features: [],
      price: 49.99,
      shipping: 3.99,
    },
    {
      key: "B01N41AKT3",
      category: "android",
      name: "Antimi Sweatproof Smart Watch Phone for Android HTC Sony Samsung LG Google Pixel /Pixel and iPhone 5 5S 6 6 Plus 7 Smartphones Black",
      seller: "Antimi",
      wholePrice: "25",
      priceFraction: "99",
      stock: 66,
      star: 3,
      starCount: 3316,
      img: "https://images-na.ssl-images-amazon.com/images/I/41Z3XFc1-5L._AC_US218_.jpg",
      url: "https://www.amazon.com/Antimi-Sweatproof-Android-Samsung-Smartphones/dp/B01N41AKT3/ref=sr_1_13?s=electronics&ie=UTF8&qid=1499124822&sr=1-13&keywords=android",
      features: [
        {
          description: "Operating System",
          value: "Android/iOS",
        },
        {
          description: "Hardware Platform",
          value: "Android",
        },
      ],
      price: 25.99,
      shipping: 3.99,
    },
    {
      key: "B06XY8W1DC",
      category: "android",
      name: "SUNNZO T2 TV Box Streaming Devices for TV/Streaming Media Players Android 6.0 4K WIFI",
      seller: "sunnzo",
      wholePrice: "29",
      priceFraction: "99",
      stock: 97,
      star: 3,
      starCount: 4951,
      img: "https://images-na.ssl-images-amazon.com/images/I/51sZTRzpQjL._AC_US218_.jpg",
      url: "https://www.amazon.com/T2-Streaming-Devices-Players-Android/dp/B06XY8W1DC/ref=sr_1_14?s=electronics&ie=UTF8&qid=1499124822&sr=1-14&keywords=android",
      features: [],
      price: 29.99,
      shipping: 7.99,
    },
    {
      key: "B01N0VVQ13",
      category: "android",
      name: "Goodsail Micro USB Cables, 3Pack 6FT/2M durable Nylon Braided High Charging Speed USB 2.0 A Male to Micro USB Cord For Samsung, HTC, Motorola, Blackberry, Tablets and Android Smartphones Blue Black",
      seller: "Goodsail",
      wholePrice: "9",
      priceFraction: "99",
      stock: 80,
      star: 4,
      starCount: 4758,
      img: "https://images-na.ssl-images-amazon.com/images/I/51+MK7D4pLL._AC_US218_.jpg",
      url: "https://www.amazon.com/Goodsail-Charging-Motorola-Blackberry-Smartphones/dp/B01N0VVQ13/ref=sr_1_15?s=electronics&ie=UTF8&qid=1499124822&sr=1-15&keywords=android",
      features: [],
      price: 9.99,
      shipping: 7.99,
    },
    {
      key: "B01JOT42JW",
      category: "android",
      name: "2017 Model GooBang Doo Android 6.0 TV Box, Abox Android TV Box Amlogic S905X 64 Bits and True 4K Playing",
      seller: "GooBang Doo",
      wholePrice: "39",
      priceFraction: "99",
      stock: 54,
      star: 3,
      starCount: 856,
      img: "https://images-na.ssl-images-amazon.com/images/I/41sPPh71RXL._AC_US218_.jpg",
      url: "https://www.amazon.com/GooBang-Doo-Android-Amlogic-Playing/dp/B01JOT42JW/ref=sr_1_16?s=electronics&ie=UTF8&qid=1499124822&sr=1-16&keywords=android",
      features: [],
      price: 39.99,
      shipping: 3.99,
    },
    {
      key: "B06Y5PY61J",
      category: "android",
      name: "RBSCH M96X Smart Tv Box Android 6.0 Amlogic S905X Quad Core 64bit 2GB / 8GB 4K HD 100Mbps LAN Wifi Mini Home player",
      seller: "RBSCH",
      wholePrice: "44",
      priceFraction: "99",
      stock: 34,
      star: 5,
      starCount: 1151,
      img: "https://images-na.ssl-images-amazon.com/images/I/41c3yiJtjCL._AC_US218_.jpg",
      url: "https://www.amazon.com/RBSCH-Android-Amlogic-100Mbps-player/dp/B06Y5PY61J/ref=sr_1_17?s=electronics&ie=UTF8&qid=1499124822&sr=1-17&keywords=android",
      features: [],
      price: 44.99,
      shipping: 7.99,
    },
  ];

  // useState hook
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState([]);
  // button handler
  const handleAddProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="mainContent">
      <div className="mainContentLeft">
        {products.map((product) => (
          <Shop
            key={product.key}
            product={product}
            handleAddProduct={handleAddProduct}
          />
        ))}
      </div>

      <div className="mainContentRight">
        <Cart cart={cart} />
      </div>
    </div>
  );
}

export default FakeData;
