import {render, screen} from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");
const category = "One punch"
describe('Pruebas en el componente GifGrid', () => { 
    test('Debe de mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images:[],
            loading:true
        });
        render(<GifGrid category={category}/>);
        // screen.debug();
        // console.log(screen.getByText("Cargando....."))
        expect(screen.getByText("Cargando....."));
        expect(screen.getByText(category));
     });
     test('Debe de mostrar items cuando se carga useFetachGifs', () => { 
        const gifs = [
            {
            id:123,
            title:'Hola mundo',
            url:'https://localhost/saitama1.jpg'
            },
            {
                id:1568,
                title:'Prueba',
                url:'https://localhost/paisaje.jpg'
            }
        ]
        useFetchGifs.mockReturnValue({
            images:gifs,
            loading:false
        });
        render(<GifGrid category={category}/>);
        // screen.debug();
        expect(screen.getAllByRole('img').length).toBe(2);
      })
 });