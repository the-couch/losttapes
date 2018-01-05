import { Component } from 'react'
import tinydate from 'tinydate'

const time = tinydate('{DD}/{MM}/{YYYY}')

export default (props) => (
  <div>
    <h3>{props.fields.title}</h3>
    {props.fields.releasedAt && (<span className='small'>{time(new Date(props.fields.releasedAt))}</span>)}
  </div>
)