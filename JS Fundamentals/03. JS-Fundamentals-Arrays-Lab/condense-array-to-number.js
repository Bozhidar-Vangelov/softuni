function condenseArrayToNumber(nums) {
  while (nums.length > 1) {
    let condensed = [];
    for (i = 0; i < nums.length - 1; i++) {
      condensed[i] = nums[i] + nums[i + 1];
    }
    nums = condensed;
    condensed = 0;
  }

  console.log(Number(nums));
}

condenseArrayToNumber([2, 10, 3]);
