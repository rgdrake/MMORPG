export const RandomDice = {
	roll(count = 1, sides = 20, min = 1) {
		let sum = 0;
		while (count--) {
			sum += Math.floor(Math.random() * sides) + min;
		}
		return sum;
	},
	rollStats(player) {
		const stats = {};
		Object.keys(player.stats).forEach(statName => {
			stats[statName] = this.roll(3, 6);
		});
		return stats;
	}
}