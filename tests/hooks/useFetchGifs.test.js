import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el customHooks', () => { 
    test('Debe de regresar el estado inicial', () => { 
        
        const {result} = renderHook(()=>useFetchGifs('One punch'));
        /* renderHook devuelve un objeto   console.log(result); 
        {
      result: { current: { images: [], loading: true } },
      rerender: [Function: rerender],
      unmount: [Function: unmount]
        } a nosotros solo nos interesa el result, por eso haremos una deses
        tructuracion en la propiedad result 
    */
        const {images, loading} = result.current;
        expect(images.length).toBe(0);
        expect(loading).toBeTruthy();
     });
     test('Debe de retornar ñas imagenes y el loading false',async () => { 
            const {result} = renderHook(()=>useFetchGifs('One punch'));
            await waitFor(
                ()=> expect(result.current.images.length).toBeGreaterThan(0)
            );

            const {images, loading} = result.current;
            expect(images.length).toBeGreaterThan(0);
            expect(loading).toBeFalsy();
      })
 });