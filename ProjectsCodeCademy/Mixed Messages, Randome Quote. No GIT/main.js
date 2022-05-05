// In this project, you’ll build a message generator program that outputs a new, random message every time a user runs the program. Your program should showcase basic JavaScript syntax and programming concepts.*//
let QuoteBodyDiv= [
    "Charity suffereth long, and is kind; charity envieth not; charity vaunteth, not itself, is not puffed up, Doth not behave itself unseemly, seeketh not her own, is not easily provoked, thinketh no evil. -1 Corinthians 13:4-5",
    "Rejoice evermore. Pray without ceasing. In everything give thanks: for this is the will of God in Christ Jesus concerning you. -1 Thessalonians 5:16-18",
    "Be careful for nothing, but in everything by prayer and supplication with thanksgiving let your requests be made known unto God. And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus. - Philippians 4:6-7",
    "And these words, which I command thee this day, shall be in thine heart: And thou shalt teach them diligently unto thy children, and shalt talk of them when thou sittest in thine house, and when thou walkest by the way, and when thou liest down, and when thou risest up.- Deuteronomy 6:6-7",
    "Blessed is the man that trusteth in the Lord, and whose hope the Lord is. For he shall be as a tree planted by the waters, and that spreadeth out her roots by the river, and shall not see when heat cometh, but her leaf shall be green; and shall not be careful in the year of drought, neither shall cease from yielding fruit.- Jeremiah 17:7-8",
    "Therefore I say unto you, What things soever ye desire, when ye pray, believe that ye receive them, and ye shall have them.- Mark 11:24",
    "The Lord bless thee, and keep thee: The Lord make his face shine upon thee, and be gracious unto thee: The Lord lift up his countenance upon thee, and give thee peace.- Numbers 6:24-26",
    "Let all your things be done with charity.- 1 Corinthians 16:14",
    "That he would grant you, according to the riches of his glory, to be strengthened with might by his Spirit in the inner man; That Christ may dwell in your hearts by faith; that ye, being rooted and grounded in love.- Ephesians 3:16-17",
    "But they that wait upon the Lord shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.- Isaiah 40:31",
    "Commit thy works unto the Lord, and thy thoughts shall be established.- Proverbs 16:3",
    "Cause me to hear thy lovingkindness in the morning; for in thee do I trust: cause me to know the way wherein I should walk; for I lift up my soul unto thee.- Psalm 143:8",
    "Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness.- Isaiah 41:10",
    "For I know the thoughts that I think toward you, saith the Lord, thoughts of peace, and not of evil, to give you an expected end.- Jeremiah 29:11",
    "For we walk by faith, not by sight.- 2 Corinthians 5:7",
    "And ye shall serve the Lord your God, and he shall bless thy bread, and thy water; and I will take sickness away from the midst of thee.- Exodus 23:25",
    "Now the God of hope fill you with all joy and peace in believing, that ye may abound in hope, through the power of the Holy Ghost. - Romans 15:13",
    "And they said, Believe on the Lord Jesus Christ, and thou shalt be saved, and thy house. -Acts 16:31",
    "And whatsoever ye do, do it heartily, as to the Lord, and not unto men; Knowing that of the Lord ye shall receive the reward of the inheritance: for ye serve the Lord Christ. - Colossians 3:23-24",
]



function rotateQuoteBodyDiv() {
    document.getElementById('QuoteBodyDiv');
    setTimeout(function() {
        let rand1 = Math.floor(Math.random() * QuoteBodyDiv.length)
        let rand2 = Math.floor(Math.random() * QuoteBodyDiv.length)
        let rand3 = Math.floor(Math.random() * QuoteBodyDiv.length)
        if (rand1 === rand2 || rand1 === rand3 || rand2 === rand3) {
            while (rand1 === rand2 || rand1 === rand3 || rand2 === rand3) {
                rand1 = Math.floor(Math.random() * QuoteBodyDiv.length)
                rand2 = Math.floor(Math.random() * QuoteBodyDiv.length)
                rand3 = Math.floor(Math.random() * QuoteBodyDiv.length)
            }
        }
        let quote1 = QuoteBodyDiv[rand1]
        let quote2 = QuoteBodyDiv[rand2]
        let quote3 = QuoteBodyDiv[rand3]
        document.getElementById('quote1').innerHTML = `"${quote1}"`
        document.getElementById('quote2').innerHTML = `"${quote2}"`
        document.getElementById('quote3').innerHTML = `"${quote3}"`
        document.getElementById('QuoteBodyDiv');    
    }, 19)
}

rotateQuoteBodyDiv();

let SubmitBTN = document.getElementById('SubmitBTN')
SubmitBTN.addEventListener('click', rotateQuoteBodyDiv)

 // console.log(`quote 1: ${quote1}`)
 // console.log(`quote 2: ${quote2}`)
 // console.log(`quote 3: ${quote3}`)
/*
// test with smaller function & array
//let QuoteBodyDiv = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentQuoteBodyDiv= '';
 while (currentQuoteBodyDiv='') {
   currentQuoteBodyDiv = QuoteBodyDiv[Math.floor(Math.random() * 19)];

 console.log(currentQuoteBodyDiv);
  };
*/

  