import { Component } from 'react'
import tinydate from 'tinydate'
import Link from 'next/link'

const time = tinydate('{DD}/{MM}/{YYYY}')

export default (props) => (
  <div className='film__card rel'>
    <style jsx>{`
      .color__block {
        height: 0;
        padding-bottom: 80%;
      }
      .film__card {
        width: 100%;
        margin-bottom: 30px;
      }
      @media (min-width: 45em) {
        .film__card {
          width: 30%;
        }
      }
      @media (min-width: 65em) {
        .film__card {
          width: 22%;
        }
      }
    `}</style>
    <Link href={`/film?title=${props.fields.slug}`}><a className='abs fill fit'></a></Link>
    <div className='color__block' style={{backgroundColor: props.fields.color}}></div>
    <h3><Link href={`/film?title=${props.fields.slug}`}><a>{props.fields.title}</a></Link></h3>
    {props.fields.releasedAt && (<span className='small'>{time(new Date(props.fields.releasedAt))}</span>)}
  </div>
)