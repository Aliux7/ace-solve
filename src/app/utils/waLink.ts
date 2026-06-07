const WA_PHONE = "6285173135780";

export function buildWALink(message: string, source: string): string {
  const text = source ? `${source} ${message}` : message;
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}`;
}
