import axios from "axios";
import cheerio from "cheerio";

export const fetchCommodityPrices = async () => {
  try {
    const res = await axios.get("https://infopangan.jakarta.go.id/");
    // ...parsing dengan cheerio...
    // return array objek harga
    return [
      { name: "Beras Medium Penggilingan", price: "Rp 7.100", change: "+100" },
      // dst
    ];
  } catch (err) {
    return [];
  }
};