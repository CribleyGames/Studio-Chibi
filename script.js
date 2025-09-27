var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = `${content.scrollHeight}px`;
    }
  });
}
const apiKey = "AIzaSyA-EKjE9qaZ7yGp9WuKxymDJ5242n0LoPk";
const members = [
  { name: "XK Generations", id: "UCkRddYlnINU7590SNdDOhaQ" },
  { name: "BluSky", id: "UC8PLfy4Foo__-JrNcNlSyWQ" },
  { name: "Cribley", id: "UCi2dvnYghSmSFgaqe-D_Ygg" },

  // Content Creators
  { name: "Aztcc", id: "UCLZFb1g0c3fO7mpLZHrz1mg" },
  { name: "Butter Hoarder", id: "UCZ4QudVaE2u9fZoiaLd7TGg" },
  { name: "Emptea", id: "UC3zpvMnCAcTcNilk1R92AMw" },
  { name: "FluffyKat", id: "UCY_fBctsuZx9WYaP-VllUIw" },
  { name: "Hanul Raihanul", id: "UCXXXXXXXXXXX" },
  { name: "Jane Sky", id: "UCEecnsmIjUNFsIwlhI4jJHw" },
  { name: "KiMuJo", id: "UC6Ih3jEEG2G-6cCkiVMA-FQ" },
  { name: "Paulymerase", id: "UCLvaqOSo7n9YXFO4qMQukhw" },
  { name: "SKY GAZA", id: "UC1mTH_1smU8bL2Lbqld0yTQ" },
  { name: "SkyLaart", id: "UCS8eBhaBlNt9Upl5lKnYP8Q" },
  { name: "ThatSkyFlame", id: "UC_oyWrEmtBF10g5iXo2HVTw" },
  { name: "ThatSkySim", id: "UCwaM9JdzGmlq-MplJJ2_vgw" },
  { name: "Toyz Gaming", id: "UCLJQIuwPKMibOCdJyMX0gnw" },
  { name: "The Crafting Kitten", id: "UCOv0pUlVM-CncU1KQz0A6lg" },
  { name: "Thy Sky Guy", id: "UCdQIxv2gx1WgLjR5mflpfmQ" },
  { name: "unSparken", id: "UC3mU_Fr6lErAMsrxzoCIViA" },

  // Former Members
  { name: "Irinrin", id: "UCUvUJfFJCtZK5B-E8lnPL-g" }
];

async function updateMembers() {
  const members = document.querySelectorAll(".member");

  for (let member of members) {
    const channelId = member.dataset.id;
    const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${apiKey}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      const snippet = data.items[0].snippet;
      const stats = data.items[0].statistics;

      // Update profile picture
      const img = member.querySelector(".member-pfp");
      img.src = snippet.thumbnails.high.url;
      img.alt = snippet.title;

      // Update name
      const name = member.querySelector(".member-name");
      name.textContent = snippet.title;

      // Update subscriber count
      const subs = member.querySelector(".member-subs");
      if (subs) {
        subs.textContent = `${Number(stats.subscriberCount).toLocaleString()} subscribers`;
      }

    } catch (err) {
      console.error(`Failed to update channel ${channelId}:`, err);
    }
  }
}

updateMembers();
