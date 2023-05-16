import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [ message, setMessage ] = React.useState('');
  const [ variant, setVariant ] = React.useState(VARIANT_OPTIONS[0]);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea 
            id="message" 
            className={styles.messageInput}
            value={message} 
            onChange={e => {
              setMessage(e.target.value)
            }}
             />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
          {VARIANT_OPTIONS.map(option => {
            const id = `variant-${option}`
            return (
            <label key={id} htmlFor={id}>
              <input
     
                id={id}
                type="radio"
                name="variant"
                checked={option === variant}
                value={option}
                onChange={e => { 
                  setVariant(e.target.value)
                }}
              />
              {option}
            </label>

            )
          })}

          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button
              onClick={_ => window.alert(`${variant} - ${message}`)}
            >Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
