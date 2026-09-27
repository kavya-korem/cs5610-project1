const recommendations = {
  fiction: {
    thoughtful: [
      {
        title: "Never Let Me Go",
        author: "Kazuo Ishiguro",
      },
      {
        title: "The Remains of the Day",
        author: "Kazuo Ishiguro",
      },
      {
        title: "Normal People",
        author: "Sally Rooney",
      },
    ],

    adventurous: [
      {
        title: "The Night Circus",
        author: "Erin Morgenstern",
      },
      {
        title: "The Shadow of the Wind",
        author: "Carlos Ruiz Zafón",
      },
      {
        title: "Life of Pi",
        author: "Yann Martel",
      },
    ],

    cozy: [
      {
        title: "The House in the Cerulean Sea",
        author: "TJ Klune",
      },
      {
        title: "The Storied Life of A.J. Fikry",
        author: "Gabrielle Zevin",
      },
      {
        title: "The Guernsey Literary and Potato Peel Pie Society",
        author: "Mary Ann Shaffer",
      },
    ],

    curious: [
      {
        title: "Cloud Atlas",
        author: "David Mitchell",
      },
      {
        title: "The Midnight Library",
        author: "Matt Haig",
      },
      {
        title: "The Seven Deaths of Evelyn Hardcastle",
        author: "Stuart Turton",
      },
    ],
  },

  mystery: {
    thoughtful: [
      {
        title: "The Murder of Roger Ackroyd",
        author: "Agatha Christie",
      },
      {
        title: "The Devotion of Suspect X",
        author: "Keigo Higashino",
      },
      {
        title: "The Secret History",
        author: "Donna Tartt",
      },
    ],

    adventurous: [
      {
        title: "And Then There Were None",
        author: "Agatha Christie",
      },
      {
        title: "The Hound of the Baskervilles",
        author: "Arthur Conan Doyle",
      },
      {
        title: "The Woman in White",
        author: "Wilkie Collins",
      },
    ],

    cozy: [
      {
        title: "The Thursday Murder Club",
        author: "Richard Osman",
      },
      {
        title: "Vera Wong's Unsolicited Advice for Murderers",
        author: "Jesse Q. Sutanto",
      },
      {
        title: "Magpie Murders",
        author: "Anthony Horowitz",
      },
    ],

    curious: [
      {
        title: "The Silent Patient",
        author: "Alex Michaelides",
      },
      {
        title: "The Guest List",
        author: "Lucy Foley",
      },
      {
        title: "The 7½ Deaths of Evelyn Hardcastle",
        author: "Stuart Turton",
      },
    ],
  },

  fantasy: {
    thoughtful: [
      {
        title: "The Invisible Life of Addie LaRue",
        author: "V. E. Schwab",
      },
      {
        title: "Piranesi",
        author: "Susanna Clarke",
      },
      {
        title: "Circe",
        author: "Madeline Miller",
      },
    ],

    adventurous: [
      {
        title: "The Hobbit",
        author: "J. R. R. Tolkien",
      },
      {
        title: "Six of Crows",
        author: "Leigh Bardugo",
      },
      {
        title: "Mistborn",
        author: "Brandon Sanderson",
      },
    ],

    cozy: [
      {
        title: "Legends & Lattes",
        author: "Travis Baldree",
      },
      {
        title: "Howl's Moving Castle",
        author: "Diana Wynne Jones",
      },
      {
        title: "The Very Secret Society of Irregular Witches",
        author: "Sangu Mandanna",
      },
    ],

    curious: [
      {
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
      },
      {
        title: "Jonathan Strange & Mr Norrell",
        author: "Susanna Clarke",
      },
      {
        title: "The Once and Future Witches",
        author: "Alix E. Harrow",
      },
    ],
  },
};

const genreSelect = document.querySelector("#genre");
const moodSelect = document.querySelector("#mood");
const findButton = document.querySelector("#find-books");
const results = document.querySelector("#book-results");

function showRecommendations() {
  if (!genreSelect || !moodSelect || !results) {
    return;
  }

  const genre = genreSelect.value;
  const mood = moodSelect.value;

  const books = recommendations[genre][mood];

  results.innerHTML = "";

  books.forEach((book) => {
    const article = document.createElement("article");
    article.className = "recommendation";

    const title = document.createElement("h3");
    title.textContent = book.title;

    const author = document.createElement("p");
    author.textContent = book.author;

    article.appendChild(title);
    article.appendChild(author);

    results.appendChild(article);
  });
}

if (findButton) {
  findButton.addEventListener("click", showRecommendations);
}
