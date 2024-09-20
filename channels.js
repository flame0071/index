const channels = [
    { name: "Cinema One", url: "https://cinemaone-abscbn-ono.amagi.tv/index_4.m3u8" },
    { name: "Cinemo", url: "https://cinemo-abscbn-ono.amagi.tv/playlist.m3u8" },
    { name: "Kapuso Stream", url: "https://www.youtube.com/embed/videoseries?list=PLyTidGpwe3eqxcNoMsRZHhJq_cBRU04xu", isYouTube: true },
    { name: "Channel News Asia", url: "https://livevideo.mediacorp.sg/CHANNELNEWSASIA/master.m3u8" },
];

function populateChannelList() {
    const channelList = document.getElementById('channelList');
    channels.forEach(channel => {
        const channelBox = document.createElement('div');
        channelBox.className = 'channel-box';
        channelBox.textContent = channel.name;
        channelBox.onclick = () => playStream(channel.url, channel.isYouTube);
        channelList.appendChild(channelBox);
    });
}

// Call this function to populate the channel list on page load
document.addEventListener('DOMContentLoaded', populateChannelList);
