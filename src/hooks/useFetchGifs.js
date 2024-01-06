import React, { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

/* Custom Hooks */
export const useFetchGifs = ( category ) => {
  
  const [ state, setState ] = useState({
    data: [],
    loading: true
  })

    /* Se usa para renderizar solo cuando cambien sus dependencias */
    useEffect(() => {

        getGifs( category )
          .then( imgs => {
            setState({
              data: imgs,
              loading: false
            })
          })

    }, [ category ])

  return state // data: [], loading: true
}
