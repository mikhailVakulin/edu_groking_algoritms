
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
    int middle = 0;
    while (low <= high)
    {
        middle = (low + high) / 2;
        if (array[middle] == number) return Convert.ToString(middle);
        if (array[middle] > number) high = middle - 1;
        else low = middle + 1;
    }
    return " значение не найдено";
}

int[] array = FillArray(10);
System.Console.WriteLine(string.Join("; ", array));
System.Console.WriteLine(BinarySearchRekurs(7, array, 0, array.Length - 1));



// Написать метод с рекурсией- используя принцип разделяй и властвуй
// базовый случай- в искомой части осталься один элемент (low == high) return low
//рекурсивный случай

string BinarySearchRekurs(int number, int[] array, int low, int high)
{
    int middle = (low + high) / 2;
    if (array[middle] == number && low == high) return Convert.ToString(middle);
    else if (array[middle] != number && low == high) return "значение не найдено";
    else if (array[middle] > number) return BinarySearchRekurs(number, array, low, middle - 1);
    else return BinarySearchRekurs(number, array, middle + 1, high);
}


if (BinarySearchRekurs(7, array, 0, array.Length - 1) != "значение не найдено")
{
Convert.ToInt32(BinarySearchRekurs(7, array, 0, array.Length - 1));
}
