enum Languages {
  es = 'es',
  en = 'en',
}

export const isPartOfLanguages = (value: string) => value in Languages;
