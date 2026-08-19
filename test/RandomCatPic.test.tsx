import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import RandomCatPic from "../src";

describe("RandomCatPic", () => {
  it("renders a CATAAS image with an accessible default label", () => {
    const markup = renderToStaticMarkup(<RandomCatPic />);

    expect(markup).toContain('src="https://cataas.com/cat"');
    expect(markup).toContain('alt="Random Cat"');
  });

  it("forwards native image props and supports custom alternative text", () => {
    const markup = renderToStaticMarkup(
      <RandomCatPic
        alt="A sleeping cat"
        className="cat-photo"
        height={240}
        loading="lazy"
        width={320}
      />,
    );

    expect(markup).toContain('alt="A sleeping cat"');
    expect(markup).toContain('class="cat-photo"');
    expect(markup).toContain('height="240"');
    expect(markup).toContain('loading="lazy"');
    expect(markup).toContain('width="320"');
  });
});
