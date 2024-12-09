import { casinoDomains, containsCasinoKeywords } from './casinoList';

export function shouldBlockUrl(url: string): boolean {
  try {
    const hostname = new URL(url).hostname;
    return casinoDomains.some(domain => hostname.includes(domain)) || 
           containsCasinoKeywords(hostname);
  } catch (error) {
    console.error('Error checking URL:', error);
    return false;
  }
}