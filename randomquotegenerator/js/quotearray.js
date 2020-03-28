// Array for use in script.js. Array of quotes, each containing a quote and a source. Selected quotes contain tags, a citation and/or year.


let quotes = [
   {quote: 'The Way To Get Started Is To Quit Talking And Begin Doing.',
    source: 'Walt Disney',
    tags: 'Famous People'
},
    {quote: 'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty',
    source: 'Winston Churchill',
    tags: 'Prime Minister'
},
    {quote: 'Don’t Let Yesterday Take Up Too Much Of Today.',
    source: 'Will Rogers'
} ,
    {quote: 'You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.',
    source: 'Anon',
    tags: 'Anon'
} ,
    {quote: 'It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.',
    source: 'Vince Lombardi'
} ,
    {quote: ' If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.',
    source: 'Steve Jobs',
    tags: 'Successful People'
} ,
    {quote: 'People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.',
    source: 'Rob Siltanen'
} ,
    {quote: 'Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.',
    source: 'Og Mandino'
} ,
    {quote: ' Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That’s The Classic Entrepreneur.',
    source: 'Mohnish Pabrai'
} ,
    {quote: 'We May Encounter Many Defeats But We Must Not Be Defeated.',
    source: 'Maya Angelou'
},
    {quote: 'Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.',
    source: 'Johann Wolfgang Von Goethe'
} ,
    {quote: 'Imagine Your Life Is Perfect In Every Respect; What Would It Look Like?',
    source: 'Brian Tracy',
    citation: 'https://www.briantracy.com/blog/personal-success/26-motivational-quotes-for-success/'
} ,
    {quote: 'We Generate Fears While We Sit. We Overcome Them By Action.',
    source: 'Dr. Henry Link'
} ,
    {quote: 'Whether You Think You Can Or Think You Can’t, You’re Right.',
    source: 'Henry Ford'
} ,
    {quote: 'Security Is Mostly A Superstition. Life Is Either A Daring Adventure Or Nothing.',
    source: 'Helen Keller'
} ,
    {quote: 'The Man Who Has Confidence In Himself Gains The Confidence Of Others.',
    source: 'Hasidic Proverb'
} ,
    {quote: 'The Only Limit To Our Realization Of Tomorrow Will Be Our Doubts Of Today.',
    source: 'Franklin D. Roosevelt'
} ,
    {quote: 'Creativity Is Intelligence Having Fun.',
    source: 'Albert Einstein'
} ,
    {quote: 'What You Lack In Talent Can Be Made Up With Desire, Hustle And Giving 110% All The Time.',
    source: 'Don Zimmer'
} ,
    {quote: 'Do What You Can With All You Have, Wherever You Are.',
    source: 'Theodore Roosevelt',
    tags: 'U.S President'
} ,
    {quote: 'Develop An ‘Attitude Of Gratitude’. Say Thank You To Everyone You Meet For Everything They Do For You.',
    source: 'Brian Tracy',
    citation: 'https://www.briantracy.com/blog/personal-success/26-motivational-quotes-for-success/'
} ,
    {quote: 'You Are Never Too Old To Set Another Goal Or To Dream A New Dream.',
    source: 'C.S. Lewis'
} ,
    {quote: 'To See What Is Right And Not Do It Is A Lack Of Courage. ',
    source: 'Confucius'
} ,
    {quote: 'Reading Is To The Mind, As Exercise Is To The Body.',
    source: 'Brian Tracy',
    citation: 'https://www.briantracy.com/blog/personal-success/26-motivational-quotes-for-success/'
} ,
    {quote: 'Fake It Until You Make It! Act As If You Had All The Confidence You Require Until It Becomes Your Reality.',
    source: 'Brian Tracy',
    citation: 'https://www.briantracy.com/blog/personal-success/26-motivational-quotes-for-success/'
} ,
    {quote: 'The Future Belongs To The Competent. Get Good, Get Better, Be The Best!',
    source: 'Brian Tracy',
    citation: 'https://www.briantracy.com/blog/personal-success/26-motivational-quotes-for-success/'
} ,
    {quote: 'For Every Reason It’s Not Possible, There Are Hundreds Of People Who Have Faced The Same Circumstances And Succeeded.',
    source: 'Jack Canfield'
} ,
    {quote: 'Things Work Out Best For Those Who Make The Best Of How Things Work Out.',
    source: 'John Wooden'
} ,
    {quote: ' A Room Without Books Is Like A Body Without A Soul.',
    source: 'Marcus Tullius Cicero'
} ,
    {quote: 'I Think Goals Should Never Be Easy, They Should Force You To Work, Even If They Are Uncomfortable At The Time.',
    source: 'Michael Phelps'
} ,
    {quote: 'Today’s Accomplishments Were Yesterday’s Impossibilities.',
    source: 'Robert H. Schuller'
} ,
    {quote: 'The Only Way To Do Great Work Is To Love What You Do. If You Haven’t Found It Yet, Keep Looking. Don’t Settle.',
    source: 'Steve Jobs'
} ,
    {quote: 'You Don’t Have To Be Great To Start, But You Have To Start To Be Great.',
    source: 'Zig Ziglar'
} ,
    {quote: 'A Clear Vision, Backed By Definite Plans, Gives You A Tremendous Feeling Of Confidence And Personal Power.',
    source: 'Brian Tracy',
    citation: 'https://www.briantracy.com/blog/personal-success/26-motivational-quotes-for-success/'
} ,
    {quote: 'There Are No Limits To What You Can Accomplish, Except The Limits You Place On Your Own Thinking.',
    source: 'Brian Tracy',
    citation: 'https://www.briantracy.com/blog/personal-success/26-motivational-quotes-for-success/'
} ,
    {quote: 'Tough times don’t last. Tough people do.',
    source: 'Robert H. Schuller'
} ,
    {quote: 'Integrity Is The Most Valuable And Respected Quality Of Leadership. Always Keep Your Word.',
    source: 'Brian Tracy',
    citation: 'https://www.briantracy.com/blog/personal-success/26-motivational-quotes-for-success/'
} ,
    {quote: 'I have no special talent. I am only passionately curious.',
    source: 'Albert Eisntein'
} ,
    {quote: 'Wisely, and slow. They stumble that run fast.',
    source: 'William Shakespear'
} ,
    {quote: 'If you judge people, you have no time to love them.',
    source: 'Mother Teresa'
} ,
    {quote: 'The greatest wealth is to live content with little.',
    source: 'Plato'
} ,
    {quote: 'The future belongs to those who prepare for it today.',
    source: 'Malcolm X'
} ,
    {quote: 'The successful warrior is the average man, with laser-like focus',
    source: 'Bruce Lee'
} ,
    {quote: 'Don’t count the days, make the days count.',
    source: 'Muhammad Ali'
} ,
    {quote: 'In order to be irreplaceable one must always be different.',
    source: 'Coco Chanel'
} ,
    {quote: 'Be kind whenever possible. It is always possible.',
    source: 'Dalai Lama'
} ,
    {quote: 'Well done is better than well said.',
    source: 'Benjamin Franklin'
} ,
    {quote: 'Our life is frittered away by detail… simplify, simplify.',
    source: 'Henry David Thoreau'
} ,
    {quote: 'Try not to become a man of success but rather to become a man of value.',
    source: 'Albert Einstein'
} ,
    {quote: 'The weak can never forgive. Forgiveness is the attribute of the strong.',
    source: 'Mahatma Gandhi'
} ,
    {quote: 'I don’t think of all the misery but of the beauty that still remains.',
    source: 'Anne Frank'
} ,
    {quote: 'It’s not how much you have that makes people look up to you, it’s who you are. ',
    source: 'Elvis Presley',
    year: 1962
} ,
    {quote: 'A man who stands for nothing will fall for anything.',
    source: 'Malcolm X'
} ,
    {quote: 'You have power over your mind – not outside events. Realize this, and you will find strength. ',
    source: 'Marcus Aurelius'
} ,
    {quote: 'Imperfection is beauty, madness is genius and it’s better to be absolutely ridiculous than absolutely boring.',
    source: 'Marilyn Monroe'
} ,
    {quote: 'Love the life you live. Live the life you love.',
    source: 'Bob Marley'
} ,
    {quote: 'God helps those that help themselves.',
    source: 'Benjamin Franklin'
} ,
    {quote: 'By failing to prepare, you are preparing to fail.',
    source: 'Benjamin Franklin'
} ,
    {quote: 'The future belongs to those who believe in the beauty of their dreams.',
    source: 'Eleanor Roosevelt'
} ,
    {quote: 'Family is the most important thing in the world.',
    source: 'Diana, Princess of Wales'
} ,
    {quote: 'The journey of a thousand miles begins with one step.',
    source: 'Lao Tzu'
} ,
    {quote: 'It’s not whether you get knocked down, it’s whether you get up.',
    source: 'Vince Lombardi'
} ,
    {quote: 'Genius is one percent inspiration, ninety-nine percent perspiration.',
    source: 'Thomas A. Edison'
} ,
    {quote: 'If you think you can do a thing or think you can’t do a thing, you’re right.',
    source: 'Henry Ford'
} ,
    {quote: 'Keep calm and carry on.',
    source: 'Winston Churchill'
} ,
    {quote: 'Get busy living, or get busy dying.',
    source: 'Stephen King'
} ,
    {quote: 'Winners never quit, and quitters never win.',
    source: 'Vince Lombardi'
} ,
    {quote: 'The future starts today, not tomorrow.',
    source: 'Pope John Paul II'
} ,
    {quote: 'The best way to predict your future is to create it.',
    source: 'Abraham Lincoln'
} ,
    {quote: 'Those who dare to fail miserably can achieve greatly. ',
    source: 'John F. Kennedy'
} ,
    {quote: 'Doing the best at this moment puts you in the best place for the next moment.',
    source: 'Oprah Winfrey'
} ,
    {quote: 'For beautiful eyes, look for the good in others; for beautiful lips, speak only words of kindness; and for poise, walk with the          knowledge that you are never alone.',
    source: 'Audrey Hepburn'
} ,
    {quote: 'Don’t settle for what life gives you; make life better and build something. ',
    source: 'Ashton Kutcher'
} ,
    {quote: 'Everything negative – pressure, challenges – is all an opportunity for me to rise.',
    source: 'Kobe Bryant'
} ,
    {quote: 'Those who say it can’t be done are usually interrupted by others doing it.',
    source: 'James Baldwin'
} ,
    {quote: 'One day, in retrospect, the years of struggle will strike you as the most beautiful. ',
    source: 'Sigmund Freud'
} ,
    {quote: 'Always forgive your enemies; nothing annoys them so much. ',
    source: 'Oscar Wilde'
} ,
    {quote: 'You laugh at me because I’m different I laugh at you because you’re all the same.',
    source: 'Lady Gaga'
} ,
    {quote: 'Truth is like the sun. You can shut it out for a time, but it ain’t goin’ away.',
    source: 'Elvis Presley'
} ,
    {quote: 'It is easier to find men who will volunteer to die, than to find those who are willing to endure pain with patience.',
    source: 'Julius Caesar'
} ,
    {quote: 'The two most important days in your life are the day you are born and the day you find out why.',
    source: 'Mark Twain'
} ,
    {quote: 'Wise men talk because they have something to say; fools, because they have to say something. ',
    source: 'Plato'
} ,
    {quote: 'The mind, once stretched by a new idea, never returns to its original dimensions. ',
    source: 'Ralph Waldo Emerson'
} ,
  
];

