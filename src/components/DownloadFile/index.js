import React, { useState, useEffect, useRef } from 'react';
import { Alert, Animated, Easing } from 'react-native';

import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import * as Location from 'expo-location';

import { IconButton } from '../IconButton';
import { AppText } from '../AppText';
import { translate } from '../../i18n';

export const DownloadFile = props => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', msg: '' });

  useEffect(() => {
    if (message.msg) {
      Alert.alert(message.type, message.msg);
    }
  }, [message]);

  const spinAnim = useRef(new Animated.Value(0)).current;
  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  Animated.loop(
    Animated.timing(spinAnim, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start();

  const saveFile = async fileUri => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        setLoading(false);
        setMessage({
          type: translate('alert_download.not_granted.title'),
          msg: translate('alert_download.not_granted.message'),
        });
        return;
      }

      const asset = await MediaLibrary.createAssetAsync(fileUri);
      await MediaLibrary.createAlbumAsync('Download', asset, false);
      setLoading(false);
      setMessage({
        type: translate('alert_download.success.title'),
        msg: translate('alert_download.success.message'),
      });
    } catch (err) {
      setLoading(false);
      setMessage({
        type: translate('alert_download.error.title'),
        msg: err.message,
      });
    }
  };

  const downloadFile = (uri = '') => {
    const splitBySlashUri = uri.split('/');
    const fileName = splitBySlashUri[splitBySlashUri.length - 1];
    const fileUri = FileSystem.documentDirectory + fileName;

    setLoading(true);

    FileSystem.downloadAsync(uri, fileUri)
      .then(({ uri: _uri }) => {
        saveFile(_uri);
      })
      .catch(err => {
        setLoading(false);
        setMessage({
          type: translate('alert_download.error.title'),
          msg: err.message,
        });
      });
  };

  return (
    <>
      <Animated.View
        style={[
          {
            transform: [{ rotate: loading ? spin : 0 }],
          },
        ]}>
        <IconButton
          xl={props.xl}
          round={props.round}
          size={props.size}
          name={loading ? 'loading1' : 'download'}
          onPress={() => (loading ? null : downloadFile(props.uri))}
        />
      </Animated.View>
      <AppText fontSize={14} marginTop={5} textAlign={'center'}>
        {translate('buttons.download')}
      </AppText>
    </>
  );
};
