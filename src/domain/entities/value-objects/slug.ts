export class Slug {
  public value: string;
  constructor(value: string) {
    this.value = value;
  }

  /**
   * Recebe uma string e transforma em uma slug.
   * Exemplo: Um titulo de exemplo => um-titulo-de-exemplo
   * @param text {string}
   */
  static createFromText(text: string) {
    const slugText = text
      .normalize("NFKD")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/_/g, "-")
      .replace(/--+/g, "-")
      .replace(/-$/g, "");
    return new Slug(slugText);
  }
}
