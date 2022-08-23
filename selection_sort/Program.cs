/// метод сортировки выбором


int[] selectionSort(int[] array)
{
    for (int i = 0; i < array.Length; i++)
    {
        for (int j = i; j < array.Length; j++)
        {
            if (array[i] > array[j])
            {

                int temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }

    }
    return array;
}

int[]array= {10,16,3,1,4,9,78,99,65};
System.Console.WriteLine(string.Join(", ", selectionSort(array)));