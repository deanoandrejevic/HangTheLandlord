function showRules(event) {
  $("#game-rules").html(
    `
    <h1>RULES!</h1>
    <p>Hang the Landlord is based off the who wants to be millionaire quiz model.</p>
    <ul>
    <li>You will have 15 seconds to answer each question, if you do not answer in time you lose</li>
    <li>Every 5 questions your position will be locked in at a checkpoint</li>
    <li>If you answer incorrectly between these checkpoints your final score will be based on the last checkpoint </li>
    <li>You will get one hint per round</li>
    <li>The more questions you get right the further you climb up the ladder</li>
    <li>If you answer all 20 questions correctly then you win the game!</li>
    </ul>
    `
  ).css("background-color", "rgba(0, 0, 0, 0.2)")
}



