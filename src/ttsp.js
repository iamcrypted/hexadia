const googleTTS = require('google-tts-api'); // Mengimpor pustaka TTS

// Fungsi untuk mengonversi teks menjadi suara
function textToSpeech(text) {
  const url = googleTTS.getAudioUrl(text, {
    lang: 'en', // Bahasa yang digunakan
    slow: false, // Kecepatan suara
    host: 'https://translate.google.com', // Menggunakan host Google
  });

  // Menampilkan URL audio
  console.log(`Audio URL: ${url}`);
  return url;
}

// Contoh penggunaan
textToSpeech('Hello, welcome to Hexadia!');
