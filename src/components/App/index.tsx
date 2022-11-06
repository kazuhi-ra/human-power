import type { FC } from 'react'
import { useRecoilValue } from 'recoil'

import styles from './index.module.css'

import { pastedState } from '../../recoil/pasted'
import { statefulCharState } from '../../recoil/statefulChar'
import { yaruzoInputState } from '../../recoil/yaruzoInput'
import { Textarea } from '../TextArea'

export const App: FC = () => {
  const statefulChar = useRecoilValue(statefulCharState)
  const yaruzoInput = useRecoilValue(yaruzoInputState)
  const pasted = useRecoilValue(pastedState)

  const perfect = statefulChar.every((v) => v.status === 'ok')

  return (
    <div className={styles.App}>
      {pasted ? (
        <Disappointed />
      ) : (
        <>
          <h1 className={styles.human_power}>人力やるぞ</h1>
          <div className={styles.sample}>
            {statefulChar.map((moji, index) => (
              <span
                key={index}
                style={{
                  color:
                    moji.status === 'ok'
                      ? 'green'
                      : moji.status === 'ng'
                      ? 'red'
                      : 'gray',
                }}
              >
                {moji.char}
              </span>
            ))}
          </div>
          <Textarea />
          {<TweetButton yaruzoInput={yaruzoInput} disabled={!perfect} />}
        </>
      )}
    </div>
  )
}

const TweetButton: FC<{ yaruzoInput: string; disabled: boolean }> = ({
  yaruzoInput,
  disabled,
}) => {
  if (disabled) {
    return (
      <a
        className={styles.tweetButton}
        style={{ opacity: 0.2 }}
        aria-disabled
        tabIndex={-1}
      >
        やるぞおおおおおォォッォオアァアアア！！！
      </a>
    )
  }

  return (
    <a
      className={styles.tweetButton}
      href={`http://twitter.com/share?url=https://kazuhi-ra.github.io/human-power&text=${yaruzoInput}`}
      target="_blank"
      rel="noreferrer"
    >
      やるぞおおおおおォォッォオアァアアア！！！
    </a>
  )
}

const Disappointed: FC = () => {
  return <div className={styles.disappointed}>失望しました</div>
}
