const imitateServerFailure = () => {
    const failureChance = Math.random();
    if (failureChance >= 0.5) {
        throw new Error("Server is down, reason: your bad luck")
    }
}

module.exports = imitateServerFailure;