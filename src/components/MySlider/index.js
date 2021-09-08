import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  useMemo,
} from 'react';
import { View, FlatList, Platform, StatusBar } from 'react-native';

import { useInterval } from '../../hooks/useInterval';
import { viewportWidth, viewportHeight } from '../../utils/dimensions';

import { useLevelsStore } from '../../store';

import { FooterSafeAreaViewStyled, Slide, SlideImage } from './styles';

import { IconButton } from '../IconButton';
import { Controls } from './components/Controls';
import { EmptySlider } from './components/EmptySlider';
import { ActiveIndexesBoard } from './components/ActiveIndexBoard';
import { PopupUserPoint } from '../PopupUserPoint';

const sliderWidth = viewportWidth;
const sliderHeight = viewportHeight;

export const MySlider = ({ images, navigation, title }) => {
  const carouselRef = useRef(null);

  const [delay, setDelay] = useState(500);
  const [isRunning, setIsRunning] = useState(true);
  const [isControls, setIsControls] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const increasePoints = useLevelsStore(state => state.increasePoints);

  const LAST_ELEMENT_INDEX = images.length - 1;

  useInterval(
    () => {
      _goToNextPage();
    },
    isRunning ? delay : null,
  );

  useEffect(() => {
    images?.length && increasePoints();
  }, []);

  useEffect(() => {
    if (activeIndex === LAST_ELEMENT_INDEX && !isRunning) {
      setIsControls(true);
    }
  }, [activeIndex, LAST_ELEMENT_INDEX, isRunning]);

  const _goToNextPage = () => {
    if (activeIndex < LAST_ELEMENT_INDEX) {
      let nextIndex = activeIndex + 1;

      _scrollToIndex(nextIndex, false);
      setActiveIndex(nextIndex);
    } else {
      stopAndShowControls();
    }
  };

  const _scrollToIndex = (index, animated) => {
    carouselRef?.current?.scrollToIndex({ index, animated });
  };

  const stopAndShowControls = () => {
    setIsRunning(false);
    setIsControls(true);
  };

  const toggleControls = () => {
    setIsControls(!isControls);
  };

  const playFromBeginning = () => {
    setActiveIndex(-1);
    setIsRunning(true);
    setIsControls(false);
  };

  const goBack = () => {
    setIsControls(false);
    navigation.goBack();
  };

  const resumePlaying = () => {
    setIsRunning(true);
    setIsControls(false);
  };

  const _onMomentumScrollEnd = ev => {
    const index = ev.nativeEvent.contentOffset.x
      ? Math.floor(ev.nativeEvent.contentOffset.x / sliderWidth)
      : 0;

    setActiveIndex(index);
  };

  const _getItemLayout = useCallback(
    (data, index) => ({
      length: sliderWidth,
      offset: sliderWidth * index,
      index,
    }),
    [],
  );

  const _renderItem = useCallback(({ item, index }) => {
    return (
      <Slide width={sliderWidth} height={sliderHeight}>
        <SlideImage
          fadeDuration={0}
          source={{ uri: item.url }}
          resizeMode={'cover'}
        />
      </Slide>
    );
  }, []);

  const _keyExtractor = useCallback(item => item.id.toString(), []);

  const listComponent = useMemo(() => {
    return (
      <FlatList
        ref={carouselRef}
        data={images}
        keyExtractor={_keyExtractor}
        renderItem={_renderItem}
        getItemLayout={_getItemLayout}
        onMomentumScrollEnd={_onMomentumScrollEnd}
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onTouchStart={() => setIsRunning(false)}
        initialNumToRender={1}
        maxToRenderPerBatch={2}
        removeClippedSubviews={true}
      />
    );
  }, [images]);

  if (!images.length) {
    return <EmptySlider />;
  }

  return (
    <View>
      {listComponent}

      <PopupUserPoint />

      <FooterSafeAreaViewStyled>
        <ActiveIndexesBoard activeIndex={activeIndex} length={images.length} />

        <IconButton
          name="setting"
          size={44}
          lg
          onPress={() => {
            setIsRunning(false);
            toggleControls();
          }}
          round
        />
      </FooterSafeAreaViewStyled>

      <Controls
        setIsControls={setIsControls}
        title={title}
        isShown={isControls}
        goBack={goBack}
        playFromBeginning={playFromBeginning}
        resumePlaying={resumePlaying}
        platform={Platform.OS}
        statusBarHeight={StatusBar.currentHeight}
      />
    </View>
  );
};
