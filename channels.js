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
            name: 'Kapamilya Channel',
            url: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-kapcha-dash-abscbnono/index.mpd',
            keyId: 'bd17afb5dc9648a39be79ee3634dd4b8',
            key: '3ecf305d54a7729299b93a3d69c02ea5'
        },
        {
            name: 'TV5',
            url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/tv5_hd.mpd',
            keyId: '2615129ef2c846a9bbd43a641c7303ef',
            key: '07c7f996b1734ea288641a68e1cfdc4d'
        },
	    {
            name: 'Knowledge Channel',
            url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_knowledgechannel.mpd',
            keyId: '0f856fa0412b11edb8780242ac120002',
            key: '783374273ef97ad3bc992c1d63e091e7'
        },
		{
            name: 'Teleradyo',
            url: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-teleradyo-dash-abscbnono/index.mpd',
            keyId: '47c093e0c9fd4f80839a0337da3dd876',
            key: '50547394045b3d047dc7d92f57b5fb33'
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
