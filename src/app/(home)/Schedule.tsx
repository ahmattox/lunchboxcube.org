import styles from './Schedule.module.css'

import * as Typography from '@/components/general/Typography'
import * as Components from '@/components/general'

export function Schedule() {
  return (
    <div className={styles.container}>
      <Components.ContentBlock>
        <Components.Column secondary>
          <Typography.SecondaryHeading>Saturday</Typography.SecondaryHeading>
          <div className={styles.row}>
            <div>Check in</div>
            <Components.Rule />
            <div>8:00 AM - 9:00 AM</div>
          </div>
          <div className={styles.row}>
            <div>Draft</div>
            <Components.Rule />
            <div>1 9:00 AM - 1:00 PM</div>
          </div>
          <div className={styles.row}>
            <div>Lunch</div>
            <Components.Rule />
            <div>1:00 PM - 2:00 PM</div>
          </div>
          <div className={styles.row}>
            <div>Draft</div>
            <Components.Rule />
            <div>2 2:00 PM - 6:00 PM</div>
          </div>
        </Components.Column>
      </Components.ContentBlock>

      <Components.ContentBlock>
        <Components.Column secondary>
          <Typography.SecondaryHeading>Sunday</Typography.SecondaryHeading>
          <div className={styles.row}>
            <div>Draft 3</div>
            <Components.Rule />
            <div>9:00 AM - 1:00 PM</div>
          </div>
          <div className={styles.row}>
            <div>Lunch</div>
            <Components.Rule />
            <div>1:00 PM - 2:00 PM</div>
          </div>
          <div className={styles.row}>
            <div>Finals & free play</div>
            <Components.Rule />
            <div>2:00 PM - 6:00 PM</div>
          </div>
        </Components.Column>
      </Components.ContentBlock>
    </div>
  )
}
