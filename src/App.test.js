import React from 'react'
import {render, waitFor,} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import fetchShow  from './api/fetchShow'
import {data} from './components/data'
import App from './App'


jest.mock('./api/fetchShow')



// test('tes to see if app renders',()=>{
//     render(<App />)
    
// } )


test('tes to see if app renders', async ()=>{
    fetchShow.mockResolvedValueOnce(data)

    const {getByText,getAllByText} = render(<App />)

    await waitFor( ()=>{
    const getSeason =  getByText(/select a season/i)
  

    

      
    } )
    userEvent.click(getByText(/select a season/i))
    expect(getAllByText(/season /i)).toHaveLength(4)
} )