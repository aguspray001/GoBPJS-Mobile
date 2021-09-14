import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View, Text, RefreshControl} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CardHistory, Button} from '../components';
import {colors} from '../constant/colors';

const History = ({navigation}) => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = React.useState(false);
  const {data} = useSelector(state => state.requestReducer);
  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch({type: 'request-get', payload: {navigation}});
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    dispatch({type: 'request-get', payload: {navigation}});
  }, []);

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      showsVerticalScrollIndicator={false}>
      <Text style={{textAlign:'center', marginTop:40, marginBottom:-20, fontSize:16, fontWeight:'500'}}>History Pengajuan Klaim BPJS</Text>
      <View style={styles.content}>
        {data?.length > 0 ? (
          data?.map(list => {
            return (
                <CardHistory
                  title="History claim"
                  width="84%"
                  height="30%"
                  mb={10}
                  date={list?.createdAt}
                  data={list}
                  desc={list?.description}
                  bp={list?.bp}
                  navigation={navigation}
                />
            );
          })
        ) : (
          <Text style={{marginTop: 200, fontSize: 16, color: 'grey'}}>
            Tidak ada catatan history
          </Text>
        )}
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
});
