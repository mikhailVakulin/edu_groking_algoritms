// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.



// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].


// int[] PlusOne(int[] digits)
// {
//     Int64 multiplication = 1;
//     Int64 value = 0;
//     for (int i = digits.Length - 1; i >= 0; i--)
//     {
//         value += (digits[i] * multiplication);
//         multiplication *= 10;
//     }
//     value += 1;
//     System.Console.WriteLine(value);
//     int[] resultArray = new int[value.ToString().Length];
//     for (int i = resultArray.Length - 1; i >= 0; i--)
//     {
//         resultArray[i] = Convert.ToInt32(value % 10);
//         value /= 10;
//     }
//     return resultArray;
// }


int[] array = { 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 };
System.Console.WriteLine(string.Join(", ", PlusOne(array)));

int[] PlusOne(int[] digits)
{
    // for (int i = digits.Length - 1; i >= 0; i--)
    // {


    if (digits[digits.Length - 1] == 9)
    {
        digits[digits.Length - 1] = 0;
        digits[digits.Length - 2] += 1;
        {
            for (int i = digits.Length - 2; i >= 0; i--)
            {
                if (digits[i] == 10)
                {
                    digits[i] = 0;
                    digits[i - 1] += 1;
                }
            }
        }
        if (digits[0] == 10)
        {
            int[] resultArray = new int[digits.Length + 1];
            resultArray[0] = 1;
            for (int i = 1; i < resultArray.Length; i++)
            {
                resultArray[i] = digits[i];
            }
            return resultArray;
        }
        else return digits;
    }
    else digits[digits.Length - 1] += 1;
    return digits;
}

