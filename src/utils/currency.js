export const USD_TO_VND_RATE = 24500;

export function formatVndFromUsd(valueUsd) {
  if (typeof valueUsd !== 'number') return '';
  const valueVnd = Math.round(valueUsd * USD_TO_VND_RATE);
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    maximumFractionDigits: 0,
  }).format(valueVnd);
}
