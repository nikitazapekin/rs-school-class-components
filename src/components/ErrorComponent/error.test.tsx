 
import ErrorComponent from ".";

import { render, 

 } from "@testing-library/react";


describe("TodoItem", ()=> {
    it('dc', ()=> {
     
       const component = render(
        <ErrorComponent />
        )
        expect(component).toMatchSnapshot()
    })

})
 