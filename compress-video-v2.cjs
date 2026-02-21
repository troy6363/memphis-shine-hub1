const ffmpegPath = require('ffmpeg-static');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const inputPath = path.join(__dirname, 'assets', 'PremierPolishing1.mp4');
const outputPath = path.join(__dirname, 'assets', 'premierpolishing1_compressed_v2.mp4');

console.log(`Input Path: ${inputPath}`);
console.log(`Output Path: ${outputPath}`);

if (!fs.existsSync(inputPath)) {
    console.error(`Input file not found at ${inputPath}`);
    process.exit(1);
}

const args = [
    '-i', inputPath,
    '-vcodec', 'libx264',
    '-b:v', '1000k', // Target bitrate 1000k
    '-maxrate', '1000k',
    '-bufsize', '2000k',
    '-preset', 'fast',
    '-an',
    '-y',
    outputPath
];

console.log(`Spawning ffmpeg with args: ${args.join(' ')}`);

const ffmpeg = spawn(ffmpegPath, args);

ffmpeg.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

ffmpeg.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

ffmpeg.on('close', (code) => {
    if (code === 0) {
        console.log('Compression finished successfully.');
    } else {
        console.error(`Compression failed with code ${code}`);
        process.exit(code);
    }
});
