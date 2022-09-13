// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].



// Example 1:

// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].


int[] Shuffle(int[] nums, int n)
{
    int[] arrayX = new int[n];
    int[] arrayY = new int[n];
    int j = 0;
    for (int i = 0; i < n; i++) arrayX[i] = nums[i];
    for (int i = n; i < nums.Length; i++)
    {
        arrayY[j] = nums[i];
        j++;
    }
    j = 0;
    for (int i = 0; i < nums.Length; i++)
    {

        nums[i] = arrayX[j];
        i++;
        nums[i] = arrayY[j];
        j++;
    }
    return nums;
}

