// RolloutHQ enforces a max token lifetime of 1 hour, but it's reccommended for tokens
// to be as short-lived as possible
const TOKEN_TTL_SECS = 300; // 5 mins

function generateRolloutConnectToken(userId) {
  const nowSecs = Math.round(new Date() / 1000);
  return jsonwebtoken.sign(
    {
      iss: process.env.ROLLOUT_CONNECT_CLIENT_ID, // Provided in the RolloutHQ dashboard
      sub: userId, // Persistent identifier for the consuming user
      iat: nowSecs, // Time token was generated
      exp: nowSecs + TOKEN_TTL_SECS, // Token expiration
    },
    process.env.ROLLOUT_CONNECT_PRIVATE_KEY, // Downloaded from the RolloutHQ dashboard
    { algorithm: "RS256" }
  );
}
