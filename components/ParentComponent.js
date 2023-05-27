import React, { useState } from 'react';
import MorningBallotsScreen from './MorningBallotsScreen';
import NightBallotsScreen from './NightBallotsScreen';
import TabButtons from './TabButtons';
const ParentComponent = () => {
      const [activeScreen, setActiveScreen] = useState('morning');
      
  const handleTabChange = (tabName) => {
    setActiveScreen(tabName);
  };

  const [morningBallotsCount, setMorningBallotsCount] = useState('');
  const [morningEnvelopesCount, setMorningEnvelopesCount] = useState('');
  const [lastBallotsCount, setLastBallotsCount] = useState('');
  const [lastEnvelopesCount, setLastEnvelopesCount] = useState('');
  const [baskanName, setBaskanName] = useState('');
  const [morningCountsValid, setMorningCountsValid] = useState(true);
const [nightCountsValid, setNightCountsValid] = useState(true);

  const handleSaveNightBallots = () => {
    // Compare the values
    if (parseInt(morningBallotsCount) === parseInt(lastBallotsCount)) {
        // Perform actions when the counts are the same
        console.log('Morning and Night Ballots Counts are equal');

      } else {
        // Perform actions when the counts are different
        console.log('Morning and Night Ballots Counts are not equal');

      }
      
    if (parseInt(morningEnvelopesCount) === parseInt(lastEnvelopesCount)) {
      console.log('Morning and Night Envelopes Counts are equal');
    } else {
      console.log('Morning and Night Envelopes Counts are not equal');
    }
  };

  return (
    <>
      {/* Add your tab buttons here */}
      <TabButtons activeScreen={activeScreen} handleTabChange={handleTabChange} />

      {/* Render the morning or night screen based on the active screen */}
      {activeScreen === 'morning' ? <MorningBallotsScreen
         morningBallotsCount={morningBallotsCount}
         setMorningBallotsCount={setMorningBallotsCount}
         morningEnvelopesCount={morningEnvelopesCount}
         setMorningEnvelopesCount={setMorningEnvelopesCount}
        baskanName={baskanName}
        setBaskanName={setBaskanName}
         onSave={() => {}}

      /> : <NightBallotsScreen
      lastBallotsCount={lastBallotsCount}
      setLastBallotsCount={setLastBallotsCount}
      lastEnvelopesCount={lastEnvelopesCount}
      setLastEnvelopesCount={setLastEnvelopesCount}
      morningBallotsCount={morningBallotsCount}
      morningEnvelopesCount={morningEnvelopesCount}
      nightCountsValid={nightCountsValid}
      setNightCountsValid={setNightCountsValid}
      onSave={handleSaveNightBallots}

      />}
    </>
  );
};

export default ParentComponent;
