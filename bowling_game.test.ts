// Suggested Test Cases

// (When scoring “X” indicates a strike, “/” indicates a spare, “-” indicates a miss)

//     X X X X X X X X X X X X (12 rolls: 12 strikes) = 10 frames * 30 points = 300
//     9- 9- 9- 9- 9- 9- 9- 9- 9- 9- (20 rolls: 10 pairs of 9 and miss) = 10 frames * 9 points = 90
//     5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5 (21 rolls: 10 pairs of 5 and spare, with a final 5) = 10 frames * 15 points = 150

const { getBowlingScore } = require( "./bowling_game");

describe("getBowlingScore function", () => {
  test.each([
    ["X X X X X X X X X X X X", 300],
    ["9- 9- 9- 9- 9- 9- 9- 9- 9- 9-", 90],
    ["5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5", 150],
    ["6/ 81 -- -- -- -- -- -- -- --", 27],
    ["6/ 81 ?? ?? ?? ?? ?? ?? ?? ??", 0],
  ])(`should score the bowling line %p as %p`, (bowlingLine, score) => {
    expect(getBowlingScore(bowlingLine)).toEqual(score);
  });
});

// I'm aware that in a real-world scenario I need to be much more thorough with test cases!
