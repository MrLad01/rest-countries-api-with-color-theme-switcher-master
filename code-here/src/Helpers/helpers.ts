
export function searchFunction(
    data: any[],
    keys: string[],
    query: string
  ): any[] {
    return data.filter((item) =>
      keys.some((key) => {
        const value = item[key];
        if (value && typeof value === "string") {
          return value.toLowerCase().includes(query);
        }
        return false;
      })
    );
  }
  
  export function filterFunction(data: any[], key: string, query: string): any[] {
    return data.filter((item) => {
      const value = item[key];
      if (value && typeof value === "string") {
        return value.toLowerCase().includes(query);
      }
      return false;
    });
  }

  export function toCamelCase(text: string){
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }

  export const numberWithCommas = (number: number) => {
    return number.toLocaleString();
  };