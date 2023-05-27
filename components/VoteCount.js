import { View, TextInput, Button, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CandidateSection = ({ style, candidateName, candidateCount, handleIncrement, handleDecrease }) => {
  return (
    <View style={style} >
      <Text style={styles.candidateName}>{candidateName}</Text>
      <Text style={styles.countText}>{candidateCount}</Text>
      <View style={styles.buttonsContainer}>
      <TouchableOpacity style={styles.button} onPress={handleIncrement}>
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.minusBtn]} onPress={handleDecrease}>
            <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
       
        </View>
     
    </View>
  );
};


export default function VoteCount(){
    const [candidate1Count, setCandidate1Count] = useState(0);
    const [candidate2Count, setCandidate2Count] = useState(0);
    const [candidate3Count, setCandidate3Count] = useState(0);
    const [ballotsCount, setBallotsCount] = useState(0);

    const handleIncrement = async (candidateCount, setCount) => {
      const newValue= candidateCount+1;
      setCount(newValue);
      try {
        if(candidateCount==candidate1Count){
          await AsyncStorage.setItem(`@MyApp:candidate1Count`, newValue.toString())
        }
        else if(candidateCount==candidate2Count){
          await AsyncStorage.setItem(`@MyApp:candidate2Count`, newValue.toString())
        }
        else if(candidateCount==candidate3Count){
          await AsyncStorage.setItem(`@MyApp:candidate3Count`, newValue.toString())
        }
        
        console.log('Data saved successfully.');
      } catch (error) {
        console.log('Error saving data:', error);
      }
    };
    const handleDecrease = async (candidateCount, setCount)=>{
        if(candidateCount!==0){
          const newValue = candidateCount - 1;
          setCount(newValue)
          try {
            if(candidateCount==candidate1Count){
              await AsyncStorage.setItem(`@MyApp:candidate1Count`, newValue.toString())
            }
            else if(candidateCount==candidate2Count){
              await AsyncStorage.setItem(`@MyApp:candidate2Count`, newValue.toString())
            }
            else if(candidateCount==candidate3Count){
              await AsyncStorage.setItem(`@MyApp:candidate3Count`, newValue.toString())
            }
            console.log('Data saved successfully.');
          } catch (error) {
            console.log('Error saving data:', error);
          }
        }
    }
    useEffect(() => {
      const fetchData = async () => {
        try {
          const savedCandidate1Count = await AsyncStorage.getItem('@MyApp:candidate1Count');
          const savedCandidate2Count = await AsyncStorage.getItem('@MyApp:candidate2Count');
          const savedCandidate3Count = await AsyncStorage.getItem('@MyApp:candidate3Count');
          const savedBallotsCount = await AsyncStorage.getItem('@MyApp:lastBallotsCount');

          setCandidate1Count(parseInt(savedCandidate1Count || '0'));
          setCandidate2Count(parseInt(savedCandidate2Count || '0'));
          setCandidate3Count(parseInt(savedCandidate3Count || '0'));
          setBallotsCount(parseInt(savedBallotsCount || '0'));
        } catch (error) {
          console.log('Error retrieving data:', error);
        }
      };
  
      fetchData();
    }, []);
    return (
      <View style={styles.container}>
      <View style={styles.ballotNumContainer}><Text style={styles.ballotC}>Sandıktan çıkan pusula sayısı: {ballotsCount}</Text></View>
        <View style={styles.showTotal}><Text style={styles.totalText}>Geçerli oy sayısı</Text><Text style={styles.total}>{candidate1Count+candidate2Count}</Text></View>
      <View style={styles.candidatesContainer}>
        <CandidateSection
        style={[styles.recep, styles.candidateSection]}
          candidateName="Tayyip"
          candidateCount={candidate1Count}
          handleIncrement={()=>handleIncrement(candidate1Count, setCandidate1Count)}
          handleDecrease={()=>handleDecrease(candidate1Count, setCandidate1Count)}
        />
              <View style={styles.divider} />
        <CandidateSection
          style={[styles.kemal, styles.candidateSection]}
          candidateName="Kılıçdaroğlu"
          candidateCount={candidate2Count}
          handleIncrement={()=>handleIncrement(candidate2Count, setCandidate2Count)}
          handleDecrease={()=>handleDecrease(candidate2Count, setCandidate2Count)}
        />
      </View>
      <View style={styles.dividerMid} />
      <View style={styles.invalidSection}>
        <Text style={styles.candidateName}>Geçersiz:</Text>
        <Text style={styles.countText}>{candidate3Count}</Text>
        <View style={styles.invalidBtnsContainer}>
          <TouchableOpacity style={[styles.button, styles.colmnBtn1, styles.plusBtn]} onPress={()=>handleIncrement(candidate3Count, setCandidate3Count)}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.colmnBtn2]} onPress={()=>handleDecrease(candidate3Count, setCandidate3Count)}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  
    );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  candidatesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  candidateSection: {
    alignItems: 'center',
    margin: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  countText: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 80,
    paddingHorizontal: 5,
    backgroundColor: 'lightgray',

  },
  button: {
    backgroundColor: '#0d5f07',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 36,
  },
  minusBtn: {
    marginLeft: 10,
  },
  invalidSection: {
    alignItems: 'center',
    marginTop: 20, // Add margin on top
    flexDirection: 'row',
  },
  invalidBtnsContainer: {
    flexDirection: 'column',
    
  },
  colmnBtn2:{
    marginTop: 15,
  },
  candidateName: {
    fontWeight: 'bold',
    fontSize: 26,
  },
  divider: {
    height: '100%',
    width: 3,
    backgroundColor: 'black',
  },
  recep: {
    width: '50%',
  },
  kemal: {
    width: '50%',
  },
  dividerMid: {
    height: 2,
    width: 300,
    backgroundColor: 'black',
    marginTop: 20,
  },
  total:{
  
    fontSize: 40,
    textDecorationLine:'underline',

    color: '#0d5f07',
    fontWeight:'bold',
  },
  showTotal:{
    
    flexDirection: 'column',
    alignItems:'center',
  },
  totalText:{
  fontSize: 24,
  
  },
  ballotNumContainer:{
    position:'absolute',
    top: 30,
  },
  ballotC:{
    fontSize: 24,
    textDecorationLine:'underline',
  }
});