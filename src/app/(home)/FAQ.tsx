import styles from './FAQ.module.css'

import * as Typography from '@/components/general/Typography'
import * as Components from '@/components/general'

export function FAQ() {
  return (
    <div className={styles.container}>
      <Components.Column>
        <Typography.SecondaryHeading>
          Frequently Asked Questions
        </Typography.SecondaryHeading>
        <div className={styles.block}>
          <div className={styles.question}>
            What Charities are we supporting?
          </div>
          <p className={styles.answer}>
            <a href="https://mdfoodbank.org/">The Maryland Food Bank</a> &{' '}
            <a href="https://www.birdsofmtg.com/">Birds of Paradise</a>
          </p>
        </div>

        <div className={styles.block}>
          <div className={styles.question}>How do I raise money for BOP?</div>
          <p className={styles.answer}>
            Register a fundraising team with up to two other players on
            Givebutter. All participants will receive a thank you gift, with a
            trophy for the top earning team.
          </p>
        </div>

        <div className={styles.block}>
          <div className={styles.question}>
            What is the structure for the traditional draft event?
          </div>
          <p className={styles.answer}>
            3 guaranteed rounds paired through Hedron Network, with a cut to top
            8.
          </p>
        </div>

        <div className={styles.block}>
          <div className={styles.question}>
            What is the structure for the team draft event?
          </div>
          <p className={styles.answer}>
            Sign up with two friends and compete in 3 rounds of Swiss play, and
            a finals match up for our two undefeated teams.
          </p>
        </div>

        <div className={styles.block}>
          <div className={styles.question}>Can I submit my cube? </div>
          <p className={styles.answer}>
            No, Submissions for this event are closed.
          </p>
        </div>

        <div className={styles.block}>
          <div className={styles.question}>
            Can I bring my cube even if it doesn't get chosen?
          </div>
          <p className={styles.answer}>
            Yes! Sunday afternoon will feature a fully supported open play for
            anyone not participating in the finals.
          </p>
        </div>

        <div className={styles.block}>
          <div className={styles.question}>Parking & Location</div>
          <p className={styles.answer}>
            There’s a large parking lot behind the church, and metered/free
            street parking and walking distance from the light-rail and
            train-station.
          </p>
        </div>

        <div className={styles.block}>
          <div className={styles.question}>Local Amenities</div>
          <p className={styles.answer}>
            Check out{' '}
            <a href="https://docs.google.com/document/d/1KcqAhXp4T3QgAsMEUdQ3jiCOCiLdXyPCGH_DScwl9hA/edit?usp=sharing">
              Andy’s Guide
            </a>{' '}
            to local food.
          </p>
        </div>
      </Components.Column>
    </div>
  )
}
