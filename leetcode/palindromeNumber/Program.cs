bool IsPalindrome(int x)
{
    int counter = x;
    int size = 0;
    if (counter > 0)
    {
        while (counter >= 1)
        {
            counter /= 10;
            size++;
        }
        int[] array = new int[size];
        int end = size - 1;
        while (x >= 1)
        {
            array[size - 1] = x % 10;
            size--;
            x /= 10;
        }
        for (int i = 0; i <= array.Length / 2; i++)
        {
            if (array[i] == array[end]) end--;
            else return false;
        }
        return true;
    }
    else if (x == 0) return true;
    else return false;
}
System.Console.WriteLine(IsPalindrome(0));