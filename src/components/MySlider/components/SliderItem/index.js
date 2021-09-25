import React, { memo } from 'react';
import { Slide, SlideImage } from './styles';

export const SliderItem = memo(({ item, width, height }) => {
  return (
    <Slide width={width} height={height}>
      <SlideImage
        fadeDuration={0}
        source={{ uri: item.url }}
        resizeMode={'cover'}
      />
    </Slide>
  );
});
