import { Component } from 'react'
import tinydate from 'tinydate'
import Link from 'next/link'

const time = tinydate('{DD}/{MM}/{YYYY}')

export default (props) => (
  <div className='film__card rel'>
    <style jsx>{`
      .color__block {
        height: 0;
        background-size: cover;
        background-position: center center;
        padding-bottom: 80%;
      }
      .film__card {
        width: 100%;
        margin-bottom: 30px;

      }
      @media (min-width: 45em) {
        .film__card {
          width: 49%;
        }
      }
      @media (min-width: 68em) {
        .film__card {
          width: 23%;
        }
      }
    `}</style>
    <Link prefetch href={`/film?title=${props.fields.slug}`} as={props.fields.slug}><a className='abs z5 fill fit'></a></Link>
    <div className='color__block' style={{backgroundImage: 'url(' + props.fields.cover.fields.file.url + ')'}} />
    <h3 className='caps ls1'><Link href={`/film?title=${props.fields.slug}`}><a>{props.fields.title}</a></Link></h3>
    {props.fields.releasedAt && (<span className='small'>{time(new Date(props.fields.releasedAt))}</span>)}
  </div>
)
