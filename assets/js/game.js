function showRules(event) {
  $("#rules-button").html(
    `<div>
        <h1>RULES!</h1>
        <p>This Game is based off the who wants to be millonaire model.</p>
        <ul>
        <li>The more questions you get right the further you climb up the ladder</li>
        <li>Every 5 questions your position will be locked in at a checkpoint</li>
        <li>If you answer incorrectly between these checkpoints your final score will be based on the last checkpoint </li>
        <li>You will get one hint per round</li>
        <li>If you answer all 20 questions correctly then you win the game!</li>
        </ul>
        </div>`
  );
};
