import { render } from "@testing-library/svelte";
import { test, expect, it, describe, assert } from "vitest";
import ArtComp from "../lib/ArtComp.svelte";

describe("ArtComp", () => {

    it("should render the component", () => {
        const data = {
            headline: "Test Headline",
            snippet: "Test snippet text.",
            image: "https://example.com/image.jpg",
            caption: "Test caption",
        };

        const { getByText } = render(ArtComp, {
            props:{
                data
            }
        });

        console.log(typeof document);

        expect(getByText('Test Headline')).toBeInTheDocument();
        expect(getByText('Test snippet text.')).toBeInTheDocument();
        
    })
})

describe("ArtComp", () => {

    it("should not render image if undefined", () => {
        const data = {
            headline: "No Image Headline",
            snippet: "No image here.",
            image: undefined,
            caption: "This should not appear",
        };

        const { getByText, queryByRole } = render(ArtComp, {
            props: { data },
        });

        expect(getByText("No Image Headline")).toBeTruthy();
        expect(queryByRole("img")).toBeNull();
    });

})
