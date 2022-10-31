import Player from '@vimeo/player';

const player = new Player('vimeo-player');
const PLAYER_CURRENT_TIME = 'videoplayer-current-time';

player.on('timeupdate', setCurrentTime);

player
  .setCurrentTime(getLocalStorage(PLAYER_CURRENT_TIME))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        console.log(
          `${error}`,
          '\n',
          `Seconds value: ${getLocalStorage(PLAYER_CURRENT_TIME)}`
        );
        break;

      default:
        console.log(`${error}`);
        break;
    }
  });

function setCurrentTime(data) {
  setLocalStorage(PLAYER_CURRENT_TIME, data.seconds);
}

function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getLocalStorage(key) {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}
