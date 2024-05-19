import React, { useEffect, useState } from 'react'
import { InView } from 'react-intersection-observer';
import '../styles/Tagline.css'

function Tagline() {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    var textWrapper = document.querySelector('.ml6 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: false })
      .add({
        targets: '.ml6 .letter',
        scale: [0, 1],
        duration: 2000,
        elasticity: 600,
        delay: (el, i) => 60 * (i + 1)
      })
  }, [inView])

  return (
    <div className='tagDiv'>
      <h1 className="ml6 Tag">
        <span className="text-wrapper">
          <InView onChange={setInView}>
            {({ ref, inView }) => (
              <span className="letters font-mono" ref={ref}>Timeless Romance of the American west</span>
            )}
          </InView>
        </span>
      </h1>
      <span className="line">Creating Unforgettable Moments</span>
    </div>
  )
}

export default Tagline