/**
 * @function formatCurrency
 * Format number as currency (US Dollars)
 *
 * @param {number} currency
 * @returns {string} number formatted as currency.
 *
 * @example
 *   formatCurrency(0)
 *   // => $0.00
 *
 * @example
 *   formatCurrency(15)
 *   // => $15.00
 *
 */
export function formatCurrency(currency) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(currency);
}
