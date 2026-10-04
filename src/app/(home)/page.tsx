import styles from './page.module.css'

import { Metadata } from 'next'

import * as Typography from '@/components/general/Typography'
import * as Components from '@/components/general'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Schedule } from './Schedule'
import { CubeList } from './CubeList'

export const metadata: Metadata = {
  title: 'Lunch Box',
  description:
    'A cube event supporting community and charitable giving in Baltimore MD, November 7th and 8th.',
  openGraph: {
    title: 'Lunch Box',
    description:
      'A cube event supporting community and charitable giving in Baltimore MD, November 7th and 8th.',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.mainContent}>
        <Components.Column>
          <Typography.PrimaryHeading>Schedule</Typography.PrimaryHeading>
          <Schedule />
        </Components.Column>

        <Components.Column>
          <Typography.PrimaryHeading>Info</Typography.PrimaryHeading>
          <Components.ContentBlock>
            <div className={styles.locationInfo}>
              <p>November 7th and 8th 2026</p>
              <p>
                Peabody Heights Brewery, 401 East 30th Street Baltimore, MD,
                21218
              </p>
            </div>
          </Components.ContentBlock>

          <Components.ContentBlock>
            <Components.Column secondary>
              <Typography.SecondaryHeading>About</Typography.SecondaryHeading>
              <div>
                <p>
                  This year's Lunch Box will feature both a 48-person
                  traditional cube tournament and a simultaneous 48-person team
                  draft (16 teams of 3)
                </p>
                <p>
                  All money raised through ticket and raffle sales (after
                  operational costs) will be donated to the Maryland Food Bank.
                  Additionally, players are encouraged to participate in our
                  optional team fundraising event where all proceeds will go to
                  support marginalized voices in the MTG community through Birds
                  of Paradise.
                </p>
              </div>
            </Components.Column>
          </Components.ContentBlock>

          <Components.ContentBlock>
            <p>
              <a href="https://givebutter.com/lunch-box2">
                Donate & Buy Tickets
              </a>
            </p>
            <p>
              <a href="https://givebutter.com/Lunchbox-BoP">
                Birds of Paradise Fundraiser
              </a>
            </p>

            <p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSf0EMrBNXwZDrwPc_qz_Np-M4Y6b_xj1bqQ90ZoEBAokzSo7g/viewform">
                Wait list signup
              </a>
            </p>

            <p>
              <a href="https://discord.gg/ps3KHEpHS">Join the Discord</a>
            </p>
          </Components.ContentBlock>

          <Components.ContentBlock>
            <Components.Column secondary>
              <Typography.SecondaryHeading>
                Special Guests
              </Typography.SecondaryHeading>
              <div>Phil aka thraben u</div>
            </Components.Column>
          </Components.ContentBlock>
        </Components.Column>
      </div>

      <Components.Column>
        <Typography.PrimaryHeading>The Cubes</Typography.PrimaryHeading>
        <CubeList />
      </Components.Column>

      <Footer />
    </div>
  )
}
