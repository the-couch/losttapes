import { Component } from 'react'
import tinydate from 'tinydate'

const time = tinydate('{DD}/{MM}/{YYYY}')

export default (props) => (
  <div className='film__card'>
    <style jsx>{`
      .color__block {
        height: 0;
        padding-bottom: 40%;
      }
      .film__card {
        width: 100%;
      }
      @media (min-width: 45em) {
        .film__card {
          width: 30%;
        }
        .color__block {
          padding-bottom: 80%;
        }
      }
      @media (min-width: 65em) {
        .film__card {
          width: 22%;
        }
      }
    `}</style>
    <div className='color__block' style={{backgroundColor: props.fields.color}}></div>
    <h3>{props.fields.title}</h3>
    {props.fields.releasedAt && (<span className='small'>{time(new Date(props.fields.releasedAt))}</span>)}
  </div>
)