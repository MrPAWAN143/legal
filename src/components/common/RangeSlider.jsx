import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'ion-rangeslider/css/ion.rangeSlider.min.css';
import 'ion-rangeslider/js/ion.rangeSlider.min.js';


        const RangeSlider = ({ min, max, from, to, onChange }) => {
    const slider = useRef(null);
  
    useEffect(() => {
      // Initialize the Ion RangeSlider
      $(slider.current).ionRangeSlider({
        type: "double",
        min: min,
        max: max,
        from: from,
        to: to,
        step: 500,
        onFinish: function (data) {
          onChange(data.from, data.to);
        }
      });
  
    //   Cleanup to destroy the slider when the component is unmounted
      return () => {
        const sliderInstance = $(slider.current).data("ionRangeSlider");
        if (sliderInstance) {
          sliderInstance.destroy();
        }
      };
    }, [min, max, from, to, onChange]);
  
    return <input ref={slider} type="text" attr="custom" />;
  }

export default RangeSlider
  