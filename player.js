const videos = [
  {
    manifestUri: 'https://cors-anywhere.herokuapp.com/https://linearjitp-playback.astro.com.my/dash-wv/linear/2304/default.mpd',
    clearKey: {
      'a098896d2b11c5f3906a993c3ba5c610': 'f3f842c54cc96cbbd0bcb96a4cb8a813'
    }
  },
  // ... other videos
];

async function loadVideo(index) {
  const video = document.getElementById('video');
  const player = new shaka.Player(video);

  const { manifestUri, clearKey } = videos[index];
  const key = Object.keys(clearKey)[0];
  const value = clearKey[key];

  const config = {
    drm: {
      clearKeys: {
        [key]: value
      }
    }
  };

  player.configure(config);

  try {
    await player.load(manifestUri);
    console.log('The video has now been loaded!');
  } catch (e) {
    console.error('Error loading video', e);
  }
}

// Load the first video by default
loadVideo(0);
