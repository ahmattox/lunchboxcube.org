import styles from './Artists.module.css'

import Image from 'next/image'

import * as Typography from '@/components/general/Typography'
import * as Components from '@/components/general'

import { ArtistInfo, artistList } from './artist-list'

export function Artists() {
  return (
    <div className={styles.container}>
      <Typography.PrimaryHeading>Artist Alley</Typography.PrimaryHeading>

      <Components.ContentBlock>
        <Components.Column>
          <Typography.SecondaryHeading>Saturday</Typography.SecondaryHeading>

          {artistList.saturday.map((artist, index) => (
            <Artist key={index}>{artist}</Artist>
          ))}

          <Typography.SecondaryHeading>Sunday</Typography.SecondaryHeading>

          {artistList.sunday.map((artist, index) => (
            <Artist key={index}>{artist}</Artist>
          ))}
        </Components.Column>
      </Components.ContentBlock>
    </div>
  )
}

function Artist(props: { children: ArtistInfo }) {
  const artist = props.children

  return (
    <div className={styles.artist}>
      <div className={styles.images}>
        {artist.images.map((image, index) => (
          <div className={styles.image} key={index}>
            <Image src={image} fill={true} alt="" objectFit="cover" />
          </div>
        ))}
      </div>
      <div className={styles.artistDetails}>
        <Typography.TertiaryHeading>
          <a href={artist.link}>{artist.name}</a>
        </Typography.TertiaryHeading>
        <p>{artist.bio}</p>
      </div>
    </div>
  )
}
