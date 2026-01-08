// Shared data for the application

// Game data array: each game object contains id, name, image path from local icons folder, size in GB, and description
const games = [
    { id: 1, name: 'AC Mirage (2023)', image: 'icons/mirage.png', size: 38, description: 'A stealth-action game set in ancient Egypt, featuring the master thief Basim Ibn Ishaq uncovering hidden truths.' },
    { id: 2, name: 'Alan Wake 2: Deluxe Edition (2024)', image: 'icons/alan wake 2.png', size: 85, description: 'A psychological horror game blending live-action and gameplay, where writer Alan Wake fights against the Dark Place.' },
    { id: 3, name: 'A Plague Tale: Innocence (2019)', image: 'icons/a plague tale innocence.ico', size: 45, description: 'A narrative-driven action-adventure game about two siblings surviving the Inquisition and rat hordes in medieval France.' },
    { id: 4, name: 'A Plague Tale: Requiem (2022)', image: 'icons/a plague tale requiem.ico', size: 55, description: 'Sequel to Innocence, following Amicia and Hugo as they search for a cure amidst plague and persecution.' },
    { id: 5, name: 'Battlefield 6 (2025)', image: 'icons/battle field 6.ico', size: 50, description: 'A first-person shooter featuring large-scale battles, vehicles, and destructible environments.' },
    { id: 6, name: 'Bodycam (2024)', image: 'icons/bodycam.png', size: 35, description: 'A horror game experienced through a police bodycam, investigating supernatural occurrences.' },
    { id: 7, name: 'Call of Duty: Black Ops 6 (2024)', image: 'icons/cod black ops 6.png', size: 50, description: 'A first-person shooter in the Black Ops series, featuring multiplayer and campaign modes.' },
    { id: 8, name: 'Call of Duty: Modern Warfare II (2022)', image: 'icons/cod modern warfare 2.png', size: 125, description: 'A reboot of the Modern Warfare series with intense multiplayer and a gripping campaign.' },
    { id: 9, name: 'Call of Duty: Modern Warfare III (2023)', image: 'icons/cod modern warfare 3.png', size: 140, description: 'Sequel to Modern Warfare II, continuing the story with fast-paced action.' },
    { id: 10, name: 'Call of Duty: Vanguard (2021)', image: 'icons/cod vanguard.png', size: 90, description: 'Set in WWII, focusing on the origins of the special operations units.' },
    { id: 11, name: 'Call of Duty WWII (2017)', image: 'icons/cod wwii.png', size: 42, description: 'A WWII-themed shooter with campaign, multiplayer, and zombie modes.' },
    { id: 12, name: 'Call of Duty: Black Ops Cold War (2020)', image: 'icons/cod black ops cold war.png', size: 95, description: 'Set during the Cold War, featuring espionage and intense firefights.' },
    { id: 13, name: 'Crash Bandicoot™ 4: It\'s About Time (2020)', image: 'icons/crash 4.png', size: 24, description: 'A platformer adventure with Crash Bandicoot traveling through dimensions to stop villains.' },
    { id: 14, name: 'Cyberpunk 2077: Ultimate Edition (2020)', image: 'icons/cyberpunk.ico', size: 95, description: 'An open-world RPG set in a dystopian future, with deep storytelling and customization.' },
    { id: 15, name: 'Clair Obscur: Expedition 33 (2025)', image: 'icons/expedition 33.png', size: 40, description: 'A tactical RPG with turn-based combat and a unique art style.' },
    { id: 16, name: 'Control Ultimate Edition (2019)', image: 'icons/control.ico', size: 42, description: 'A supernatural action-adventure game in a mysterious government building.' },
    { id: 17, name: 'Days Gone (2019)', image: 'icons/daysgone.ico', size: 44, description: 'An open-world action game about a biker surviving a zombie apocalypse.' },
    { id: 18, name: 'Detroit: Become Human (2018)', image: 'icons/detroit.ico', size: 55, description: 'An interactive drama about androids gaining consciousness in a near-future Detroit.' },
    { id: 19, name: 'Devil May Cry 5 (2019)', image: 'icons/devil may cry 5.png', size: 40, description: 'A stylish action game with Dante fighting demonic forces.' },
    { id: 20, name: 'Dying Light: The Beast – Deluxe Edition (2025)', image: 'icons/Dying Light The Beast.png', size: 85, description: 'A zombie survival horror game with parkour and crafting.' },
    { id: 21, name: 'Dragon Ball: Sparking! ZERO (2024)', image: 'icons/Dragon Ball Sparking Zero.png', size: 28, description: 'A fighting game featuring characters from the Dragon Ball universe.' },
    { id: 22, name: 'Elden Ring (2022)', image: 'icons/elden ring.png', size: 75, description: 'An open-world action RPG with challenging combat and exploration.' },
    { id: 23, name: 'ELDEN RING NIGHTREIGN (2025)', image: 'icons/elden ring 2025.png', size: 22, description: 'An expansion or variant of Elden Ring with new content.' },
    { id: 24, name: 'eFootball 2021 (2020)', image: 'icons/efootball 21.png', size: 40, description: 'A free-to-play soccer simulation game.' },
    { id: 25, name: 'Far Cry 6 (2021)', image: 'icons/far cry 6.png', size: 130, description: 'An open-world shooter set in a tropical dictatorship.' },
    { id: 26, name: 'Far Cry 5 Gold Edition (2018)', image: 'icons/far cry 5.png', size: 80, description: 'An open-world shooter involving a cult in rural America.' },
    { id: 27, name: 'Far Cry Primal: Apex Edition (2016)', image: 'icons/far cry primal.png', size: 35, description: 'Set in the Stone Age, featuring hunting and tribal warfare.' },
    { id: 28, name: 'FIFA 23 (2022)', image: 'icons/fifa 23.png', size: 47, description: 'A soccer simulation game with realistic gameplay.' },
    { id: 29, name: 'FIFA 21 (2020)', image: 'icons/fifa 21.png', size: 50, description: 'A soccer game with career mode and ultimate team.' },
    { id: 30, name: 'FIFA 22 (2021)', image: 'icons/fifa 22.png', size: 60, description: 'Featuring hyper-motion technology for realistic movements.' },
    { id: 31, name: 'Forza Horizon 5: Premium Edition (2021)', image: 'icons/forza 5.ico', size: 101, description: 'An open-world racing game set in Mexico.' },
    { id: 32, name: 'Ghost of Tsushima DIRECTOR\'S CUT (2024)', image: 'icons/ghost of tsushima.png', size: 50, description: 'An open-world samurai action game set in feudal Japan.' },
    { id: 33, name: 'God of War (2018)', image: 'icons/god of war 2018.png', size: 62, description: 'A soft reboot featuring Kratos and Atreus in Norse mythology.' },
    { id: 34, name: 'God of War: Ragnarök – Digital Deluxe Edition (2024)', image: 'icons/god of war 2024.png', size: 161, description: 'Sequel to the 2018 God of War, continuing the journey.' },
    { id: 35, name: 'Grand Theft Auto: The Trilogy - Definitive Edition (2023)', image: 'icons/Grand Theft Auto – The Definitive Edition.ico', size: 32, description: 'Remastered versions of GTA III, Vice City, and San Andreas.' },
    { id: 36, name: 'Grand Theft Auto V Enhanced (2025)', image: 'icons/Grand Theft Auto V enhanced.png', size: 110, description: 'An open-world action game in Los Santos with heists and stories.' },
    { id: 37, name: 'Hellblade: Senua\'s Sacrifice (2017)', image: 'icons/hellblade.png', size: 17, description: 'A psychological horror game exploring Norse mythology and mental health.' },
    { id: 38, name: 'HITMAN: World of Assassination (2022)', image: 'icons/hitman 3.png', size: 55, description: 'A stealth assassination game with creative kills.' },
    { id: 39, name: 'Hogwarts Legacy: Digital Deluxe Edition (2023)', image: 'icons/hogwarts legacy.png', size: 73, description: 'An open-world RPG set in the Harry Potter universe.' },
    { id: 40, name: 'Horizon Zero Dawn (2017)', image: 'icons/horizon 2017.png', size: 70, description: 'An open-world action RPG with robotic creatures.' },
    { id: 41, name: 'Horizon Forbidden West (2022)', image: 'icons/horizon 2022.png', size: 90, description: 'Sequel to Zero Dawn, exploring new lands and threats.' },
    { id: 42, name: 'High On Life & High On Knife Bundle (2022)', image: 'icons/high on life.png', size: 45, description: 'A sci-fi shooter with alien guns that talk.' },
    { id: 43, name: 'It Takes Two (2021)', image: 'icons/it takes two.png', size: 43, description: 'A cooperative platformer for couples in crisis.' },
    { id: 44, name: 'Injustice 2: Legendary Edition (2017)', image: 'icons/injustice 2.png', size: 52, description: 'A fighting game with DC superheroes and villains.' },
    { id: 45, name: 'Indiana Jones and the Great Circle (2024)', image: 'icons/indiana jones.ico', size: 95, description: 'An adventure game featuring the iconic archaeologist.' },
    { id: 46, name: 'Just Cause 4 (2018)', image: 'icons/just cause 4.png', size: 50, description: 'An open-world action game with destruction and grappling.' },
    { id: 47, name: 'Little Nightmares III (2025)', image: 'icons/little nightmare 3.png', size: 13, description: 'A puzzle-platformer with horror elements.' },
    { id: 48, name: 'Marvel\'s Spider-Man 2: Digital Deluxe Edition (2025)', image: 'icons/marvel spiderman 2.png', size: 107, description: 'An action-adventure game as Spider-Man in New York.' },
    { id: 49, name: 'Marvel\'s Spider-Man: Miles Morales (2020)', image: 'icons/spiderman miles morales.png', size: 48, description: 'A spin-off focusing on Miles Morales as Spider-Man.' },
    { id: 50, name: 'Marvel\'s Spider-Man: Remastered (2022)', image: 'icons/spiderman remastered.png', size: 68, description: 'Remastered version of the original Spider-Man game.' },
    { id: 51, name: 'Marvel\'s Avengers (2020)', image: 'icons/avengers.png', size: 75, description: 'A cooperative action game with Marvel superheroes.' },
    { id: 52, name: 'METAL GEAR SOLID Δ: SNAKE EATER – Digital Deluxe Edition (2025)', image: 'icons/Metal Gear Solid Δ.png', size: 45, description: 'A stealth-action game in the Metal Gear series.' },
    { id: 53, name: 'Mafia The Trilogy Definitive Edition (2020)', image: 'icons/mafia defintive edition.png', size: 100, description: 'Remastered Mafia games with crime stories.' },
    { id: 54, name: 'Mortal Kombat 1: Khaos Reigns (2024)', image: 'icons/mk 1.png', size: 90, description: 'A fighting game with brutal combat and fatalities.' },
    { id: 55, name: 'MindsEye (2025)', image: 'icons/mindseye.png', size: 65, description: 'A mystery game involving mind-reading and puzzles.' },
    { id: 56, name: 'Need for Speed Heat (2019)', image: 'icons/nfs heat.png', size: 50, description: 'A racing game with day and night cycles.' },
    { id: 57, name: 'Need for Speed Payback (2017)', image: 'icons/nfs payback.png', size: 30, description: 'A racing game with revenge storyline.' },
    { id: 58, name: 'Need for Speed Hot Pursuit Remastered (2020)', image: 'icons/nfs hot pusuit remastered.png', size: 25, description: 'Remastered version of the classic racing game.' },
    { id: 59, name: 'NASCAR 25 (2025)', image: 'icons/nascar 25.png', size: 40, description: 'A racing simulation game for NASCAR fans.' },
    { id: 60, name: 'NBA 2K23 (2022)', image: 'icons/nba 23.ico', size: 110, description: 'A basketball simulation game.' },
    { id: 61, name: 'NINJA GAIDEN 4 (2025)', image: 'icons/ninja gaiden 4.png', size: 30, description: 'An action game with ninja combat.' },
    { id: 62, name: 'ONE PIECE: PIRATE WARRIORS 4 (2020)', image: 'icons/one piece 4.png', size: 25, description: 'A hack-and-slash game based on One Piece.' },
    { id: 63, name: 'Ratchet & Clank: Rift Apart (2021)', image: 'icons/Ratchet Clank Rift Apart.png', size: 39, description: 'A platformer shooter with dimensional travel.' },
    { id: 64, name: 'Ready Or Not (2021)', image: 'icons/ready or not.png', size: 60, description: 'A tactical shooter simulating SWAT operations.' },
    { id: 65, name: 'Red Dead Redemption 2: Ultimate Edition (2018)', image: 'icons/red dead 2.png', size: 116, description: 'An open-world western action-adventure game.' },
    { id: 66, name: 'Resident Evil 2: Remake (2019)', image: 'icons/resident evil 2.png', size: 26, description: 'A survival horror game in Raccoon City.' },
    { id: 67, name: 'Resident Evil 4: Remake – Deluxe Edition (2023)', image: 'icons/resident evil 4.png', size: 60, description: 'Remake of the classic action-horror game.' },
    { id: 68, name: 'Rise of the Tomb Raider (2016)', image: 'icons/rise of tomb raider.png', size: 20, description: 'An action-adventure game with Lara Croft.' },
    { id: 69, name: 'Rise of the Ronin (2024)', image: 'icons/rise of the ronin.png', size: 85, description: 'An action game set in feudal Japan.' },
    { id: 70, name: 'Sekiro: Shadows Die Twice (2019)', image: 'icons/sekiro 2019.png', size: 15, description: 'A challenging action game with sword combat.' },
    { id: 71, name: 'SILENT HILL f: Digital Deluxe Edition (2025)', image: 'icons/silent hill f.png', size: 55, description: 'A horror game in the Silent Hill series.' },
    { id: 72, name: 'Silent Hill 2: Digital Deluxe Edition (2024)', image: 'icons/silent hill 2.png', size: 35, description: 'A psychological horror game with emotional storytelling.' },
    { id: 73, name: 'Shadow of the Tomb Raider (2018)', image: 'icons/shadow of the tomb raider.png', size: 40, description: 'The conclusion of Lara Croft\'s origin story.' },
    { id: 74, name: 'Stray (2022)', image: 'icons/stray.png', size: 6, description: 'An adventure game where you play as a cat in a dystopian city.' },
    { id: 75, name: 'Sniper Elite 4 (2017)', image: 'icons/sniper elite 4.png', size: 61, description: 'A sniper simulation game set in WWII.' },
    { id: 76, name: 'SpongeBob SquarePants: Titans of the Tide (2025)', image: 'icons/SpongeBob_SquarePants_Titans_of_the_Tide_Logo (1).ico', size: 10, description: 'An adventure game featuring SpongeBob and friends.' },
    { id: 77, name: 'Team Sonic Racing (2019)', image: 'icons/team sonic racing.png', size: 27, description: 'A kart racing game with Sonic characters.' },
    { id: 78, name: 'Tekken 7 (2015)', image: 'icons/tekken 7.png', size: 57, description: 'A fighting game in the Tekken series.' },
    { id: 79, name: 'Tekken 8 (2024)', image: 'icons/tekken 8.png', size: 110, description: 'Latest installment with advanced graphics and combat.' },
    { id: 80, name: 'The Crew 2: Gold Edition (2018)', image: 'icons/the crew 2.ico', size: 36, description: 'An open-world racing game across America.' },
    { id: 81, name: 'The Last of Us: Part I – Digital Deluxe Edition (2023)', image: 'icons/the last of us 1.png', size: 77, description: 'A post-apocalyptic action-adventure game.' },
    { id: 82, name: 'The Last of Us: Part II – Remastered (2025)', image: 'icons/the last of us 2.png', size: 84, description: 'Sequel with intense storytelling and combat.' },
    { id: 83, name: 'The Witcher 3: Wild Hunt (2015)', image: 'icons/the witcher 3.ico', size: 50, description: 'An open-world RPG with monster hunting and choices.' },
    { id: 84, name: 'UNCHARTED: Legacy of Thieves Collection (2022)', image: 'icons/uncharted 2024.png', size: 124, description: 'Remastered Uncharted games with Nathan Drake.' },
    { id: 85, name: 'Until Dawn (2024)', image: 'icons/until dawn.png', size: 65, description: 'An interactive drama with branching choices.' },
    { id: 86, name: 'Watch Dogs: Legion (2020)', image: 'icons/watch dogs legion.png', size: 45, description: 'An open-world hacking game in a dystopian London.' },
    { id: 87, name: 'WWE 2K25 (2025)', image: 'icons/wwe 2025.png', size: 120, description: 'A wrestling simulation game.' },
];

// WhatsApp number for checkout (replace with your actual WhatsApp number)
const whatsappNumber = '+21653139907'; // Replace with actual WhatsApp number

// Utility functions for localStorage
function getCart() {
    return JSON.parse(localStorage.getItem('gamingCart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('gamingCart', JSON.stringify(cart));
}

function getSelectedStorage() {
    return parseInt(localStorage.getItem('selectedStorage')) || 500;
}

function saveSelectedStorage(storage) {
    localStorage.setItem('selectedStorage', storage.toString());
}