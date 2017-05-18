
  export {auDoSort, auDynamicSort, addDaysToDate};

  function auDoSort(sortBy, arrayToSort)
  {
    if(arrayToSort.length < 1) //Only sort if > 1 matching
      return arrayToSort;

    if(sortBy === undefined || sortBy === '') //Need something to sort by
      return arrayToSort;

    console.log("Sorting: " + sortBy);

    return arrayToSort.sort(auDynamicSort(sortBy));
  }

  function auDynamicSort(sortBy) {
      var sortOrder = 1;
      if(sortBy[0] === "-") {
          sortOrder = -1;
          sortBy = sortBy.substr(1);
      }
      return function (a,b) {
          //a = JSON.parse(a);
          //b = JSON.parse(b);
          var result = (a[sortBy] < b[sortBy]) ? -1 : (a[sortBy] > b[sortBy]) ? 1 : 0;
          return result * sortOrder;
      }
  }

  function addDaysToDate(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
