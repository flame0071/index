jwplayer("container").setup({

		    controls: true,

		    displaytitle: false,

		    fullscreen: "true",

		    primary: 'html5',

		    stretching: "exactfit",

		    autostart: false,

logo: {

    file:

      "https://aplikasi.livestreaming.repl.co/logolsbtv.png",

    position: 'bottom-right'

    

  },

		    skin: {

		    	name: 'Netflix',

		    },

		    

		    

		    //sharing: {

		    	//sites: ["reddit","facebook","twitter"]

		    //},

		     

		    captions: {

		        color: '#FFF',

		         fontSize: 14,

		         backgroundOpacity: 0,

		         edgeStyle: 'raised' 

		    },

		  playlist: [{

		    title: "Bumblebee",

		    //description: "###",

		    image: "https://aplikasi.livestreaming.repl.co/poster.jpg",

		    sources: [{

		    file: "https://av-live-cdn.mncnow.id/live/eds/MNCSports2-HD/sa_dash_vmx/MNCSports2-HD.mpd", 

              drm: { 

                clearkey: 

                { "keyId": "45fec91ce1f19b6b1f31d69dcfaaf6cd", "key": "843e228ab109e9aa6c4822ee4ad05d7d" } },

          

		      label: '4K',

		      'type': 'mpd',

		      primary: 'html5',

		    },

		    ],

		    

		  }]

		});