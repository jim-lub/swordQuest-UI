import React from 'react';

// import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { BarFull, BarEmpty } from './';

const ExperienceBar = (props) => {
  const bars = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];

  return (
      <div className="experiencebar__wrapper">
        <div className="experiencebar__container">
          {
            bars.map((cur, index) => {
              if(cur === 1) {
                return <BarFull key={index} />
              }

              return <BarEmpty key={index} />
            })
          }
        </div>
      </div>
  )
}

const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps)(ExperienceBar);
