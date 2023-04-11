function search() {
    const prompt = window.prompt("Enter A TikTok User (Ex: @mrbeast).");
    if (prompt) {
      fetch(`https://api.subscriberwars.space/tiktok/search/${prompt}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(id)
          window.location.href = "?id=" + data.users[0].id;
        });
    }
  }