function highAndLow(numbers) {
    nums = (numbers.split(' ')).map(Number).sort((a, b) => a - b)
    return `${nums[nums.length - 1]} ${nums[0]}`
}