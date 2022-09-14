// Given an integer number n, return the difference between the product of its digits and the sum of its digits.


// Example 1:

// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15

int SubtractProductAndSum(int n)
{
    System.Console.WriteLine(n);
    int sum = 0;
    int multiplication = 1;
    while (n >= 1)
    {
        sum += n % 10;
        multiplication *= n % 10;
        n /= 10;
    }
    return multiplication - sum;
}

System.Console.WriteLine(SubtractProductAndSum(234));