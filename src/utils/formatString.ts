export function capitalize(str: string) {
  const stringArray = str.split(" ");
  const capitalizedStringArray = stringArray.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
    return capitalizedStringArray.join(" ");
}
