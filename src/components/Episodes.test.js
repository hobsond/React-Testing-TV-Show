import React from 'react'
import { render, waitFor, } from '@testing-library/react'

import Episodes from './Episodes'
import {data} from './data'

test('Episode Test ',()=>{
    console.log(data.data._embedded.episodes)
    render( <Episodes episodes={data.data._embedded.episodes} />)
    
})