var config = {
  plugins: [
      "video-png"
    , "hud"
    , "battery"
    , "pilot"
    , "blackbox"
  ],

  keyboard: 'qwerty',

  blackbox: {
      path: "/tmp"
  },
  replay: {
      path: "/tmp/2013-06-03_09-10-33/"
  }
};

module.exports = config;
