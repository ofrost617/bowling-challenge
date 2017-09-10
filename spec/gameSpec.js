describe ('Game', function() {

  describe ('Frame spec', function() {

    beforeEach(function() {
      game = new Game();
    });

    // it('frames are stored as an array', function() {
    //   expect(game.scoreTable instanceof Array).toBeTruthy
    // });

    //  it('there are 10 frames in a game', function() {
    //   expect(game.scoreTable.length).toBe(10)
    // });

    // it('a frame can have up to 2 rolls', function() {
    //   expect(game.frame.length).toBe(2)
    // });

  });


  describe ('Roll Spec', function() {

    beforeEach(function() {
      game = new Game();
    });

    // it('player can roll', function() {
    //   expect(game.allowedToRoll).toBe(true)
    // });

    it('rolling gives a score between 0 and 10', function() {
      game.roll()
      // expect(game.roll).toBeWithinRange(0, 10);
      expect(0 <= game.firstRoll <= 10).toBeTruthy();
    });

    it('stores the first roll in the frame array', function() {
      game.roll()
      expect(game.frameTable[0] >= 0 && game.frameTable[0] <= 10).toBeTruthy();
    });

    it('stores the second roll in the frame array', function() {
      game.roll()
      game.roll()
      expect(0 <= game.scoreTable.last <= 10).toBeTruthy();
    });

    it('frame table empties after 2 rolls', function() {
      game.roll()
      game.roll()
      expect(game.frameTable.length).toBe(0);
    });

    it('only rolls once if roll 1 scores a strike', function() {
      game.frame[0] = 10
      expect(function(){game.roll2(10); }).toThrowError("You got a strike, only 1 roll this frame")
    });

  });


  describe ('Game Spec', function() {

    beforeEach(function() {
      game = new Game();
    });

    it('score starts at 0', function() {
      expect(game.runningScore).toBe(0)
    });

  });
  
  

  // it('is a gutter game if score at end = 0', function() {
  //   // game.score = 0
  //   // game.frameNum = 10
  //   expect(game.finalScore).toBe('Your total score is 0- GUTTER GAME!')
  // });

});