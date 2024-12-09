import { shouldBlockUrl } from './utils/blockChecker';
import { createBlockPage } from './templates/blockPage';

// Listener para requisições web
chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    if (shouldBlockUrl(details.url)) {
      return {
        redirectUrl: 'data:text/html;charset=utf-8,' + encodeURIComponent(createBlockPage())
      };
    }
    return { cancel: false };
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);

// Log para confirmar que a extensão está ativa
console.log('Casino Blocker está ativo e protegendo você!');