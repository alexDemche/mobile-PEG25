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

import { FooterSafeAreaViewStyled } from './styles';

import { IconButton } from '../IconButton';
import { Controls } from './components/Controls';
import { EmptySlider } from './components/EmptySlider';
import { ActiveIndexesBoard } from './components/ActiveIndexBoard';
import { PopupUserPoint } from '../PopupUserPoint';
import { SliderItem } from './components/SliderItem';

const sliderWidth = viewportWidth;
const sliderHeight = viewportHeight;

export const MySlider = ({ images, navigation, title }) => {
  const carouselRef = useRef(null);

  const [delay, setDelay] = useState(1000);
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

  const toggleRunning = () => {
    setIsRunning(!isRunning);
  };

  const playFromBeginning = () => {
    setActiveIndex(0);
    setIsRunning(true);
    setIsControls(false);
    _scrollToIndex(0, false);
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

  const _renderItem = useCallback(({ item }) => {
    return <SliderItem item={item} width={sliderWidth} height={sliderHeight} />;
  }, []);

  const _keyExtractor = useCallback(item => item.id, []);

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
        initialNumToRender={2}
        maxToRenderPerBatch={6}
        removeClippedSubviews={false}
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

        {activeIndex !== LAST_ELEMENT_INDEX && (
          <IconButton
            name={isRunning ? 'pause' : 'playcircleo'}
            onPress={toggleRunning}
            size={32}
            lg
            round
          />
        )}

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
        activeIndex={activeIndex}
        lastElementIndex={LAST_ELEMENT_INDEX}
        activeImageUrl={images[activeIndex]?.url}
      />
    </View>
  );
};
