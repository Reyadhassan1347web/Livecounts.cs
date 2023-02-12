function search() {
    const prompt = window.prompt("Enter channel name, ID, or URL.");
    if (prompt) {
      fetch(`https://mixerno.space/api/youtube-channel-counter/search/${prompt}`)
        .then((res) => res.json())
        .then((data) => {
          window.location.href = "?id=" + data.list[0][2];
        });
    }
  }