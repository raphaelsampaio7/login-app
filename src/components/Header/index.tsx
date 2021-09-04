import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';

interface IProps {
  leftComponents?: object[];
  centerComponents?: object[];
  rightComponents?: object[];
  style?: StyleProp<ViewStyle>;
}

const Header: React.FC<IProps> = ({ leftComponents, centerComponents, rightComponents, style }) => {

  const getComponents = (positionComponents: object[] | undefined) => {
    if (positionComponents?.length !== 0) {
      return (
        <View style={{ flexDirection: 'row' }}>
          { positionComponents?.map(component => component) }
        </View>
      );
    }

    return <></>;
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', ...style as object }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        { getComponents(leftComponents) }
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        { getComponents(centerComponents) }
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        { getComponents(rightComponents) }
      </View>

    </View>
  );
}

export default Header;
