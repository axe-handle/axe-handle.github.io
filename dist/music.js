const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "白马非马",
        artist: '许嵩',
        url: 'http://music.163.com/song/media/outer/url?id=167858.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/84.jpg',
      },
      {
        name: '最佳歌手',
        artist: '许嵩',
        url: 'http://music.163.com/song/media/outer/url?id=412902950.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/8.jpg',
      },
      {
        name: '星座书上',
        artist: '许嵩',
        url: 'http://music.163.com/song/media/outer/url?id=167894.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg',
      }
    ]
});