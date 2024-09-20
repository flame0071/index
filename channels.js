const channels = [
    { name: "TV5", url: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/tv5_qp.m3u8" },
    { name: "Cinema One", url: "https://cinemaone-abscbn-ono.amagi.tv/index_4.m3u8" },
    { name: "Cinemo", url: "https://cinemo-abscbn-ono.amagi.tv/playlist.m3u8" },
    { name: "Kapuso Stream", url: "https://www.youtube.com/embed/videoseries?list=PLyTidGpwe3eqxcNoMsRZHhJq_cBRU04xu", isYouTube: true },
    { name: "Channel News Asia", url: "https://livevideo.mediacorp.sg/CHANNELNEWSASIA/master.m3u8" },
    { name: "A2Z", url: "http://starshare.live:8080/live/Pradeep/Pradeep/151010.m3u8" },
    { name: "Animal Planet", url: "http://starshare.live:8080/live/Pradeep/Pradeep/151008.m3u8" },
    { name: "AXN", url: "http://starshare.live:8080/live/Pradeep/Pradeep/151036.m3u8" },
    { name: "ANC", url: "https://ancglobal-abscbn-ono.amagi.tv/playlist720_p.m3u8" },
    { name: "GMA Life", url: "http://starshare.live:8080/live/Pradeep/Pradeep/151026.m3u8" },
    { name: "GMA News", url: "http://starshare.live:8080/live/Pradeep/Pradeep/151020.m3u8" },
    { name: "GMA Pinoy", url: "http://starshare.live:8080/live/Pradeep/Pradeep/19253.m3u8" },
    { name: "CNN", url: "https://turnerlive.warnermediacdn.com/hls/live/586495/cnngo/cnn_slate/VIDEO_0_3564000.m3u8" },
    { name: "Discovery Asia", url: "https://cdn1.skygo.mn/live/disk1/Discovery_Asia/HLS-FTA/Discovery_Asia.m3u8" },
    { name: "Wild Planet", url: "https://d3c7duantorcb1.cloudfront.net/v1/manifest/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-jpfvel38m2ce0-prod/75c6cfbb-5c9e-4bcc-a6d4-38c6f8f63e1f/3.m3u8" },
    { name: "Myx", url: "https://myxnola-abscbn-ono.amagi.tv/index_4.m3u8" },
    { name: "NHK World", url: "https://nhkwlive-ojp.akamaized.net/hls/live/2003459/nhkwlive-ojp-en/index.m3u8" },
    { name: "K-Movies", url: "https://7732c5436342497882363a8cd14ceff4.mediatailor.us-east-1.amazonaws.com/v1/master/04fd913bb278d8775298c26fdca9d9841f37601f/Plex_NewMovies/playlist.m3u8" }
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
