// Me: Let's pretend there is no time at all.

// @see https://github.com/sgwilym/quadrantal-hours-clock/

/**
 *  This concept originated in [Twodays Crossing](https://github.com/earthstar-project/twodays-crossing), an Earthstar chat app.
 *  This clock was created by [@cinnamon-bun](https://github.com/cinnamon-bun). We miss you.
 */

/*
  I loved the idea of the seasonal clock, which makes synchronised hours around the world by being linked to UTC.
  But I am far from England, France, Germany, etc and the further away from UTC you go, the more evident the local temporality of many of the emojis.
  So this clock removes those.
  Normal day: morning/afternoon/evening/night
  Seasonal day: spring/summer/fall/winter
  atem day: ladderning, moosening, kitening, leafening
*/
const hourTable = {
    0: {
        quadrant: "Ladderning (🪜)",
        shortName: "chair",
        longName: "chair time",
        emoji: "🪑",
    },
    1: {
        quadrant: "Ladderning (🪜)",
        shortName: "bowl",
        longName: "bowl time",
        emoji: "🥣",
    },
    2: {
        quadrant: "Moosening (🫎)",
        shortName: "moose",
        longName: "moose time",
        emoji: "🫎",
    },
    3: {
        quadrant: "Moosening (🫎)",
        shortName: "duck",
        longName: "duck time",
        emoji: "🦆",
    },
    4: {
        quadrant: "Moosening (🫎)",
        shortName: "bee",
        longName: "bee time",
        emoji: "🐝",
    },
    5: {
        quadrant: "Moosening (🫎)",
        shortName: "lizard",
        longName: "lizard time",
        emoji: "🦎",
    },
    6: {
        quadrant: "Moosening (🫎)",
        shortName: "fish",
        longName: "fish time",
        emoji: "🐟",
    },
    7: {
        quadrant: "Moosening (🫎)",
        shortName: "squid",
        longName: "squid time",
        emoji: "🦑",
    },
    8: {
        quadrant: "Kitening (🪁)",
        shortName: "kite",
        longName: "kite time",
        emoji: "🪁",
    },
    9: {
        quadrant: "Kitening (🪁)",
        shortName: "teddy bear",
        longName: "teddy bear time",
        emoji: "🧸",
    },
    10: {
        quadrant: "Kitening (🪁)",
        shortName: "balloon",
        longName: "balloon time",
        emoji: "🎈",
    },
    11: {
        quadrant: "Kitening (🪁)",
        shortName: "abacus",
        longName: "abacus time",
        emoji: "🧮",
    },
    12: {
        quadrant: "Kitening (🪁)",
        shortName: "fiddle",
        longName: "violin time",
        emoji: "🎻",
    },
    13: {
        quadrant: "Kitening (🪁)",
        shortName: "drum",
        longName: "drum time",
        emoji: "🥁",
    },
    14: {
        quadrant: "Leafening (🌿)",
        shortName: "leaf",
        longName: "leaf time",
        emoji: "🌿",
    },
    15: {
        quadrant: "Leafening (🌿)",
        shortName: "blossom",
        longName: "blanket flower time",
        emoji: "🌼",
    },
    16: {
        quadrant: "Leafening (🌿)",
        shortName: "log",
        longName: "log time",
        emoji: "🪵",
    },
    17: {
        quadrant: "Leafening (🌿)",
        shortName: "grape",
        longName: "grape time",
        emoji: "🍇",
    },
    18: {
        quadrant: "Leafening (🌿)",
        shortName: "tree",
        longName: "tree time",
        emoji: "🌳",
    },
    19: {
        quadrant: "Leafening (🌿)",
        shortName: "strawberry",
        longName: "strawberry time",
        emoji: "🍓",
    },
    20: {
        quadrant: "Ladderning (🪜)",
        shortName: "ladder",
        longName: "ladder time",
        emoji: "🪜",
    },
    21: {
        quadrant: "Ladderning (🪜)",
        shortName: "jar",
        longName: "jar time",
        emoji: "🫙",
    },
    22: {
        quadrant: "Ladderning (🪜)",
        shortName: "key",
        longName: "key time",
        emoji: "🗝️",
    },
    23: {
        quadrant: "Ladderning (🪜)",
        shortName: "spoon",
        longName: "spoon time",
        emoji: "🥄",
    },
};

function getUtcHour() {
    // Return the current hour of the day in UTC time,
    // including fractional hours.
    // Example: 03:20 --> 3.33333
    // Range: 0 to 23.99999
    let now = new Date();
    return (
        now.getUTCHours() +
        now.getUTCMinutes() / 60 +
        now.getUTCSeconds() / 60 / 60
    );
}

function getHourOf() {
    let intHour = Math.floor(getUtcHour());
    return hourTable[intHour];
}
