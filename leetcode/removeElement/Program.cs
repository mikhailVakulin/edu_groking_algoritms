

int RemoveElement(int[] nums, int val)
{

    int k = 0;
    for (int i = 0; i < nums.Length; i++)
    {
        if (nums[i] != val) k++;
    }

    System.Console.WriteLine(k);

    int start = 0, end = nums.Length - 1;
    for (int i = 0; i < k; i++)
    {
        if (nums[i] == val)
        {
            while (nums[end] == val)
            {
                end--;
            }
            int temp = nums[i];
            nums[i] = nums[end];
            nums[end] = temp;
        }
    }
    return k;
}

int[] array = { 0, 1, 2, 2, 3, 0, 4, 2 };
RemoveElement(array, 2);
System.Console.WriteLine(string.Join(", ", array));