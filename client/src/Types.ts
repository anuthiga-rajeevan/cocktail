export enum LoadingStatus {
  idle = 'idle',
  loading = 'loading',
  success = 'success',
  failed = 'failed',
}

export enum Theme {
  dark = 'dark',
  light = 'light',
}

export interface ThemeProps {
  sizes: {
    none: string;
    xxSmall: string;
    xSmall: string;
    small: string;
    medium: string;
    large: string;
    xLarge: string;
    xxLarge: string;
    xxxLarge: string;
  },
  getSpacing: (x: number) => string;
  colors: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
  }
}

export interface CocktailBase {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

export interface Cocktail extends CocktailBase {
  strCategory?: string;
  strDrinkAlternate?: string;
  strTags?: string;
  strVideo?: string;
  strIBA?: string;
  strAlcoholic?: string;
  strGlass?: string;
  strInstructions?: string;
  strInstructionsES?: string;
  strInstructionsDE?: string;
  strInstructionsFR?: string;
  strInstructionsIT?: string;
  "strInstructionsZH-HANS"?: string;
  "strInstructionsZH-HANT"?: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strIngredient7?: string;
  strIngredient8?: string;
  strIngredient9?: string;
  strIngredient10?: string;
  strIngredient11?: string;
  strIngredient12?: string;
  strIngredient13?: string;
  strIngredient14?: string;
  strIngredient15?: string;
  strMeasure1?: string;
  strMeasure2?: string;
  strMeasure3?: string;
  strMeasure4?: string;
  strMeasure5?: string;
  strMeasure6?: string;
  strMeasure7?: string;
  strMeasure8?: string;
  strMeasure9?: string;
  strMeasure10?: string;
  strMeasure11?: string;
  strMeasure12?: string;
  strMeasure13?: string;
  strMeasure14?: string;
  strMeasure15?: string;
  strImageSource?: string;
  strImageAttribution?: string;
  strCreativeCommonsConfirmed?: string;
  dateModified?: string;
}

export type Filters = {
  strCategory?: string;
  strGlass?: string;
  strIngredient1?: string;
  strAlcoholic?: string;
}

export type FilterResponse = {
  alcohols: Array<string | undefined>;
  ingrediants: Array<string | undefined>;
  glasses: Array<string | undefined>;
  categories: Array<string | undefined>;
  alphabets: Array<string>;
}
