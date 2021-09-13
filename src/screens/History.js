import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CardHistory, Button} from '../components';
import {colors} from '../constant/colors';

const History = ({navigation}) => {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.requestReducer);
  // console.log(data)
  useEffect(() => {
    dispatch({type: 'request-get', payload: {navigation}});
  }, []);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <Button
          title="Refresh"
          width="45%"
          height="5.8%"
          onPress={()=>dispatch({type: 'request-get', payload: {navigation}})}
        />
        { data?.length > 0 ?
          data?.map(list=>{
            return(
              <View style={styles.cardWrapper}>
                <CardHistory
                  title="History claim"
                  width="84%"
                  height="20%"
                  date={list?.createdAt}
                  currentStatus={list?.status}
                  desc={list?.description}
                  bp={list?.bp}
                  navigation={navigation}
                />
              </View>
            )
          }): <Text style={{marginTop:200, fontSize:16, color:'grey'}}>Tidak ada catatan history</Text>
        }
      </View>
    </ScrollView>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  cardWrapper: {
    padding: 10,
  },
});
