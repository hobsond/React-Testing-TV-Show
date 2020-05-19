import React from 'react'
import { render, waitFor, } from '@testing-library/react'

import Episodes from './Episodes'
import {data} from './data'

test('Episode Test ',()=>{
    render( <Episodes episodes={data.data._embedded.episodes} />)
    
})
test('check for episodes',()=>{
    const {getByText,getAllByTestId}= render( <Episodes episodes={data.data._embedded.episodes} />)

    const episodes = getAllByTestId(/episode/i)
    expect(episodes).toHaveLength(7)
})