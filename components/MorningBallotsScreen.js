import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function BallotsScreen({morningBallotsCount,
  setMorningBallotsCount,
  morningEnvelopesCount,
  setMorningEnvelopesCount, 
  baskanName,
  setBaskanName,
  onSave,
}) {
  const [peopleNum, setPeopleNum] = useState(0);
 
  const [editable, setEditable] = useState({ mZarf: false, mPusula: false, baskan: false });


  const handleIncrement = async (candidateCount, setCount) => {
    const newValue = candidateCount + 1;
    setPeopleNum(newValue);
    try {
      await AsyncStorage.setItem('@MyApp:voterNums', newValue.toString())
      console.log('Data saved successfully.');
    } catch (error) {
      console.log('Error saving data:', error);
    }
  };

  const handleDecrease = async (candidateCount, setCount) => {
    if (candidateCount !== 0) {
      const newValue = candidateCount - 1;
      setPeopleNum(newValue);
      try {
        await AsyncStorage.setItem('@MyApp:voterNums', newValue.toString())
        console.log('Data saved successfully.');
      } catch (error) {
        console.log('Error saving data:', error);
      }
    }
  };

  const handleSaveCounts = () => {
    console.log('Counts saved:', ballotsCount, envelopesCount);
  };
  const handleSave = async (inputName) => {
    // Update the values in the parent component
    if(inputName=='mPusula'){
      setMorningBallotsCount(morningBallotsCount);

  }
  else if(inputName=='mZarf'){
    setMorningEnvelopesCount(morningEnvelopesCount);

}     else if(inputName=='baskan'){
  setBaskanName(baskanName);

}   
    
    setEditable((prevState) => ({ ...prevState, [inputName]: false }));
  
    // Save the values to AsyncStorage
    try {
      if(inputName=='mPusula'){
      await AsyncStorage.setItem('@MyApp:morningBallotsCount', morningBallotsCount);}
      else if(inputName=='mZarf'){
      await AsyncStorage.setItem('@MyApp:morningEnvelopesCount', morningEnvelopesCount);}
      else if(inputName=='baskan'){
      await AsyncStorage.setItem('@MyApp:baskanName', baskanName);}
      console.log('Data saved successfully.');
    } catch (error) {
      console.log('Error saving data:', error);
    }
  
    // Call the onSave callback function
    onSave();
  };
  
  
  const handleCancel = (inputName) => {
    // Cancel logic
    setEditable((prevState) => ({ ...prevState, [inputName]: false }));

  };

  const handleEdit = (inputName) => {
    setEditable((prevState) => ({ ...prevState, [inputName]: true }));

  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const savedMorningBallotsCount = await AsyncStorage.getItem('@MyApp:morningBallotsCount');
        const savedMorningEnvelopesCount = await AsyncStorage.getItem('@MyApp:morningEnvelopesCount');
        const savedBaskanName = await AsyncStorage.getItem('@MyApp:baskanName');
        const savedPeopleNum = await AsyncStorage.getItem('@MyApp:voterNums');
        setMorningBallotsCount(savedMorningBallotsCount || '');
        setMorningEnvelopesCount(savedMorningEnvelopesCount || '');
        setBaskanName(savedBaskanName || '');
        setPeopleNum(parseInt(savedPeopleNum || '0'));
      } catch (error) {
        console.log('Error retrieving data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View  style={styles.warnTextContainer}><Text style={styles.sectionText}>07:00-08:00 GİRİLECEK BİLGİLER</Text></View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Sandık Başkanı</Text>
          <TextInput
          editable={editable.baskan}
          value={baskanName}
          onChangeText={setBaskanName}
          style={styles.input} />
          
        </View>
        <View style={styles.inputBtnContainer}>
        <TouchableOpacity style={!editable.baskan ? styles.saveButton :styles.hideBtn} onPress={()=>handleEdit('baskan')}>
            <Text style={styles.saveButtonText}>Veri Gir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={editable.baskan ? styles.saveButton : styles.hideBtn} onPress={()=>handleSave('baskan')}>
            <Text style={styles.saveButtonText}>Kaydet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={editable.baskan  ? styles.saveButton : styles.hideBtn} onPress={()=>handleCancel('baskan')}>
            <Text style={styles.saveButtonText}>İptal</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainerParent}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Sabah Pusula Sayısı</Text>
          <TextInput
            style={styles.input}
            value={morningBallotsCount}
            onChangeText={setMorningBallotsCount}
            keyboardType="numeric"
            editable={editable.mPusula}
     
          />
       
        </View>
        <View style={styles.inputBtnContainer}>
        <TouchableOpacity style={!editable.mPusula ? styles.saveButton :styles.hideBtn} onPress={()=>handleEdit('mPusula')}>
            <Text style={styles.saveButtonText}>Veri Gir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={editable.mPusula ? styles.saveButton : styles.hideBtn} onPress={()=>handleSave('mPusula')}>
            <Text style={styles.saveButtonText}>Kaydet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={editable.mPusula  ? styles.saveButton : styles.hideBtn} onPress={()=>handleCancel('mPusula')}>
            <Text style={styles.saveButtonText}>İptal</Text>
          </TouchableOpacity>
        </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Sabah Zarf Sayısı</Text>
          <TextInput
            style={styles.input}
            value={morningEnvelopesCount}
            onChangeText={setMorningEnvelopesCount}
            keyboardType="numeric"
            editable={editable.mZarf}
          />
        </View>
        <View style={styles.inputBtnContainer}>
        <TouchableOpacity style={!editable.mZarf ? styles.saveButton :styles.hideBtn} onPress={()=>handleEdit('mZarf')}>
            <Text style={styles.saveButtonText}>Veri Gir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={editable.mZarf ? styles.saveButton : styles.hideBtn} onPress={()=>handleSave('mZarf')}>
            <Text style={styles.saveButtonText}>Kaydet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={editable.mZarf  ? styles.saveButton : styles.hideBtn} onPress={()=>handleCancel('mZarf')}>
            <Text style={styles.saveButtonText}>İptal</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dividerTop} />
      </View>

      <View style={styles.midContainer}>
        <Text style={styles.label}>Seçmen:</Text>
        <Text style={styles.countText}>{peopleNum}</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={() => handleIncrement(peopleNum, setPeopleNum)}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.minusBtn]}
            onPress={() => handleDecrease(peopleNum, setPeopleNum)}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.dividerMid} />

  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  topContainer: {
    flex: 6,
  },
  midContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'lightgray',
  },
  inputContainer: {
    marginBottom: 10,
    marginTop: 8,
  },
  inputContainerParent:{
    flexDirection: 'column',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 8,
    fontSize: 21,

  },
  countText: {
    fontSize: 80,
    fontWeight: 'bold',
    marginLeft: 20,
    marginRight: 20,
  },
  buttonsContainer: {
    flexDirection: 'column',
  },
  button: {
    backgroundColor: '#0d5f07',
    paddingHorizontal: 30,
    paddingVertical: 16,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#d2fbd0',
    fontSize: 24,
  },
  minusBtn: {
  marginTop: 20,
  },
  saveButton:{
    backgroundColor: '#0d5f07',
    marginHorizontal: 3,
    padding: 4,
    borderRadius: 5,
  },
  saveButtonText: {
    color: '#d2fbd0',
    fontSize: 18,
  },
  dividerTop:{
   
  },
 
  inputBtnContainer:{
    flexDirection: 'row',
  },
  hideBtn:{
    display: 'none',
  },
  sectionText:{
    color: 'red',
    fontWeight: 'bold',
  },
  warnTextContainer:{
    marginBottom: 8,
  },
  warn:{
    borderColor:'red',
  },
});
