interface ITypographyItemParams {
  fontSize: string;
  fontWeight?: string;
  fontStyle?: string;
  fontFamily?: string;
}

export function makeTypographyItem({
  fontSize,
  fontStyle,
  fontWeight,
  fontFamily
}: ITypographyItemParams) {
  let result = `font-size: ${fontSize}; `;

  result += fontFamily ? `font-family: ${fontFamily};` : '';
  result += fontStyle ? `font-style: ${fontStyle};` : '';
  result += fontWeight ? `font-weight: ${fontWeight};` : '';

  return result;
}
