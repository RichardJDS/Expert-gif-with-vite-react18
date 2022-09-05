import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";
describe('Pruebas en el componente AddCategory', () => { 
    test('Debe de cambiar el valor en la caja de texto', () => { 
        render(<AddCategory onNewCategory={()=>{}} />);
        const input = screen.getByRole("textbox");

        fireEvent.input(input,{target:{value: "Saitama"}});
        console.log(input.value);
        // console.log(input); getByRole devuelve el producto renderizado
        // del elemento "textbox" thats means input box
        expect(input.value).toBe("Saitama");
     });

     test('should call onNewCategory if inputValue is called', () => { 
        const inputValue = "Saitama";
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>)
        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");
        fireEvent.input(input, {target:{value:inputValue}});
        console.log(screen.getByText(inputValue));
        screen.debug();
        fireEvent.submit(form);
        // screen.debug();
        expect(onNewCategory).toBeCalled();
        expect(onNewCategory).toBeCalledTimes(1);
        expect(input.value).toBe("");
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
      });

      test('No debe de llamar el onNewCategory si inputValue es vacio', () => { 
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>)
        const form = screen.getByRole("form");
        fireEvent.submit(form);
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
       });
 });