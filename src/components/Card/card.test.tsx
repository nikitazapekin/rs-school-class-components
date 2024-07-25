import { MemoryRouter } from "react-router-dom";
import Card from "./index.tsx"
//import * as reduxHooks from "react-redux"
import { render } from "@testing-library/react";
//import * as actions from "../../store/slices/selectedElementsSlice"
jest.mock('react-redux')
//const  mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch')



describe("TodoItem", ()=> {
    it('dc', ()=> {
      //  mockedDispatch.mockResolvedValue(jest.fn())
        const component = render(
            <MemoryRouter>

            <Card
           user={
            {
                login: "Nik",
                id: 1,
                node_id: "1",
                avatar_url: "dcdsc",
                gravatar_id: "kjj",
                url: "lmd",
                html_url: "ldm",
                followers_url: "ldmv",
                following_url: "nkdv",
                gists_url: "ndls",
                starred_url: "cmk",
                subscriptions_url: "kekc",
                organizations_url: "kdc",
                repos_url: "mld",
                events_url: "kmd",
                received_events_url: "dclm",
                type: "dlcm",
                site_admin: false,
                score: 22
            }
           }
            />
            </MemoryRouter>
        )
        expect(component).toMatchSnapshot()
    })
})
/*
import TodoItem from "../TodoItem";
import * as reduxHooks from "react-redux"
import { render, screen, fireEvent } from "@testing-library/react";
import * as actions from "../store/slices/todoSlice";


jest.mock('react-redux')


const  mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch')

describe("TodoItem", ()=> {
    it('dc', ()=> {
        mockedDispatch.mockResolvedValue(jest.fn())
        const component = render(
            <TodoItem 
            id="12"
            text="redux"
            completed={false}
            />
        )
        expect(component).toMatchSnapshot()
    })


    it('', ()=> {
        const dispatch =jest.fn()
        mockedDispatch.mockReturnValue(dispatch)

        const mockedToggleComplete = jest.spyOn(actions, 'toggleComplete')

        const  mockedRemoveTodo = jest.spyOn(actions, 'removeTodo')
        render(
            <TodoItem 
            id="12"
            text="redux"
            completed={false}
            />
        )
        fireEvent.click(screen.getByRole('checkbox'))
        expect(dispatch).toHaveBeenCalledTimes(0)
        expect(mockedToggleComplete).toHaveBeenCalledWith('12')

        //для проверки ремова сделаем езе клик
        fireEvent.click(screen.getByRole('button'))

        expect(dispatch).toHaveBeenCalledTimes(0)
        expect(mockedRemoveTodo).toHaveBeenCalledWith('12')
    })
})
    */