import React from 'react'
import { StaticImageData } from 'next/image'

import phy1 from './images/phyrexian-alterz/phy1.png'
import phy2 from './images/phyrexian-alterz/phy2.png'
import phy3 from './images/phyrexian-alterz/phy3.png'

import mis1 from './images/international-misplayers-club/mis1.png'
import mis2 from './images/international-misplayers-club/mis2.png'
import mis3 from './images/international-misplayers-club/mis3.png'

import grump1 from './images/grumpybearrogers/grump1.png'
import grump2 from './images/grumpybearrogers/grump2.png'
import grump3 from './images/grumpybearrogers/grump3.png'

import joel1 from './images/joel-token-art/sprite1.jpg'
import joel2 from './images/joel-token-art/sprite2.jpg'
import joel3 from './images/joel-token-art/sprite3.jpeg'

import rose1 from './images/under-the-rose-studios/rose1.png'
import rose2 from './images/under-the-rose-studios/rose2.png'
import rose3 from './images/under-the-rose-studios/rose3.png'

import zax1 from './images/zaximus-studios/zax1.avif'
import zax2 from './images/zaximus-studios/zax2.jpg'
import zax3 from './images/zaximus-studios/zax3.avif'

export interface ArtistInfo {
  name: string
  link: string
  bio: React.ReactNode
  images: StaticImageData[]
}

export const artistList = {
  saturday: [
    {
      name: '@Phyrexian Alterz',
      link: 'https://discord.com/users/506248401147396097',
      bio: (
        <>
          All the way from Brooklyn NY,{' '}
          <a href="https://discord.com/users/506248401147396097">
            @Phyrexian Alterz
          </a>{' '}
          is one half of <a href="https://www.ilovepuke.com/shop">Puke</a>,
          sells some incredibly rad alters, playmats, and more! They are open
          for commissions, so if you have something you've always been dying to
          get your hands on. Show them some love and reach out now!
        </>
      ),
      images: [phy1, phy2, phy3],
    },
    {
      name: '@International Misplayers Club',
      link: 'https://discord.com/users/553831680025165854',
      bio: (
        <>
          Baltimore's own{' '}
          <a href="https://discord.com/users/553831680025165854">
            "International Misplayer's Club"
          </a>{' '}
          sells hilarious and legally distinct "Place Chain" decks along with
          90's nostalgia tokens. They are open for commissions and can be
          reached at{' '}
          <a href="https://discord.com/users/553831680025165854">
            @International Misplayers Club
          </a>
          .
        </>
      ),
      images: [mis1, mis2, mis3],
    },
    {
      name: '@grumpybearrogers',
      link: 'https://www.instagram.com/grumpybearrogers/',
      bio: (
        <>
          Grumpy Bear does incredibly cool full card alters, and graffiti style
          proxies. They are open for commissions and can be found on instagram
          <a href="https://www.instagram.com/grumpybearrogers/">
            @grumpybearrogers
          </a>
          .
        </>
      ),
      images: [grump1, grump2, grump3],
    },
  ],
  sunday: [
    {
      name: '@Joel token art',
      link: 'https://discord.com/users/600405650173984774',
      bio: (
        <>
          The King of "Funny Little Guys and Goblins"{' '}
          <a href="https://discord.com/users/600405650173984774">
            @Joel token art
          </a>{' '}
          does a variety of hand drawn tokens, playmats, and stickers. Joel is
          open for commissions so reach out to them on discord and see if they
          can help bring your team mascot ideas to life.
        </>
      ),
      images: [joel1, joel2, joel3],
    },
    {
      name: '@undertherose.studios',
      link: 'https://www.instagram.com/undertherose.studios/',
      bio: (
        <>
          Local friend Under The Rose does a variety of hand painted landscapes
          and sceneries. They can be found on instagram
          <a href="https://www.instagram.com/undertherose.studios/">
            @undertherose.studios
          </a>{' '}
          and they our also open for commissions ahead of the event.
        </>
      ),
      images: [rose1, rose2, rose3],
    },
    {
      name: 'Zaximus Studios',
      link: 'https://www.etsy.com/shop/ZaximusStudios',
      bio: (
        <>
          <a href="https://www.etsy.com/shop/ZaximusStudios">Zaximus Studios</a>{' '}
          works with digital artists to fabricate high end tokens and bring them
          to life. Their work can be found on{' '}
          <a href="https://www.etsy.com/shop/ZaximusStudios">Etsy</a> and
          several of the tokens they are selling directly benefit other
          charities like Extra Life.
        </>
      ),
      images: [zax1, zax2, zax3],
    },
  ],
}
