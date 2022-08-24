
/// <summary> 
/// Заполнение массива числами по возрастанию
int[] FillArray(int size)
{
    int[] array = new int[size];
    for (int i = 0; i < array.Length; i++) array[i] = i + 1;
    return array;
}


/// бинарный поиск
string BinarySearch(int number, int[] array)
{
    int low = 0;
    int high = array.Length - 1;
    int middle=0;
    while (low <= high)
    {
        middle = (low + high) / 2;
        if (array[middle] == number) return Convert.ToString(middle);
        if (array[middle] > number) high = middle-1;
        else low = middle+1;       
    }
    return " значение не найдено";
}

int[] array = FillArray(10);
System.Console.WriteLine(BinarySearch(5,array));



// Написать метод с рекурсией- используя принцип разделяй и властвуй