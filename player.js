document.addEventListener('DOMContentLoaded', () => {
    const videoPlayer = document.getElementById('video-player');
    const channelList = document.getElementById('channel-list');

    // Example M3U playlist
    const m3uPlaylistUrl = 'path/to/your/playlist.m3u';

    // Load M3U playlist
    fetch(m3uPlaylistUrl)
        .then(response => response.text())
        .then(data => {
            const lines = data.split('\n');
            let currentFolder = null;
            lines.forEach(line => {
                if (line.startsWith('#EXTINF')) {
                    const parts = line.split(',');
                    const channelName = parts[1].trim();
                    const channelUrl = lines.shift().trim();
                    
                    if (currentFolder) {
                        const folderContent = document.createElement('div');
                        folderContent.className = 'folder-content';
                        folderContent.innerHTML = `<div class="channel"><img src="${channelUrl}" alt="${channelName}"><p>${channelName}</p></div>`;
                        currentFolder.appendChild(folderContent);
                    } else {
                        const channelDiv = document.createElement('div');
                        channelDiv.className = 'channel';
                        channelDiv.innerHTML = `<img src="${channelUrl}" alt="${channelName}"><p>${channelName}</p>`;
                        channelDiv.addEventListener('click', () => {
                            videoPlayer.src = channelUrl;
                        });
                        channelList.appendChild(channelDiv);
                    }
                } else if (line.startsWith('#EXTGROUP')) {
                    // Handle folders
                    if (currentFolder) {
                        const folderTitle = document.createElement('div');
                        folderTitle.className = 'folder';
                        folderTitle.textContent = line.replace('#EXTGROUP:', '');
                        folderTitle.addEventListener('click', () => {
                            const content = folderTitle.nextElementSibling;
                            content.style.display = content.style.display === 'none' ? 'block' : 'none';
                        });
                        channelList.appendChild(folderTitle);
                    }
                    currentFolder = document.createElement('div');
                    channelList.appendChild(currentFolder);
                }
            });
        })
        .catch(error => {
            console.error('Error loading M3U playlist:', error);
        });
});
