// Load channel data from channels.json
fetch('channels.json')
    .then(response => response.json())
    .then(channels => {
        const channelList = document.getElementById('channelList');
        channels.forEach(channel => {
            // Create channel div
            const channelDiv = document.createElement('div');
            channelDiv.classList.add('channel');
            channelDiv.innerHTML = `
                <img src="${channel.logo}" alt="${channel.name}">
                <p>${channel.name}</p>
            `;
            channelDiv.onclick = () => changeStream(channel.stream);

            // Append to the channel list
            channelList.appendChild(channelDiv);
        });
    });

// Initialize the video player
const player = videojs('videoPlayer');

// Function to change the video stream
function changeStream(streamUrl) {
    player.src({ type: 'application/x-mpegURL', src: streamUrl });
    player.play();
}
