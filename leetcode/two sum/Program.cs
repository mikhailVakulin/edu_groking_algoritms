int[] array = { 0, 4, 3, 0 };

int[] TwoSum(int[] nums, int target)
{
    int index1, index2;
    for (int i = 0; i < nums.Length; i++)
    {

        int temp = target - nums[i];
        index1 = i;
        for (int j = i + 1; j < nums.Length; j++)
        {
            if (temp == nums[j])
            {
                index2 = j;
                int[] resultArray = { index1, index2 };
                return resultArray;
            }
        }
    }
    return nums;
}


System.Console.WriteLine(string.Join(", ", TwoSum(array, 0)));