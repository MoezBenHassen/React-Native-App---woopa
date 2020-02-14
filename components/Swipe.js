// Swipe.js
import React, { Component } from "react";
import { View, Text, Image, Dimensions, Animated, PanResponder, } from "react-native";
import { Card } from "react-native-elements";

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;
class Swipe extends Component {
  constructor(props) {
    super(props);
    this.position = new Animated.ValueXY(); 
    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({ x: gestureState.dx, y: gestureState.dy });
      },
      onPanResponderRelease: (evt, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          this.forceSwipe('right');
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          this.forceSwipe('left');
        } else {
          this.resetPosition();
        }
      }
    });
  }

  forceSwipe(direction) {
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(this.position, {
      toValue: { x, y: 0 },
      duration: SWIPE_OUT_DURATION
    }).start();
  }
  
  resetPosition() {
    Animated.spring(this.position, {
      toValue: { x: 0, y: 0 }
    }).start();
  }

  getCardStyle() {
    const { position } = this;
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ['-120deg', '0deg', '120deg']
    });

    return {
      ...position.getLayout(),
      transform: [{ rotate }]
    };
  }

  renderCardItem = (item, i) => {
    if (!this.props.data.length) {
      return this.props.renderNoMoreCards();
    }
    return i === 0 ? (
      <Animated.View
        style={this.getCardStyle()}
        key={item.jobId}
        {...this._panResponder.panHandlers}
      >
        {this.props.renderCard(item)}
      </Animated.View>
    ) : (
      <View key={item.jobId}>{this.props.renderCard(item)}</View>
    );
  };

  renderCards = () => {
    return this.props.data.map(this.renderCardItem);
  };

  render() {
    return <View>{this.renderCards()}</View>;
  }
}

const styles = {
  detailWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10
  }
};

export default Swipe;
