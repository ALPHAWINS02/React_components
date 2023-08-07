import React from 'react';
import './index.css'; 

export default function DetailsCard() {
  return (
    <>
      <details className="card">
  <summary>
    <h2>Earth</h2>
    <h3>The third planet in the solar system.</h3>
    <div className="crop">
      <img
        src="https://wallpaperaccess.com/full/19602.jpg"
        alt=""
        className="jupiter"
      />
    </div>
  </summary>
  <p>
  Earth (Latin: Terra), also known as Gaia in Greek mythology, 
  is the cradle of life and the third planet from the Sun in the Solar System.
   Its name is derived from Old English and Germanic words meaning "ground" or "soil."
   In various cultures and mythologies, Earth is associated with fertility, nature, 
   and revered as a mother goddess. This celestial body has been home to a vast array 
   of ecosystems, supporting diverse life forms and cultures.
  </p>
  <p>
  Earth is often called the "blue planet" due to its extensive oceans 
  covering approximately 71% of its surface,
  while the remaining 29% consists of continents, islands, and polar ice caps.
  The atmosphere surrounding Earth primarily comprises nitrogen and oxygen,
   with trace amounts of other gases, enabling the conditions necessary for life to flourish.
    This life-sustaining atmosphere is maintained by processes like photosynthesis, 
    performed primarily by plants and phytoplankton, which convert carbon dioxide into oxygen.
Geologically, Earth is shaped by tectonic plate movements, volcanic activity, 
and erosion over millions of years, resulting in diverse landscapes and geographical features..
  </p>
  <p>
  The Earth's climate is influenced by its orbit around the Sun, axial tilt, and the greenhouse effect.
   These factors contribute to global weather patterns, seasonal changes, and overall climate conditions.
   In the modern era, human activities have significantly impacted the Earth's environment and ecosystems. 
   Concerns such as deforestation, pollution, climate change, and loss of biodiversity highlight
    the need for sustainable practices and conservation 
efforts to preserve Earth's delicate balance and ensure a sustainable future for all living beings.
  </p>
</details>
    </>
  )
}