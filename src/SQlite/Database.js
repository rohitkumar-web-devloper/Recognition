import {openDatabase} from 'react-native-sqlite-storage';
const db = openDatabase(
    {
      name: 'TechChat.db',
      // location: 'default',
    },
    () => console.log('Database opened successfully'),
    (error) => console.error('Failed to open database', error),
  );
  export default db;