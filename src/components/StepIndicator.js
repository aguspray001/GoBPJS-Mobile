import * as React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import {colors} from '../constant/colors';
import dummyData from '../constant/data';

const stepIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
  stepStrokeCurrentColor: '#3a931a',
  separatorFinishedColor: '#3a931a',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#3a931a',
  stepIndicatorUnFinishedColor: '#aaaaaa',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#000000',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
  labelColor: '#666666',
  labelSize: 15,
  currentStepLabelColor: '#3a931a',
};

export default function VerticalStepIndicator({currentStep, stepCount}) {
  return (
    <View style={styles.container}>
      <View style={styles.stepIndicator}>
        <StepIndicator
          customStyles={stepIndicatorStyles}
          stepCount={stepCount}
          direction="vertical"
          currentPosition={currentStep}
          labels={dummyData.data.map(item => item.title)}
          renderLabel={function (position, stepStatus, label, currentPosition) {
            const desc = dummyData.data.map(item => item.body);
            return (
              <>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 16,
                    position: 'absolute',
                    left: 0,
                    fontWeight: '500',
                  }}>
                  {position.label}
                </Text>
                <Text
                  style={{
                    color: 'grey',
                    fontSize: 16,
                    width: 200,
                    height: 200,
                    marginTop: 250,
                  }}>
                  {desc[position.position]}
                </Text>
              </>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    elevation: 10,
  },
  stepIndicator: {
    marginVertical: 50,
    paddingHorizontal: 20,
  },
  rowItem: {
    flex: 3,
    paddingVertical: 20,
  },
  title: {
    flex: 1,
    fontSize: 20,
    color: '#333333',
    paddingVertical: 16,
    fontWeight: '600',
  },
  body: {
    flex: 1,
    fontSize: 15,
    color: '#606060',
    lineHeight: 24,
    marginRight: 8,
  },
});
