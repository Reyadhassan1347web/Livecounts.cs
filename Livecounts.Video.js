function search() {
    const prompt = window.prompt("Enter Video Name Or Id.");
    if (prompt) {
      fetch(`https://mixerno.space/api/youtube-video-counter/search/${prompt}`)
        .then((res) => res.json())
        .then((data) => {
          window.location.href = "?id=" + data.list[0][2];
        });
    }
  }