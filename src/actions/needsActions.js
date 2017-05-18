
export const NA_CHANGE_MAXPRICE = 'NA_CHANGE_MAXPRICE';
export const NA_CHANGE_AVAILABILITY = 'NA_CHANGE_AVAILABILITY';

export function changeMaxprice(price)
{
  return {type: NA_CHANGE_MAXPRICE, price};
}
export function changeAvailability(weeks)
{
  return {type: NA_CHANGE_AVAILABILITY, weeks};
}
