const channels = [
    { name: "A2Z", url: "http://apexelite.xyz:3050/live/scottandersonholmes23@gmail.com/e5y43zFzmq/558786.m3u8" },
    { name: "BUKO", url: "http://apexelite.xyz:3050/live/scottandersonholmes23@gmail.com/e5y43zFzmq/558780.m3u8" },
    { name: "HITS HD", url: "http://apexelite.xyz:3050/live/scottandersonholmes23@gmail.com/e5y43zFzmq/558765.m3u8" },
    { name: "MPTV", url: "http://apexelite.xyz:3050/live/scottandersonholmes23@gmail.com/e5y43zFzmq/558764.m3u8" },
    { name: "Kix", url: "http://apexelite.xyz:3050/live/scottandersonholmes23@gmail.com/e5y43zFzmq/558763.m3u8" },
    { name: "One News", url: "http://apexelite.xyz:3050/live/scottandersonholmes23@gmail.com/e5y43zFzmq/558757.m3u8" },
    { name: "One Sport+", url: "http://starshare.live:8080/live/Pradeep/Pradeep/150981.m3u8" },
    { name: "PBA RUSH", url: "http://apexelite.xyz:3050/live/scottandersonholmes23@gmail.com/e5y43zFzmq/558787.m3u8" },
    { name: "Tap Action Flix", url: "http://apexelite.xyz:3050/live/scottandersonholmes23@gmail.com/e5y43zFzmq/558748.m3u8" },
    { name: "Tap Edge", url: "http://apexelite.xyz:3050/live/scottandersonholmes23@gmail.com/e5y43zFzmq/558747.m3u8" },
    { name: "Tap Sports", url: "http://starshare.live:8080/live/Pradeep/Pradeep/150969.m3u8" },
    { name: "VIVA Cinema", url: "http://starshare.live:8080/live/Pradeep/Pradeep/151090.m3u8" },
    { name: "Kapamilya Online", url: "http://128.0.104.44:8070/live/GenIptv2023/XkgMCdR7PJzShK5m/144837.ts" },
    { name: "Arirang", url: "https://amdlive-ch03-ctnd-com.akamaized.net/arirang_1ch/smil:arirang_1ch.smil/chunklist_b3256000_sleng.m3u8" },
    { name: "TV5", url: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/tv5_qp.m3u8" },
    { name: "BBC World News", url: "https://cdn4.skygo.mn/live/disk1/BBC_News/HLSv3-FTA/BBC_News-avc1_1499968=1-mp4a_208000_eng=2.m3u8" },
    { name: "CineMo!", url: "https://cinemo-abscbn-ono.amagi.tv/playlist.m3u8" },
    { name: "CinemaOne", url: "https://cinemaone-abscbn-ono.amagi.tv/index_4.m3u8" },
    { name: "ANC", url: "https://ancglobal-abscbn-ono.amagi.tv/playlist720_p.m3u8" },
    { name: "Kapuso Stream", url: "https://www.youtube.com/embed/example", isYouTube: true }
];

function loadChannels() {
    const channelList = document.getElementById('channelList');
    channels.forEach(channel => {
        const channelBox = document.createElement('div');
        channelBox.className = 'channel-box';
        channelBox.innerText = channel.name;
        channelBox.onclick = () => playStream(channel.url, channel.isYouTube);
        channelList.appendChild(channelBox);
    });
}

function toggleChannelList() {
    const channelList = document.getElementById('channelList');
    channelList.style.display = channelList.style.display === 'none' ? 'block' : 'none';
}

function playStream(url, isYouTube = false) {
    const videoPlayer = document.getElementById('videoPlayer');
    const youtubePlayer = document.getElementById('youtubePlayer');
    
    if (isYouTube) {
        videoPlayer.style.display = 'none';
        youtubePlayer.style.display = 'block';
        youtubePlayer.src = url + '?autoplay=1';
    } else {
        youtubePlayer.style.display = 'none';
        videoPlayer.style.display = 'block';
        const player = videojs('videoPlayer');
        player.src({ type: 'application/x-mpegURL', src: url });
        player.play();
    }

    toggleChannelList();
}

document.addEventListener('DOMContentLoaded', loadChannels);
