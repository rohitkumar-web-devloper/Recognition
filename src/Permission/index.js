/* eslint-disable no-unused-vars */
import {checkMultiple, PERMISSIONS, RESULTS, requestMultiple} from 'react-native-permissions';
let permissionRequests = 0;
const maxPermissionRequests = 3; // Define maximum number of permission requests
let permission;

const askPermission = async (value) => {
  permission = value;
  if (permissionRequests >= maxPermissionRequests) {
    console.log('Maximum permission requests reached. Provide guidance to the user.');
    return;
  }
  const result = await requestMultiple([PERMISSIONS.ANDROID[permission]]).then(async () => {
    const result = await check();
    if (result) {
      return true;
    }
  });
  if (result) {
    return true;
  }
};

const check = async () => {
  const data = await checkMultiple([PERMISSIONS.ANDROID[permission]]).then((result) => {
    if (result[PERMISSIONS.ANDROID[permission]] === RESULTS.DENIED && permissionRequests < maxPermissionRequests) {
      console.log('could not get any result. Please try later.');
      permissionRequests++; // Increment the permission request counter
      askPermission();
    } else if (result[PERMISSIONS.ANDROID[permission]] === RESULTS.DENIED && result[PERMISSIONS.ANDROID[permission]] === RESULTS.BLOCKED) {
      console.log('Permission Blocked.');
    } else if (result[PERMISSIONS.ANDROID[permission]] === RESULTS.GRANTED) {
      console.log('Permission Granted');
      return true;
    }
  });
  if (data) {
    return true;
  }
};
export {askPermission};
