const channels = [
    { name: "TV5", url: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/tv5_qp.m3u8", logo: "https://static.wikia.nocookie.net/tv5network/images/b/b9/TV5_logo_2013.png" },
    { name: "A2Z", url: "http://apexelite.xyz:3050/live/scottandersonholmes23@gmail.com/e5y43zFzmq/558786.m3u8", logo: "https://static.wikia.nocookie.net/russel/images/8/85/A2Z_Channel_11_without_Channel_11_3D_Logo_2020.png" },
    { name: "BUKO", url: "http://apexelite.xyz:3050/live/scottandersonholmes23@gmail.com/e5y43zFzmq/558780.m3u8", logo: "https://static.wikia.nocookie.net/logopedia/images/6/67/BuKo_Channel_(2021-.n.v.).png" },
    { name: "HITS HD", url: "http://apexelite.xyz:3050/live/scottandersonholmes23@gmail.com/e5y43zFzmq/558765.m3u8", logo: "https://www.hitstv.com/assets/hits.png" },
    { name: "NHK World", url: "http://apexelite.xyz:3050/live/scottandersonholmes23@gmail.com/e5y43zFzmq/558790.m3u8", logo: "https://logotyp.us/file/nhk.svg" },
    { name: "One News", url: "http://apexelite.xyz:3050/live/scottandersonholmes23@gmail.com/e5y43zFzmq/558789.m3u8", logo: "https://static.wikia.nocookie.net/russel/images/5/53/One_News_Logo_2020.png" },
    // Add more channels as needed
];

function loadChannels() {
    const channelList = document.getElementById('channelList');
    channels.forEach(channel => {
        const channelBox = document.createElement('div');
        channelBox.className = 'channel';
        channelBox.innerHTML = `
            <img src="${channel.logo}" alt="${channel.name}">
            <p>${channel.name}</p>
        `;
        channelBox.onclick = () => playStream(channel.url);
        channelList.appendChild(channelBox);
    });
}

function playStream(url) {
    const videoPlayer = document.getElementById('videoPlayer');
    const player = videojs(videoPlayer);
    player.src({ type: 'application/x-mpegURL', src: url });
    player.play();
}

document.addEventListener('DOMContentLoaded', loadChannels);
