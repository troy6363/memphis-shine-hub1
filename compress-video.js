const ffmpegPath = require('ffmpeg-static');
const { spawn } = require('child_process');
const path = require('path');

const inputPath = path.join(__dirname, 'assets', 'PremierPolishing1.mp4');
const outputPath = path.join(__dirname, 'assets', 'premierpolishing1_compressed.mp4');

console.log(`Compressing ${inputPath} to ${outputPath}...`);

const args = [
    '-i', inputPath,
    '-vcodec', 'libx264',
    '-crf', '28', // Higher CRF = lower quality/smaller size
    '-preset', 'fast',
    '-an', // Remove audio
    '-y', // Overwrite output
    outputPath
];

const ffmpeg = spawn(ffmpegPath, args);

ffmpeg.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

ffmpeg.stderr.on('data', (data) => {
    // ffmpeg logs to stderr
    console.log(`stderr: ${data}`);
});

ffmpeg.on('close', (code) => {
    if (code === 0) {
        console.log('Compression finished successfully.');
    } else {
        console.error(`Compression failed with code ${code}`);
    }
});
