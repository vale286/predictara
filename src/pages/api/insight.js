// pages/api/insight.js
import { fetchNewsTrends } from '@/services/scrapers/newsScraper';
import { fetchWeather } from '@/services/scrapers/weatherFetcher';
import { fetchCommodityPrices } from '@/services/scrapers/commodityPrice';
import { analyzeMarketTrends } from '@/services/ai/geminiHelper';

export default async function handler(req, res) {
  const [news, weather, prices] = await Promise.all([
    fetchNewsTrends(),
    fetchWeather("Jakarta"),
    fetchCommodityPrices(),
  ]);

  const insight = await analyzeMarketTrends(news, weather, prices);

  res.status(200).json({ insight });
}
