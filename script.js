function generate(){
    var quotes = {
        "- Pierce Brown, Red Rising" : '"Man cannot be freed by the same injustice that enslaved it."',
        "- John Galsworthy" : '"Life calls the tune, we dance."',
        "- Serina Hartwell" : '"We nurture our creativity when we release our inner child. Let it run and roam free. It will take you on a brighter journey."',
        "- D. Antoinette Foy" : '"Do not be afraid to be afraid. Have fear, and then conquer the shit out of it."',
        "- Lewis B. Smedes" : '"To forgive is to set a prisoner free and discover that the prisoner was you."',
        "- Michelangelo" : '"I saw the angel in the marble and carved until I set him free."',
        "- Douglas Horton" : '"Smile, it is free therapy"',
        "- Richard Bach" : '"If you love someone, set them free. If they come back they are yours; if they do not they never were."',
        "- James A. Garfield" : '"The truth will set you free, but first it will make you miserable."',
        "- Aristotle" : '"The law is reason, free from passion."',
        "- Muhammad Ali" : '"I know where I am going and I know the truth, and I do not have to be what you want me to be. I am free to be what I want."',
        "- Jawaharlal Nehru" : '"Life is like a game of cards. The hand you are dealt is determinism; the way you play it is free will."',
        "- Langston Hughes" : '"An artist must be free to choose what he does, certainly, but he must also never be afraid to do what he might choose."',
        "- Martin Luther King, Jr." : '"Out of the mountain of despair, a stone of hope."',
        "- Audrey Hepburn" : '"Nothing is impossible. The word itself says ‘I’m possible!"',
        "- Michael Altshuler" : '"The bad news is time flies. The good news is you’re the pilot."',
        "- Winston Churchill" : '"Success is not final, failure is not fatal: it is the courage to continue that counts."',
        "- Oprah Winfrey" : '"You define your own life. Don’t let other people write your script."',
        "- Malala Yousafzai" : '"You are never too old to set another goal or to dream a new dream."',
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}

