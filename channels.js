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
            name: 'TV5',
            url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/tv5_hd.mpd',
            keyId: '2615129ef2c846a9bbd43a641c7303ef',
            key: '07c7f996b1734ea288641a68e1cfdc4d'
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
