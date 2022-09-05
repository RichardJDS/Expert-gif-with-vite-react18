import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas con componente GifExpertApp', () => { 
    test('Captura del propducto renderizado', () => { 
        render(<GifExpertApp/>)
        screen.debug();
     })

 });