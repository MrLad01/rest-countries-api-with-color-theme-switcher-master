// for the searching activity
export function searchFunction(
    data: any[], // the data containing all the countries and their details
    keys: string[], // for the selected values you want to search in
    query: string // for the values in the search input
  ): any[] {
    return data.filter((item) =>
      keys.some((key) => {
        const value = item[key];
        if (value && typeof value === "string") {
          return value.toLowerCase().includes(query);
        } else if (value && typeof value === "object" && value.length === 1) {
          return value[0].toLowerCase().includes(query);
        } else if (value && typeof value === "object" && value.length !== 1 && value.common){
          return value?.common.toLowerCase().includes(query);
        }
        return false;
      })
    );
  }

  // for the filtering
  export function filterFunction(data: any[], key: string, query: string): any[] {
    return data.filter((item) => {
      const value = item[key];
      if (value && typeof value === "string") {
        return value.toLowerCase().includes(query);
      }
      return false;
    });
  }

  // for converting the text into a camelcase
  export function toCamelCase(text: string){
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }

  // to add commas to the nummbers from 1,000 upwards
  export const numberWithCommas = (number: number) => {
    return number.toLocaleString();
  };