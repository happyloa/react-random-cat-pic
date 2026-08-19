import { forwardRef, type ComponentPropsWithoutRef } from "react";

/**
 * RandomCatPic 支援的屬性。
 *
 * 除了 src 以外，所有原生 img 屬性都可以使用；圖片來源固定為 CATAAS。
 */
export type RandomCatPicProps = Omit<
  ComponentPropsWithoutRef<"img">,
  "src" | "alt"
> & {
  /**
   * 圖片的替代文字。
   *
   * 預設值為 Random Cat。
   */
  alt?: string;
};

/**
 * 顯示一張來自 CATAAS 的隨機貓咪圖片。
 */
export const RandomCatPic = forwardRef<HTMLImageElement, RandomCatPicProps>(
  function RandomCatPic({ alt = "Random Cat", ...imageProps }, ref) {
    return (
      <img
        {...imageProps}
        ref={ref}
        src="https://cataas.com/cat"
        alt={alt}
      />
    );
  },
);

export default RandomCatPic;
