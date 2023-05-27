import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function NightBallots({
    lastBallotsCount,
    setLastBallotsCount,
    lastEnvelopesCount,
    setLastEnvelopesCount,
    morningBallotsCount,
    morningEnvelopesCount,
    setNightCountsValid,
    nightCountsValid,
    onSave,
  }){
  
    const [editable, setEditable] = useState({nZarf:false, nPusula: false});

    useEffect(() => {
        const fetchData = async () => {
          try {
            const savedLastBallotsCount = await AsyncStorage.getItem('@MyApp:lastBallotsCount');
            const savedLastEnvelopesCount = await AsyncStorage.getItem('@MyApp:lastEnvelopesCount');
            setLastBallotsCount(savedLastBallotsCount || '');
            setLastEnvelopesCount(savedLastEnvelopesCount || '');
          } catch (error) {
            console.log('Error retrieving data:', error);
          }
        };
    
        fetchData();
      }, []);
    const handleSave = async (inputName) => {
        // Update the values in the parent component
        if(inputName=='nPusula'){
            setLastBallotsCount(lastBallotsCount);

        }
        else if(inputName=='nZarf'){
            setLastEnvelopesCount(lastEnvelopesCount);

        }
        setEditable((prevState) => ({ ...prevState, [inputName]: false }));
      
        // Save the values to AsyncStorage
        try {
          await AsyncStorage.setItem('@MyApp:lastBallotsCount', lastBallotsCount);
          await AsyncStorage.setItem('@MyApp:lastEnvelopesCount', lastEnvelopesCount);
          console.log('Data saved successfully.');

          const morningBallots = parseInt(morningBallotsCount);
            const morningEnvelopes = parseInt(morningEnvelopesCount);
            const nightBallots = parseInt(lastBallotsCount);
            const nightEnvelopes = parseInt(lastEnvelopesCount);

    if (morningBallots !== nightBallots || morningEnvelopes !== nightEnvelopes) {
      setNightCountsValid(false);
    } else {
      setNightCountsValid(true);
    }
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

    return <View style={styles.container}>

    <View style={styles.bottomContainer}>
    <View style={styles.warnTextContainer}><Text style={styles.sectionText}>17:00 İTİBARİYLE GİRİLECEK BİLGİLER</Text></View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Akşam Pusula Sayısı</Text>
        <TextInput
          style={[
            styles.input,
            !nightCountsValid ? styles.inputError : null,
          ]}
          value={lastBallotsCount}
          onChangeText={setLastBallotsCount}
          keyboardType="numeric"
          editable={editable.nPusula}

        />
      </View>
      <View style={styles.inputBtnContainer}>
      <TouchableOpacity style={!editable.nPusula ? styles.saveButton :styles.hideBtn} onPress={()=>handleEdit('nPusula')}>
          <Text style={styles.saveButtonText}>Veri Gir</Text>
        </TouchableOpacity>
        <TouchableOpacity style={editable.nPusula ? styles.saveButton : styles.hideBtn} onPress={()=>handleSave('nPusula')}>
          <Text style={styles.saveButtonText}>Kaydet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={editable.nPusula ? styles.saveButton : styles.hideBtn} onPress={()=>handleCancel('nPusula')}>
          <Text style={styles.saveButtonText}>İptal</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Akşam Zarf Sayısı</Text>
        <TextInput
          style={[
            styles.input,
            !nightCountsValid ? styles.inputError : null,
          ]}
          value={lastEnvelopesCount}
          onChangeText={setLastEnvelopesCount}
          keyboardType="numeric"
          editable={editable.nZarf}

        />
      </View>
      <View style={styles.inputBtnContainer}>
      <TouchableOpacity style={!editable.nZarf ? styles.saveButton :styles.hideBtn} onPress={()=>handleEdit('nZarf')}>
          <Text style={styles.saveButtonText}>Veri Gir</Text>
        </TouchableOpacity>
        <TouchableOpacity style={editable.nZarf  ? styles.saveButton : styles.hideBtn} onPress={()=>handleSave('nZarf')}>
          <Text style={styles.saveButtonText}>Kaydet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={editable.nZarf  ? styles.saveButton : styles.hideBtn} onPress={()=>handleCancel('nZarf')}>
          <Text style={styles.saveButtonText}>İptal</Text>
        </TouchableOpacity>
      </View>
    <View style={styles.remindContainer}><Text style={styles.remindText}>Çevreleri kırmızıya döndüyse sabah sayılan pusula veya zarf sayıları ile sandıktan çıkanlar arasında tutarsızlık olduğunu gösteriyor.</Text>
    <Text style={[styles.remindText, styles.boldText]}>Lütfen kontrol edin</Text>
    </View>
    </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    topContainer: {
      flex: 4,
    },
    midContainer: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    bottomContainer: {
      flex: 4,
      marginTop: 20,
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
      fontSize: 40,
      fontWeight: 'bold',
      marginLeft: 20,
      marginRight: 20,
    },
    buttonsContainer: {
      flexDirection: 'row',
    },
    button: {
      backgroundColor: '#f54b42',
      paddingHorizontal: 15,
      paddingVertical: 8,
      borderRadius: 5,
      marginHorizontal: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 24,
    },
    minusBtn: {
      backgroundColor: '#ccc',
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
      height: 2,
      width: 300,
      backgroundColor: 'black',
      marginTop: 105,
    },
    dividerMid: {
      height: 2,
      width: 300,
      backgroundColor: 'black',
  
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
    inputError:{
      borderColor:'red',
      borderWidth: 3,
    },
    remindContainer:{
        marginVertical: 20,
    },
    remindText:{
        fontSize: 18,
    },
    boldText:{
        fontWeight:'bold',
    },
  });