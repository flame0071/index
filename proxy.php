<?php
$streams = array(
    'animax' => 'http://phcfrancis3.duckdns.org:1234/stream/trickflix/animax/master.m3u8?u=phc&p=fe2592b42a727e977f055947385b709cc82b16b9a87f88c6abf3900d65d0cdc3',
    'dreamworks' => 'http://phcfrancis3.duckdns.org:1234/stream/trickflix/dreamworkstagalized/master.m3u8?u=phc&p=fe2592b42a727e977f055947385b709cc82b16b9a87f88c6abf3900d65d0cdc3',
    'rptv' => 'http://phcfrancis3.duckdns.org:1234/stream/trickflix/rptv/master.m3u8?u=phc&p=fe2592b42a727e977f055947385b709cc82b16b9a87f88c6abf3900d65d0cdc3',
    'nbaph' => 'http://phcfrancis3.duckdns.org:1234/stream/trickflix/nbaph/master.m3u8?u=phc&p=fe2592b42a727e977f055947385b709cc82b16b9a87f88c6abf3900d65d0cdc3',
    'a2z' => 'http://defaultgen.com:3050/live/elmapps@hotmail.com/eBq1GL48XR/558786.ts'
);

$stream = isset($_GET['stream']) ? $_GET['stream'] : '';

if (array_key_exists($stream, $streams)) {
    header('Content-Type: application/x-mpegURL');
    readfile($streams[$stream]);
} else {
    http_response_code(404);
    echo 'Stream not found.';
}
?>
