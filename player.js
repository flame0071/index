const videos = [
  {
    manifestUri: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2304/default.mpd',
    clearKey: {
      'a098896d2b11c5f3906a993c3ba5c610': 'f3f842c54cc96cbbd0bcb96a4cb8a813'
    }
  },
  {
    manifestUri: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5055/default.mpd',
    clearKey: {
      '5d600eb70944d681c26c1f48fbe61f10': '796139ba05a2ab425f978c7fd98b4372'
    }
  },
  {
    manifestUri: 'https://tglmp03.akamaized.net/out/v1/d15476c2807d4380b0cc375a7d861752/manifest.mpd',
    clearKey: {
      '363b551913124d6b80074ca295b25129': 'a6c6efcab0076d572e5732fb6451d19c'
    }
  },
  {
    manifestUri: 'https://tglmp02.akamaized.net/out/v1/b37a81eb3585471cb9c639c78edcdefa/manifest.mpd',
    clearKey: {
      '90480f571f5d410891d7add7103c1e84': 'b64f887d2480bcaea992c2f0826449a9'
    }
  },
  {
    manifestUri: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/603/default.mpd',
    clearKey: {
      'efdb2a8d39151cc39f4b51d762cf9c10': '13cc535ad4a73201147863cac386cdd3'
    }
  },
  {
    manifestUri: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5095/default.mpd',
    clearKey: {
      'b5bfe3554df2abcd37afe130a7e1d310': 'dccbdf043ac43d18be0b3eb43a582876'
    }
  },
  {
    manifestUri: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2605/default.mpd',
    clearKey: {
      '6093e12639b24cd651ee6b3c13446d10': 'f8326f668c7bee309e5302b513e5bdf7'
    }
  },
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
