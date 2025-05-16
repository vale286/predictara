import { getCommodityPrices } from '@/services/scrapers/commodityprice';

export default async function handler(req, res) {
  try {
    const data = await getCommodityPrices();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: 'Gagal mengambil data', error: err.message });
  }
}
