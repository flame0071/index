function loadChannelList() {
    const channelListElement = document.getElementById('channelList');

    const channels = [
        {
            name: 'A2Z',
            url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_a2z.mpd',
            keyId: 'f703e4c8ec9041eeb5028ab4248fa094',
            key: 'c22f2162e176eee6273a5d0b68d19530'
        },
		{
            name: 'Asian Food Network',
            url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/asianfoodnetwork_sd.mpd',
            keyId: '1619db30b9ed42019abb760a0a3b5e7f',
            key: '5921e47fb290ae263291b851c0b4b6e4'
        },
        {
            name: 'TV5',
            url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/tv5_hd.mpd',
            keyId: '2615129ef2c846a9bbd43a641c7303ef',
            key: '07c7f996b1734ea288641a68e1cfdc4d'
        },
	    {
            name: 'Animax',
            url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_animax_sd.mpd',
            keyId: '92032b0e41a543fb9830751273b8debd',
            key: '03f8b65e2af785b10d6634735dbe6c11'
        },
	     {
            name: 'Nickelodeon',
            url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_nickelodeon.mpd',
            keyId: '9ce58f37576b416381b6514a809bfd8b',
            key: 'f0fbb758cdeeaddfa3eae538856b4d72'
        },
	     {
            name: 'HBO HD',
            url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbohd.mpd',
            keyId: 'd47ebabf7a21430b83a8c4b82d9ef6b1',
            key: '54c213b2b5f885f1e0290ee4131d425b'
        },
	    	     {
            name: 'HBO Now',
            url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hitsnow.mpd',
            keyId: '14439a1b7afc4527bb0ebc51cf11cbc1',
            key: '92b0287c7042f271b266cc11ab7541f1'
        },
	        {
            name: 'HBO Hits',
            url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hbohits.mpd',
            keyId: 'b04ae8017b5b4601a5a0c9060f6d5b7d',
            key: 'a8795f3bdb8a4778b7e888ee484cc7a1'
        },
	     {
            name: 'Cinemax',
            url: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_cinemax.mpd',
            keyId: 'b207c44332844523a3a3b0469e5652d7',
            key: 'fe71aea346db08f8c6fbf0592209f955'
        },
	      {
            name: 'HBO Signature',
            url: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_hbosign.mpd',
            keyId: 'a06ca6c275744151895762e0346380f5',
            key: '559da1b63eec77b5a942018f14d3f56f'
        },
	      {
            name: 'HBO Family',
            url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbofam.mpd',
            keyId: '872910c843294319800d85f9a0940607',
            key: 'f79fd895b79c590708cf5e8b5c6263be'
        },
	     {
            name: 'VIVA Cinema',
            url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/pbo_sd.mpd',
            keyId: 'dcbdaaa6662d4188bdf97f9f0ca5e830',
            key: '3bd6688b8b44e96201e753224adfc8fb'
        },
	     {
            name: 'PBO',
            url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/viva_sd.mpd',
            keyId: '07aa813bf2c147748046edd930f7736e',
            key: '31e752b441bd2972f2b98a4b1bc1c7a1'
        },
	    	      {
            name: 'TVN Movies',
            url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tvnmovie.mpd',
            keyId: '2e53f8d8a5e94bca8f9a1e16ce67df33',
            key: '3471b2464b5c7b033a03bb8307d9fa35'
        },
	     {
            name: 'TMC',
            url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tagalogmovie.mpd',
            keyId: '96701d297d1241e492d41c397631d857',
            key: 'ca2931211c1a261f082a3a2c4fd9f91b'
        },
	    {
            name: 'Knowledge Channel',
            url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_knowledgechannel.mpd',
            keyId: '0f856fa0412b11edb8780242ac120002',
            key: '783374273ef97ad3bc992c1d63e091e7'
        },
		{
            name: 'UAAP Varsity',
            url: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-teleradyo-dash-abscbnono/index.mpd',
            keyId: '47c093e0c9fd4f80839a0337da3dd876',
            key: '6e0f50a12f36599a55073868f814e81e'
        },
	    {
            name: 'Teleradyo',
            url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/cg_uaap_cplay_sd.mpd',
            keyId: '95588338ee37423e99358a6d431324b9',
            key: '50547394045b3d047dc7d92f57b5fb33'
        },
	    {
            name: 'One News HD',
            url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/onenews_hd1.mpd',
            keyId: 'd39eb201ae494a0b98583df4d110e8dd',
            key: '6797066880d344422abd3f5eda41f45f'
        },
	    {
            name: 'Channel News Asia',
            url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_channelnewsasia.mpd',
            keyId: 'b259df9987364dd3b778aa5d42cb9acd',
            key: '753e3dba96ab467e468269e7e33fb813'
        },
	    {
            name: 'BBC World News',
            url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/bbcworld_news_sd.mpd',
            keyId: 'f59650be475e4c34a844d4e2062f71f3',
            key: '119639e849ddee96c4cec2f2b6b09b40'
        },
	    	    {
            name: 'Aljazeera',
            url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_aljazeera.mpd',
            keyId: '0f85362a412b11edb8780242ac120002',
            key: 'd643dfbbfca6dc64e7f58fd67ea4b7d5'
        },
		{
            name: 'RPTV',
            url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cnn_rptv_prod_hd.mpd',
            keyId: '1917f4caf2364e6d9b1507326a85ead6',
            key: 'a1340a251a5aa63a9b0ea5d9d7f67595'
        },
		{
            name: 'BUKO',
            url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_buko_sd.mpd',
            keyId: 'd273c085f2ab4a248e7bfc375229007d',
            key: '7932354c3a84f7fc1b80efa6bcea0615'
        },
		{
            name: 'SARI SARI',
            url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_sari_sari_sd.mpd',
            keyId: '0a7ab3612f434335aa6e895016d8cd2d',
            key: 'b21654621230ae21714a5cab52daeb9d'
        },
		{
            name: 'IBC13',
            url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/ibc13_sd.mpd',
            keyId: '04e292bc99bd4ccba89e778651914254',
            key: 'ff0a62bdf8920ce453fe680330b563a5'
        },
		{
            name: 'ONE PH',
            url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/oneph_sd.mpd',
            keyId: '92834ab4a7e1499b90886c5d49220e46',
            key: 'a7108d9a6cfcc1b7939eb111daf09ab3'
        },
		{
            name: 'ONE SPORTS',
            url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_onesports_hd.mpd',
            keyId: '53c3bf2eba574f639aa21f2d4409ff11',
            key: '3de28411cf08a64ea935b9578f6d0edd'
        },
	    {
            name: 'ONE SPORTS+',
            url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_onesportsplus_hd1.mpd',
            keyId: '322d06e9326f4753a7ec0908030c13d8',
            key: '1e3e0ca32d421fbfec86feced0efefda'
        },
	     {
            name: 'PBA Rush',
            url: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_pbarush_hd1.mpd',
            keyId: '76dc29dd87a244aeab9e8b7c5da1e5f3',
            key: '95b2f2ffd4e14073620506213b62ac82'
        },
	     {
            name: 'Premier Sports',
            url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_premiersports_hd1.mpd',
            keyId: 'fc19c98cb9504a0fb78b22fea0a4b814',
            key: 'ea683112a96d4ae6c32d4ea13923e8c7'
        }, 
	     {
            name: 'SPOTV',
            url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_spotvhd.mpd',
            keyId: 'ec7ee27d83764e4b845c48cca31c8eef',
            key: '9c0e4191203fccb0fde34ee29999129e'
        },
	     {
            name: 'SPOTV2',
            url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_spotv2hd.mpd',
            keyId: '7eea72d6075245a99ee3255603d58853',
            key: '6848ef60575579bf4d415db1032153ed'
        },
	     {
            name: 'Tap Sports',
            url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tapsports.mpd',
            keyId: 'eabd2d95c89e42f2b0b0b40ce4179ea0',
            key: '0e7e35a07e2c12822316c0dc4873903f'
        },
        {
            name: 'Bilyonaryo', // Add your new channel here
            url: 'https://qp-pldt-live-grp-05-prod.akamaized.net/out/u/bilyonaryoch.mpd',
            keyId: '227ffaf09bec4a889e0e0988704d52a2',
            key: 'b2d0dce5c486891997c1c92ddaca2cd2'
        }
        // Add more channels here
    ];

    channels.forEach(channel => {
        const channelElement = document.createElement('div');
        channelElement.className = 'channel';
        channelElement.textContent = channel.name;
        channelElement.onclick = () => loadChannel(channel.url, channel.keyId, channel.key);
        channelListElement.appendChild(channelElement);
    });
}
