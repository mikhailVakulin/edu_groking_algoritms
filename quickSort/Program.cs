void quickSort(int[] array)
{
    int[]newLeftArr=new int[];
    int pivot = new Random().Next(array.Length);
    for (int i = 0; i < array.Length; i++)
    {
        if (array[i] < array[pivot])
        {
            for (int j = 0; ; )
            {
                newLeftArr[j]= array[i];
            }
            
            
        }
    }
}

