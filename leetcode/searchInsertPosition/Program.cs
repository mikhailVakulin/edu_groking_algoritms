

int SearchInsert(int[] nums, int target)
{
    int i = 0;

    if (target > nums[nums.Length - 1]) return nums.Length;

    while (nums[i] < target) i++;
    int left = i;
    i = nums.Length - 1;

    while (nums[i] > target && i > 0) i--;
    int right = i;


    if (left > right) return left;
    else if (left == right) return left;
    else return 0;
}

int[] array = { 1, 3, 5, 6 };
System.Console.WriteLine(SearchInsert(array, 7));