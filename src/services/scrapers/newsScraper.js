import axios from "axios";
import cheerio from "cheerio";

export const fetchNewsTrends = async () => {
  try {
    const response = await axios.get("https://news.google.com/search?q=harga+sayur");
    // ...parsing dengan cheerio...
    // return array string berita
    return ["Contoh berita 1", "Contoh berita 2"];
  } catch (err) {
    return [];
  }
};