import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("Product Image Gallery", () => {
  it("should render nothing if given an empty array", () => {
    const imageUrls: string[] = [];
   const {container} = render(<ProductImageGallery imageUrls={imageUrls} />);
    // const img = screen.queryByRole("img");
    expect(container).toBeEmptyDOMElement();
  });

  it("should render images if given an array", () => {
    const imageUrls: string[] = [
      "https://url1.com",
      "https://url2.com",
      "https://url3.com",
      "https://url4.com",
      "https://url5.com",
    ];
    render(<ProductImageGallery imageUrls={imageUrls} />);
    const images = screen.getAllByRole("img")
    expect(images).toHaveLength(imageUrls.length);

    imageUrls.forEach((url,index) => {
      expect(images[index]).toHaveAttribute('src', imageUrls[index])
    });
  });
});
