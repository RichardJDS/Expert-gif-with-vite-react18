import { render, screen } from "@testing-library/react";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en el componente GifItem,', () => { 
    const img = {
        title:"Paisajes",
        url: "https://paisajes.jpg/"
    }
    test('Debe de hacer Match con el SnapShot', () => { 
        const {container} = render(<GifItem img={img}/>);
        expect(container).toMatchSnapshot();
    });
    test('Debe de mostrar la imagen con la url y el alt indicado', () => { 
        render(<GifItem img={img} />);
        const {src, alt} = screen.getByRole("img");
        screen.debug();
        expect(src).toBe(img.url);
        expect(alt).toBe(img.title);
     });
     test('should to show the title in the image', () => { 
        render(<GifItem img={img} />);
        expect(screen.getByText(img.title)).toBeTruthy();
      });
 });