// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.



// Example 1:

// Input: nums = [1, 2, 3, 4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

int[] RunningSum(int[] nums)
{
    int sum = 0;
    int[] resultArray = new int[nums.Length];
    for (int i = 0; i < nums.Length; i++)
    {
        resultArray[i] = nums[i] + sum;
        sum = resultArray[i];
    }
    return resultArray;
}

int[] array = { 1, 2, 3, 4 };
System.Console.WriteLine(string.Join(", ", RunningSum(array)));