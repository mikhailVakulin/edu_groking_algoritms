
int[] list1 = { 1, 2, 4 };
int[] list2 = { 1, 3, 4 };
int[] resultArray = new int[list1.Length + list2.Length];
int i = 0; // счетчик стартововго
int j = 0; // счетчик результирующего 
while (j < resultArray.Length)
{
    if (list1[i] <= list2[i])
    {
        resultArray[j] = list1[i];
        resultArray[j + 1] = list2[i];
    }
    else
    {

        resultArray[j] = list2[i];
        resultArray[j + 1] = list1[i];
    }
    i++;
    j += 2;
}

System.Console.WriteLine(string.Join(", ", resultArray));
