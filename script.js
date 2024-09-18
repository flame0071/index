document.addEventListener('DOMContentLoaded', () => {
    const player = document.getElementById('player');
    const channelList = document.getElementById('channelList');

    // Channel list data
    const channels = [
        { name: 'A2Z', url: 'http://starshare.live:8080/live/Pradeep/Pradeep/151010.m3u8' },
        { name: 'Kapamilya', url: 'http://iptvtree.net:8080/live/GenIptv2023/XkgMCdR7PJzShK5m/144837.ts' },
        { name: 'Animal Planet', url: 'http://starshare.live:8080/live/Pradeep/Pradeep/151008.m3u8' },
        { name: 'AXN', url: 'http://starshare.live:8080/live/Pradeep/Pradeep/151036.m3u8' },
        { name: 'HISTORY', url: 'http://iptvtree.net:8080/live/GenIptv2023/XkgMCdR7PJzShK5m/304249.ts' },
        { name: 'GMA Life', url: 'http://starshare.live:8080/live/Pradeep/Pradeep/151026.m3u8' },
        { name: 'GMA News', url: 'http://starshare.live:8080/live/Pradeep/Pradeep/151020.m3u8' },
        { name: 'GMA Pinoy', url: 'http://starshare.live:8080/live/Pradeep/Pradeep/19253.m3u8' },
        { name: 'Hits Movies', url: 'http://iptvtree.net:8080/live/GenIptv2023/XkgMCdR7PJzShK5m/285605.ts' }
    ];

    // Populate the channel list
    channels.forEach(channel => {
        const channelDiv = document.createElement('div');
        channelDiv.textContent = channel.name;
        channelDiv.dataset.url = channel.url;
        channelList.appendChild(channelDiv);
    });

    // Handle channel selection
    channelList.addEventListener('click', (event) => {
        if (event.target.tagName === 'DIV') {
            const selectedURL = event.target.dataset.url;
            player.src = selectedURL;
            player.type = selectedURL.endsWith('.m3u8') ? 'application/x-mpegURL' : 'video/mp2t';
        }
    });

    // Swipe detection
    let touchstartX = 0;
    let touchendX = 0;

    channelList.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
    });

    channelList.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        if (touchendX < touchstartX) {
            // Swipe left
            nextChannel();
        }
        if (touchendX > touchstartX) {
            // Swipe right
            previousChannel();
        }
    }

    let currentIndex = 0;

    function nextChannel() {
        if (currentIndex < channels.length - 1) {
            currentIndex++;
            changeChannel();
        }
    }

    function previousChannel() {
        if (currentIndex > 0) {
            currentIndex--;
            changeChannel();
        }
    }

    function changeChannel() {
        const selectedChannel = channels[currentIndex];
        player.src = selectedChannel.url;
        player.type = selectedChannel.url.endsWith('.m3u8') ? 'application/x-mpegURL' : 'video/mp2t';
        channelList.children[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
});
