import * as utils from '@utils/utils';
import { LastLocationType } from 'react-router-last-location';

const localStorageLastLocationKey = 'task-management-lastLocation';

function acceptLocation(lastLocation: LastLocationType) {
  if (
    lastLocation &&
    lastLocation.pathname &&
    lastLocation.pathname !== '/' &&
    lastLocation.pathname.indexOf('auth') === -1 &&
    lastLocation.pathname !== '/logout'
  ) {
    return true;
  }

  return false;
}

export function saveLastLocation(lastLocation: LastLocationType) {
  const localStorageLocations = utils.getStorage(localStorageLastLocationKey);
  const _useLocations = localStorageLocations ?
    JSON.parse(localStorageLocations) :
    [];

  if (lastLocation !== null && acceptLocation(lastLocation)) {
    _useLocations.push(lastLocation.pathname);
    utils.setStorage(
      localStorageLastLocationKey,
      JSON.stringify(_useLocations),
      120
    );
  }
}

export function forgotLastLocation() {
  utils.removeStorage(localStorageLastLocationKey);
}

export function getLastLocation() {
  const localStorageLocations = utils.getStorage(localStorageLastLocationKey);
  if (!localStorageLocations) {
    return '/';
  }

  const _userLocations = JSON.parse(localStorageLocations);
  const result = _userLocations.length > 0 ? _userLocations.pop() : '/';
  return result;
}